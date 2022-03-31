/* Config **/

API_KEY = "tb4vncbya8nn";
API_SECRET = "";

module.exports.channelId = "6YLn3JrrR_test4" // 6YLn3JrrR
module.exports.channelType = "livestream"

module.exports.userId1 = "jack-byers"
module.exports.userId2 = "autumn-young"

// ---- //

StreamChat = require("stream-chat").StreamChat;
module.exports.serverClient = StreamChat.getInstance(API_KEY, API_SECRET);
module.exports.chatClient = StreamChat.getInstance(API_KEY);
