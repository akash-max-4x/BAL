const fs = require("fs");
module.exports = {
  config:{
  name: "npx14",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/7A6gcbS.mp4','https://i.imgur.com/zGk5edX.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("💨")==0 || body.indexOf("🤢")==0 || body.indexOf("🤮")==0 || body.indexOf("🤧")==0 || body.indexOf("😷")==0 || body.indexOf("💩")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
    var msg = {
        body: " ~ চিনি দিয়ে চা ☕ ফু দিয়ে খা _//-😏 ",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
