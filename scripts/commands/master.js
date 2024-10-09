module.exports.config = {
    name: "master",
    version: "1.0.0",
    permssion: 0,
    prefix:false,
   premium:false,
    credits: "ALVI",
    description: "Add my master to this group",
    category: "group",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join("61550669852479")
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`https://api-rosie.j-jrt-official.repl.co/finduid?url=${link}`);
    var uidHamim = 61550187451619
    api.addUserToGroup(uidHamim, threadID, (err) => {
    if (participantIDs.includes(uidHamim)) return api.sendMessage(`𝗠𝗬 𝗠𝗔𝗦𝗧𝗘𝗥 𝗜𝗦 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣\n𝗦𝗢 𝗜 𝗖𝗔𝗡'𝗧 𝗔𝗗𝗗 𝗔𝗚𝗔𝗜𝗡 💝`, threadID, messageID);
    if (err) return api.sendMessage(`🤖𝗠𝗬 𝗠𝗔𝗦𝗧𝗘𝗥 𝗜𝗦 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣  🌸𝗝𝗨𝗦𝗧 𝗠𝗘𝗡𝗧𝗜𝗢𝗡 @𝗧𝗮𝗻𝘃𝗶𝗿 𝗔𝗵𝗺𝗲𝗱 _//-`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`𝗔𝗗𝗗𝗘𝗗 𝗠𝗔𝗦𝗧𝗘𝗥 𝗧𝗢 𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 𝗟𝗜𝗦𝗧 🌸`, threadID, messageID);
    else return api.sendMessage(`𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗠𝗬 𝗠𝗔𝗦𝗧𝗘𝗥 𝗧𝗢 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣🌸💝`, threadID, messageID);
    });
    }
  else { 
    var uidHamim = 61551846081032
    api.addUserToGroup(uidHamim, threadID, (err) => {
    if (participantIDs.includes(uidHamim)) return api.sendMessage(`𝗠𝗬 𝗠𝗔𝗦𝗧𝗘𝗥 𝗜𝗦 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣\n𝗦𝗢 𝗜 𝗖𝗔𝗡'𝗧 𝗔𝗗𝗗 𝗔𝗚𝗔𝗜𝗡 💝`, threadID, messageID);
    if (err) return api.sendMessage(`🤖𝗠𝗬 𝗠𝗔𝗦𝗧𝗘𝗥 𝗜𝗦 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣\n🌸𝗝𝗨𝗦𝗧 𝗠𝗘𝗡𝗧𝗜𝗢𝗡 @𝗧𝗮𝗻𝘃𝗶𝗿 𝗔𝗵𝗺𝗲𝗱 _//-`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`𝗔𝗗𝗗𝗘𝗗 𝗠𝗔𝗦𝗧𝗘𝗥 𝗧𝗢 𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 𝗟𝗜𝗦𝗧 🌸`, threadID, messageID);
    else return api.sendMessage(`𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗠𝗬 𝗠𝗔𝗦𝗧𝗘𝗥 𝗧𝗢 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣🌸💝`, threadID, messageID);
    });
  }
  }
