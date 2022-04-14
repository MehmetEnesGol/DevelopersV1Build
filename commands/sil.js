const discord = require('discord.js');
const db = ('quick.db');

exports.run = (client, message, args) => {
if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(new discord.MessageEmbed().setColor("RED").setTitle(`Hata!`).setDescription(`bu komutu kullanabilmek için **Mesajları yönet** yetkin olması lazım`)).then(m => m.delete({timeout:3000}))
let sayı = args[0]
if(!sayı) return message.channel.send(new discord.MessageEmbed().setColor("RED").setTitle(`Hata!`).setDescription(`Lütfen bir sayı gir`)).then(m => m.delete({timeout:3000}))
if(isNaN(sayı)) return message.channel.send(new discord.MessageEmbed().setColor("RED").setTitle(`Hata!`).setDescription(`Lütfen harf girme`)).then(m => m.delete({timeout:3000}))
if(sayı > 100) return message.channel.send(new discord.MessageEmbed().setColor("RED").setTitle(`Hata!`).setDescription(`**100** den fazla mesaj silemem`)).then(m => m.delete({timeout:3000}))
message.delete()
message.channel.bulkDelete(sayı).then(() => {
message.channel.send(new discord.MessageEmbed().setColor("GREEN").setTitle(`Başarılı`).setDescription(`**${sayı}** kadar mesajı sildim\nSildiren yetkili ${message.author}`)).then(m => m.delete({timeout:10000}));
})
}; 

exports.config = {
 aliases: ["delete"],
 name: "sil"
};
