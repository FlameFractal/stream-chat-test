const {channelId, channelType, userId1, userId2, chatClient, serverClient} = require('./init');

const test = async () => {
  try {

    await chatClient.connectUser({ id: userId2 }, serverClient.createToken(userId2));
    const clientEvent = chatClient.on(console.log);

  } catch (error) {
    console.log("failed >>>", error);
  }
};

test();
