const express = require('express');
const router = express.Router();
const chatController = require('./../controllers/chatController');
const appConfig = require('./../../config/appConfig');
const auth = require('./../middlewares/auth');

module.exports.setRouter =(app)=>{

    let baseUrl = `${appConfig.apiVersion}/chat`
    
    app.get(`${baseUrl}/getUsersChat`,auth.isAuthorized,chatController.getUsersChat);
    /**
     * @apiGroup chat
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chat/getUsersChat to get paginated chats of user.
     * 
     * @apiParam {string} senderId userId of logged in user. (query params) (required)
     * @apiParam {string} receiverId userId receiving user. (query params) (required)
     * @apiParam {number} skip skip value for pagination. (query params) (optional)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
          "error": false,
          "message": "All Chats Listed",
          "status": 200,
          "data": [
            {
              "chatId": "EVjxELO6",
              "modifiedOn": "2018-03-05T15:36:31.026Z",
              "createdOn": "2018-03-05T15:36:31.025Z",
              "message": "hello .. ..",
              "receiverId": "ieTVTYA8",
              "receiverName": "Keerthi Gana",
              "senderId": "-iYj5cA7k",
              "senderName": "some Name"
            },
            {
              "chatId": "-iYj5cA7k",
              "modifiedOn": "2018-03-05T15:36:39.548Z",
              "createdOn": "2018-03-05T15:36:39.547Z",
              "message": "hello riya .. .. .. ",
              "receiverId": "EVjxELO6",
              "receiverName": "some Name",
              "senderId": "ieTVTYA8",
              "senderName": "Keerthi Gana"
            },
            .........................
          ]
        }
   */

    app.post(`${baseUrl}/markChatAsSeen`,auth.isAuthorized,chatController.markChatAsSeen);

    app.get(`${baseUrl}/countUnseenChat`,auth.isAuthorized,chatController.countUnSeenChat);

    app.get(`${baseUrl}/findUnseenChat`,auth.isAuthorized,chatController.findUnSeenChat);

    app.get(`${baseUrl}/userListOfUnseenChat`,auth.isAuthorized,chatController.findUserListOfUnseenChat);




}