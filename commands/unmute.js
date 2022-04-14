const discord = require('discord.js');
const database = require('quick.db');

exports.run = (client, message, args) => {
    if(!message.member.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Bu komutu uygulayabilmek için ```Kanalları Yönet``` yetkisine ihtiyacım var .")
    var member = message.guild.member(message.mentions.users.first());
    var sebep = args.slice(1).join(" ")||"Olmayan";
    if (!member) return message.channel.send(new Discord.MessageEmbed().setTitle("UYARI ! ").setDescription("Doğru kullanım ; ```" + prefix + "unmute <@kişi> <sebep>```").setColor("RED").setFooter(`${message.author.tag} tarafından istendi.`).setTimestamp());
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setTitle("UYARI ! ").setColor("RED").setDescription("Bu komutu kullanamazsın ! ").setFooter(`${message.author.tag} tarafından istendi.`).setTimestamp())
        message.channel.updateOverwrite(message.channel.guild.members.cache.get(message.mentions.users.first().id), { SEND_MESSAGES: false });
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("MUTE BİTTİ")
            .setDescription(`${message.mentions.users.first()} kişisinin **${sebep}** sebebiyle mute'ı kaldırıldı ! `)
            .setColor("GREEN")
            .setTimestamp()
        )
}; 

exports.config = {
 aliases: [],
 name: "unmute"
};