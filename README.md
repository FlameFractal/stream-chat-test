## To test event notifications on StreamChat's livestream type channels

Steps:
- Run `npm install`
- Verify/Modify `channelId`in `init.js`
- Run `node create-channel.js`
- Open two shells
  - First, run `node listener.js` in one shell
  - Then, run `node sender.js` in another shell
