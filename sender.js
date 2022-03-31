const {channelId, channelType, userId1, userId2, chatClient, serverClient} = require('./init');

const test = async () => {
  try {
    await chatClient.connectUser({ id: userId1 }, serverClient.createToken(userId1));

    const channel = chatClient.channel(channelType, channelId);
    const watch = await channel.watch();

    console.log(
        await channel.sendMessage({
        text: "Stream test 01",
      })
    );

  } catch (error) {
    console.log("queryChannels failed >", error);
  }
};

test();
