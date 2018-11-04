define({ "api": [
  {
    "group": "CHAT",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/countUnseenChat",
    "title": "to get count of unseen messages.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"unseen chat count found.\",\n  \"status\": 200,\n  \"data\": 5\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "CHAT",
    "name": "GetApiV1ChatCountunseenchat"
  },
  {
    "group": "CHAT",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/findUnseenChat",
    "title": "to get paginated unseen chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"chat found and listed.\",\n  \"status\": 200,\n  \"data\": [\n    {\n        \"chatId\": \"EVjxELO6\",\n        \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n        \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n        \"message\": \"hello .. ..\",\n        \"receiverId\": \"ieTVTYA8\",\n        \"receiverName\": \"Keerthi Gana\",\n        \"senderId\": \"-iYj5cA7k\",\n        \"senderName\": \"some Name\"\n      },\n      {\n        \"chatId\": \"-iYj5cA7k\",\n        \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n        \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n        \"message\": \"hello  .. .. .. \",\n        \"receiverId\": \"EVjxELO6\",\n        \"receiverName\": \"some Name\",\n        \"senderId\": \"ieTVTYA8\",\n        \"senderName\": \"Keerthi Gana\"\n      },\n    .........................\n  ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "CHAT",
    "name": "GetApiV1ChatFindunseenchat"
  },
  {
    "group": "CHAT",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/getGroupChat",
    "title": "to get paginated chats of Group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoom",
            "description": "<p>Chat Room Id . (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"All Chats Listed\",\n \"status\": 200,\n \"data\": [\n   {\n       \"chatId\": \"EVjxELO6\",\n       \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n       \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n       \"message\": \"hello .. ..\",\n       \"receiverId\": \"ieTVTYA8\",\n       \"receiverName\": \"Keerthi Gana\",\n       \"senderId\": \"-iYj5cA7k\",\n       \"senderName\": \"some Name\"\n     },\n     {\n       \"chatId\": \"-iYj5cA7k\",\n       \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n       \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n       \"message\": \"hello  .. .. .. \",\n       \"receiverId\": \"EVjxELO6\",\n       \"receiverName\": \"some Name\",\n       \"senderId\": \"ieTVTYA8\",\n       \"senderName\": \"Keerthi Gana\"\n     },\n   .........................\n ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n  \"error\": true,\n  \"message\": \"No Chat Found\",\n  \"status\": 404,\n  \"data\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "CHAT",
    "name": "GetApiV1ChatGetgroupchat"
  },
  {
    "group": "CHAT",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/getUsersChat",
    "title": "to get paginated chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId receiving user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"EVjxELO6\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. ..\",\n      \"receiverId\": \"ieTVTYA8\",\n      \"receiverName\": \"Keerthi Gana\",\n      \"senderId\": \"-iYj5cA7k\",\n      \"senderName\": \"some Name\"\n    },\n    {\n      \"chatId\": \"-iYj5cA7k\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello  .. .. .. \",\n      \"receiverId\": \"EVjxELO6\",\n      \"receiverName\": \"some Name\",\n      \"senderId\": \"ieTVTYA8\",\n      \"senderName\": \"Keerthi Gana\"\n    },\n    .........................\n  ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "CHAT",
    "name": "GetApiV1ChatGetuserschat"
  },
  {
    "group": "CHAT",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/userListOfUnseenChat",
    "title": "to get user list of unseen chats.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n        \"chatId\": \"EVjxELO6\",\n        \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n        \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n        \"message\": \"hello .. ..\",\n        \"receiverId\": \"ieTVTYA8\",\n        \"receiverName\": \"Keerthi Gana\",\n        \"senderId\": \"-iYj5cA7k\",\n        \"senderName\": \"some Name\"\n      },\n      {\n        \"chatId\": \"-iYj5cA7k\",\n        \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n        \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n        \"message\": \"hello  .. .. .. \",\n        \"receiverId\": \"EVjxELO6\",\n        \"receiverName\": \"some Name\",\n        \"senderId\": \"ieTVTYA8\",\n        \"senderName\": \"Keerthi Gana\"\n      },\n    .........................\n  ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "CHAT",
    "name": "GetApiV1ChatUserlistofunseenchat"
  },
  {
    "group": "CHAT",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/chat/markChatAsSeen",
    "title": "to mark chats as seen.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatId",
            "description": "<p>Chat Id of chat which is to be marked as seen. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n        \"chatId\": \"EVjxELO6\",\n        \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n        \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n        \"message\": \"hello .. ..\",\n        \"receiverId\": \"ieTVTYA8\",\n        \"receiverName\": \"Keerthi Gana\",\n        \"senderId\": \"-iYj5cA7k\",\n        \"senderName\": \"some Name\"\n      },\n      {\n        \"chatId\": \"-iYj5cA7k\",\n        \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n        \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n        \"message\": \"hello  .. .. .. \",\n        \"receiverId\": \"EVjxELO6\",\n        \"receiverName\": \"some Name\",\n        \"senderId\": \"ieTVTYA8\",\n        \"senderName\": \"Keerthi Gana\"\n      },\n    .........................\n  ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "CHAT",
    "name": "PostApiV1ChatMarkchatasseen"
  },
  {
    "group": "CHAT_ROOM",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/room/details/:chatRoomId",
    "title": "api for Getting Details of Chat Room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Room Details Found\",\n    \"status\": 200,\n    \"data\": {\n            \"chatRoomId\": \"EVjxELO6\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Keerthi Gana\",\n                    \"id\": \"Kgsf4jgzX\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"Kgsf4jgzX\",\n            \"userName\": \"Keerthi Gana\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/EVjxELO6\",\n            \"chatRoomTitle\": \"Test\"\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "CHAT_ROOM",
    "name": "GetApiV1ChatroomRoomDetailsChatroomid"
  },
  {
    "group": "CHAT_ROOM",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/view/all/joined/rooms/:userId",
    "title": "api for Getting Details of Chat Room which User is already Joined.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of of the User. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Room Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"chatRoomId\": \"EVjxELO6\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Keerthi Gana\",\n                    \"id\": \"Kgsf4jgzX\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"Kgsf4jgzX\",\n            \"userName\": \"Keerthi Gana\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/EVjxELO6\",\n            \"chatRoomTitle\": \"Test\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "CHAT_ROOM",
    "name": "GetApiV1ChatroomViewAllJoinedRoomsUserid"
  },
  {
    "group": "CHAT_ROOM",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/view/all/rooms",
    "title": "api for Getting Details of all Chat Rooms which are avaiable.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Room Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"chatRoomId\": \"EVjxELO6\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Keerthi Gana\",\n                    \"id\": \"Kgsf4jgzX\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"Kgsf4jgzX\",\n            \"userName\": \"Keerthi Gana\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/EVjxELO6\",\n            \"chatRoomTitle\": \"Test\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "CHAT_ROOM",
    "name": "GetApiV1ChatroomViewAllRooms"
  },
  {
    "group": "CHAT_ROOM",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/view/all/rooms/available/to/join/:userId",
    "title": "api for Getting Details of Chat Room which User can Join.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Room Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"chatRoomId\": \"EVjxELO6\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Keerthi Gana\",\n                    \"id\": \"Kgsf4jgzX\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"Kgsf4jgzX\",\n            \"userName\": \"Keerthi Gana\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/EVjxELO6\",\n            \"chatRoomTitle\": \"Test\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "CHAT_ROOM",
    "name": "GetApiV1ChatroomViewAllRoomsAvailableToJoinUserid"
  },
  {
    "group": "CHAT_ROOM",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/chatroom/delete/room",
    "title": "api for deleting Chat Room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the room successfully\",\n    \"status\": 200,\n    \"data\":  {\n            \"_id\": \"5b54b7534d4ab016ec8c7a4f\",\n            \"chatRoomId\": \"EVjxELO6\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Keerthi Gana\",\n                    \"id\": \"Kgsf4jgzX\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"Kgsf4jgzX\",\n            \"userName\": \"Keerthi Gana\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/EVjxELO6\",\n            \"chatRoomTitle\": \"Test\"\n        }\n    \n}",
          "type": "object"
        },
        {
          "title": "Failure-Response:",
          "content": "        {\n        \t\"error\": true,\n\t        \"message\": \"No Room Found or User Not an Admin\",\n        \t\"status\": 404,\n        \t\"data\": null\n        }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "CHAT_ROOM",
    "name": "PostApiV1ChatroomDeleteRoom"
  },
  {
    "group": "CHAT_ROOM",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/chatroom/edit/room",
    "title": "api for Updating Chat Room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomTitle",
            "description": "<p>Title of Chat Room. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Chat Room details Updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "CHAT_ROOM",
    "name": "PutApiV1ChatroomEditRoom"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/activate",
    "title": "User Activate.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "activateToken",
            "description": "<p>activateToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Your account is successfully activated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Failed to activate the user\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersActivate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/user/:email/forgotPassword",
    "title": "Forgot password to send reset email to user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userEmail",
            "description": "<p>Email of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": \"Mail sent successfully\"\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n               \"error\": true,\n               \"message\": string,\n               \"status\": number,\n               \"data\": any\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UserEmailForgotpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/user/:userId/details",
    "title": "api get user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"User Details Found\",\n       \"status\": 200,\n       \"data\": {\n           \"userId\": \"Kgsf4jgzX\",\n           \"firstName\": \"some\",\n           \"lastName\": \"name\",\n           \"email\": \"somemail@gmail.com\",\n           \"mobileNumber\": 9848022338,\n           \"createdOn\": \"2018-09-05T05:05:37.000Z\"\n       }\n   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": string,\n                \"status\": number,\n                \"data\": any\n            }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UserUseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/login",
    "title": "user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UserLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/resetPassword",
    "title": "To change password of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>New password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Mail sent Successfully\",\n    \"status\": 200,\n    \"data\": \"Password reset successfull.\"\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n               \"error\": true,\n               \"message\": string,\n               \"status\": number,\n               \"data\": any\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UserResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "For signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n         \"userId\": \"Kgsf4jgzX\",\n         \"firstName\": \"some\",\n         \"lastName\": \"name\",\n         \"email\": \"somemail@gmail.com\",\n         \"mobileNumber\": 9848022338,\n         \"createdOn\": \"2018-09-05T05:05:37.000Z\",\n        \"_id\": \"5b9680f00efbde2414a8e39d\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n               \"error\": true,\n               \"message\": string,\n               \"status\": number,\n               \"data\": any\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UserSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/:userId/delete",
    "title": "Delete user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"User deleted successfully\",\n       \"status\": 200,\n       \"data\": {\n           \"userId\": \"Kgsf4jgzX\",\n           \"firstName\": \"some\",\n           \"lastName\": \"name\",\n           \"email\": \"somemail@gmail.com\",\n           \"mobileNumber\": 9848022338,\n           \"createdOn\": \"2018-09-05T05:05:37.000Z\"\n       }\n   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": string,\n                \"status\": number,\n                \"data\": any\n            }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UserUseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/:userId/logout",
    "title": "logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": string,\n                \"status\": number,\n                \"data\": any\n            }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UserUseridLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "putt",
    "url": "/api/v1/user/:userId/edit",
    "title": "Edit user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"User edited successfully\",\n       \"status\": 200,\n       \"data\": {\n           \"userId\": \"Kgsf4jgzX\",\n           \"firstName\": \"some\",\n           \"lastName\": \"name\",\n           \"email\": \"somemail@gmail.com\",\n           \"mobileNumber\": 9848022338,\n           \"createdOn\": \"2018-09-05T05:05:37.000Z\"\n       }\n   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": string,\n                \"status\": number,\n                \"data\": any\n            }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PuttApiV1UserUseridEdit"
  }
] });
