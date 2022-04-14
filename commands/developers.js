const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

message.channel.send('Developers Squad \n <@818891968074612807>');
};

exports.config = {
  name: "developers",
  guildOnly: true,
  aliases: ["Developers :heart: Squad"],
};
