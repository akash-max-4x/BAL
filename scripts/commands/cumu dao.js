const fs = require("fs");
module.exports.config = {
  name: "cumu dao",
  version: "1.0.0", 
  permission: 0,
  credits: "ALVI",
  description: "", 
  premium: false,
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 

};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("উম্মম্মাহ")==0 || event.body.indexOf("kiss")==0 ||
event.body.indexOf("Kiss")==0 ||
event.body.indexOf("cumu")==0 ||
event.body.indexOf("Cumu")==0 ||
event.body.indexOf("কিস")==0 ||
event.body.indexOf("💋")==0 || event.body.indexOf("ummmmmmmmmmmmah")==0 || event.body.indexOf("চুমু")==0) {
		var msg = {
				body: "╭──────•◈•───────╮\n         -𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩𝗜𝗥_//-       \n__ওই সুনো না-🙁\n-একটা উম্মম্মাহ দিবা-🙈🤭💋\n╰──────•◈•───────╯",
				attachment: fs.createReadStream(__dirname + `/nofrefix/kiss.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
