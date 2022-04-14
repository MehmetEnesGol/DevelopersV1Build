const Discord = require("discord.js");
const config = require('../config.js');

module.exports = async client => {
  const AntiSpam = require('discord-anti-spam');
  const antiSpam = new AntiSpam({
      warnThreshold: 30, 
      muteThreshold: 40, 
      kickThreshold: 50, 
      banThreshold: 60, 
      maxInterval: 2000,
      warnMessage: '{@user}, Lütfen Spam Yapma.',
      kickMessage: '**{user_tag}** Spam yaptığı için kicklendi.', 
      muteMessage: '**{user_tag}** Spam yaptığı için mute yedi.',
      banMessage: '**{user_tag}** Spam yaptığı için ban yedi.',
      maxDuplicatesWarning: 6, 
      maxDuplicatesKick: 10, 
      maxDuplicatesBan: 12, 
      maxDuplicatesMute: 8, 
      ignoredPermissions: [ 'ADMINISTRATOR'],
      verbose: true, 
      ignoredMembers: [], 
      muteRoleName: "susturulmuş", 
      removeMessages: true 
  });
  
  client.on('message', (message) => antiSpam.message(message));
  client.user.setPresence({ activity: { type: "WATCHING", name: `Developers ❤ Squad`}, status: 'online' })
};

// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

// name kısmına oynuyorunuzu yazabilirsiniz.