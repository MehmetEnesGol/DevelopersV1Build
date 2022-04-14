const Discord = require("discord.js");


exports.run = async (client, message, args, discord) => {

    const infoEmbed = new Discord.MessageEmbed()
        .setDescription("Developers Bot Güvenliği Sağlamak Amacıyla Kurulmuş Bir Bottur Ücretsizdir")
        .addFields(
            {name:':hammer: Ban Kmutları', value:'!aban ban <user> [sebep] Banlar, !aban unban <user> Ban Kaldırır, !aban liste Banlananların Listesini Atar, !aban sorgu <user> Ban Sorgular, Yönetici Yetkisi Olan Bu Komutu Kullanır', inline: true},
            {name:':mute: Mute Komutları', value:'!mute <user> süre [sebep] Muteler Ve Susturulmuş Rolü verir, !unmute <user> [sebep] Muteyi Geri Alır, Yönetici Yetkisi Olan Bu Komutu Kullanır  ', inline: true}, 
            {name:':broom: Sil Komutları', value:'.sil <değer> Siler 1-100 Arasında Değer Girin', inline: true},
           
        )
        .setColor("#0020bf")
        .setFooter("Developer Bot • Güvenliğiniz İçin", "https://i.hizliresim.com/4am9r8.jpg")
        .setImage("https://i.hizliresim.com/4am9r8.jpg")
          

    message.channel.send(infoEmbed);
     

}

exports.config = {
name: 'yardım',
cooldown: 5,
guildOnly: true,
aliases: ['yardım','help']
};