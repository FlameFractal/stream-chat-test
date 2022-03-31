const {channelId, channelType, userId1, userId2, chatClient, serverClient} = require('./init');

const test = async () => {
  try {
      const channel = serverClient.channel(channelType, channelId, {
      members: [userId1],
      created_by_id: userId1,
    });

    console.log(
      await channel.create()
    );

    console.log(
      await channel.addMembers([userId2])
    );
  } catch (error) {
    console.log("queryChannels failed >", error);
  }
};

test();
