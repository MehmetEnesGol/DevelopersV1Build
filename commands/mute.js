const Discord = require('discord.js');
const database = require('quick.db');

exports.run = (client, message, args) => {
    var prefix = '.'
    if(!message.member.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Bu komutu uygulayabilmek için ```Kanalları Yönet``` yetkisine ihtiyacım var .")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setTitle("UYARI ! ").setColor("RED").setDescription("Bu komutu kullanamazsın ! ").setFooter(`${message.author.tag} tarafından istendi.`).setTimestamp())
    var member = message.guild.member(message.mentions.users.first());
    var süre = message.content.split(" ")[2];
    var süret = message.content.split(" ")[3];
    var sebep = args.slice(3).join(" ")||"Olmayan";
    if(!member || !süre) return message.channel.send(new Discord.MessageEmbed().setTitle("UYARI ! ").setDescription("Doğru kullanım ; ```"+prefix+"mute <@kişi> <süre> <sebep>```").setColor("RED").setFooter(`${message.author.tag} tarafından istendi.`).setTimestamp());

    message.channel.updateOverwrite(message.channel.guild.members.cache.get(message.mentions.users.first().id), { SEND_MESSAGES: false });


    if(süret == "saniye"){
        var ysüre = süre+" saniye";
        süre *= 1000;
    }else if(süret == "dakika"){
        var ysüre = süre+" dakika";
        süre *= 1000*60;
    }else if(süret == "saat"){
        var ysüre = süre+" saat";
        süre *= 1000*60*60;
    }else if(süret == "gün"){
        var ysüre = süre+" gün";
        süre *= 1000*60*60*24;
    }else{
        return message.channel.send(new Discord.MessageEmbed().setTitle("UYARI ! ").setDescription("Doğru kullanım ; ```"+prefix+"mute <@kişi> <süre> <sebep>```").setColor("RED").setFooter(`${message.author.tag} tarafından istendi.`).setTimestamp());
    }

    if(süre > 604800000) return message.channel.send(new Discord.MessageEmbed().setTitle("UYARI ! ").setColor("RED").setDescription("Üst süre sınırını aştın ! "))

    setTimeout(function(){
        message.channel.updateOverwrite(message.channel.guild.members.cache.get(message.mentions.users.first().id), { SEND_MESSAGES: true });
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("MUTE BİTTİ")
        .setDescription(`${message.mentions.users.first()} kişisinin mute'ı bitti ! `)
        .setColor("GREEN")
        .setTimestamp()
        )
    },süre)

    message.channel.send(new Discord.MessageEmbed()
    .setTitle("MUTE ! ")
    .setDescription(`${message.mentions.users.first()} kişisine ${message.author} tarafından **${ysüre}** **${sebep}** sebebiyle mute atıldı`)
    .setColor("RED")
    );
}; 
exports.config = {
 aliases: [],
 name: "mute"
};