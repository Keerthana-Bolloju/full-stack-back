const socketio = require('socket.io')
const mongoose = require('mongoose')
const shortid = require('shortid')
const logger = require('./loggerLib.js')
const token = require('./tokenLib.js')
const check = require('./checkLib.js')
const response = require('./responseLib.js')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const smtpTransport = require('nodemailer-smtp-transport')
const events = require('events')
const eventEmitter = new events.EventEmitter()


const redis = require('./redisLib')

const ChatModel = mongoose.model('Chat')

let setServer = (server)=>{
    let io = socketio.listen(server)
    let myIo = io.of('');

    myIo.on('connection',(socket)=>{
        console.log('on connection -- emitting user')
            

        /*----------- Emitting verify User to verify the user-----------*/
        /**
         * @api {listen} verifyUser Verification of user
         * @apiVersion 0.0.1
         * @apiGroup Listen 
         * @apiDescription This event <b>("verifyUser")</b> has to be listened on the user's end to verify user authentication.
            User will only be set as online user after verification of authentication token.
        */
       socket.emit('verifyUser',"")
            /**
             * @api {emit} set-user Setting user online
             * @apiVersion 0.0.1
             * @apiGroup Emit 
             *@apiDescription This event <b>("set-user")</b> has to be emitted when a user comes online.
                User can only be set as online into online user hash only after verification of authentication token. Which you have pass here. The following data has to be emitted
            */       
        socket.on('set-user',(authToken)=>{
            token.verifyClaimsWithOutSecret(authToken,(err,user)=>{

                if(err){
                    /**
                         * @api {listen} auth-error Emitting auth error on fail of token verification
                         * @apiVersion 0.0.1
                         * @apiGroup Listen 
                         *@apiDescription This event <b>("auth-error")</b> has to be listened by the current room and will be triggered if there comes any auth-token error
                            *@apiExample The example data as output
                            *{
                                {
                                "status": 500,
                                "error": Please provide correct auth token
                                }
                            }
                        */
                socket.emit('auth-error',{status:500,error:'please provide correct auth token'})            
                }else{
                    console.log('user is verified and setting details...')
                    let currentUser = user.data;
                    //setting socketuser
                    socket.userId = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    let key = socket.userId
                    let value = fullName
    
                    redis.setNewOLUserInHash('onlineUsers',key,value,(err,result)=>{
                        if(err){
                            console.log(err.message,'socketLib:setNewOLUserInHash',10)
                        }else{
                            redis.getAllUsersInHash('onlineUsers',(err,result)=>{
                                console.log(`${fullName} successfully added to online user list.`)
                                logger.info(`${fullName} successfully added to online user list.`)
                                console.log(`${fullName} is online`);
                                socket.room = 'Ping-Youu-Group'
                                socket.join(socket.room)
                                socket.emit('online-user-list',result)
                                console.log(result)
                                myIo.to(socket.room).emit('online-user-list',result) // why are you keep giving different names everywhere
                            })
                        }
                    })
                }
                
            })//end verify token
        })//end set-user
        socket.on('disconnect', () => {
            console.log("user is disconnected");
            console.log(socket.userId);

            //user will emit when disconnected
            //will remove user from online user list
            if (socket.userId) {
                redis.deleteUserFromHash('onlineUsers', socket.userId)
                redis.getAllUsersInHash('onlineUsers', (err, result) => {
                    if (err) {
                        logger.error(err.message, "socketLib:getAllUsersInAHash", 10)
                    } else {
                       socket.leave(socket.room)
                        // socket.to(socket.room).broadcast.emit('online-user-list', result);
                        myIo.to(socket.room).emit('online-user-list',result)
                        socket.emit('online-user-list',result)

                    }
                })//end get all users in a hash
            }
        }) // end of on disconnect  

        socket.on('chat-msg', (data) => {
            console.log("socket chat-msg called")
            console.log(data);
            data['chatId'] = shortid.generate()
            console.log(data);

            // event to save chat.
            setTimeout(function () {
                eventEmitter.emit('individual-save-chat', data);
            }, 2000)
            myIo.emit(data.receiverId, data)
           // myIo.to(data.receiverId).emit('message', data);   

        }); // end chat-msg
        
        socket.on('typing', (fullName) => {
            socket.to(socket.room).broadcast.emit('typing', fullName);
        });// end typing

    })
}
//database operations are kept outside of socket.io code 
//saving chats to database
eventEmitter.on('individual-save-chat',(data)=>{
    let newChat = new ChatModel({
        chatId:data.chatId,
        senderId:data.senderId,
        senderName:data.senderName,
        receiverId:data.receiverId,
        receiverName:data.receiverName,
        message:data.message,
        chatRoom:data.chatRoom,
        createdOn:data.createdOn
    });
    newChat.save((err,result)=>{
        if(err){
            logger.error("error occurred", "socketLib:individual-save-chat", 10);
            console.log(`error occured: ${err}`)
        }else if(result == undefined || result == null || result == ''){
            logger.error("error occurred", "socketLib:individual-save-chat", 10);
            console.log('chat not saved')
        }else{
            logger.info("Chat Saved", "socketLib:individual-save-chat", 10);
            console.log('chat saved')
            console.log(result)
        }
    })
})

module.exports = {
    setServer:setServer
}