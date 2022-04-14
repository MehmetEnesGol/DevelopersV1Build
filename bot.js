const db = require('quick.db')
const Discord = require("discord.js")     
const bot = new Discord.Client();       
const config = require("./config.js")    
const fs = require("fs");                
require('./util/Loader.js')(bot);    



bot.commands = new Discord.Collection(); 
bot.aliases = new Discord.Collection(); 
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${files.length} komut yüklenecek.`);
    console.log(`<3 Developers Squad`)     
    bot.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {        
      bot.aliases.set(alias, props.config.name);  
    });
  });
})


bot.on("guildBanRemove", (guild, user) => {
  const database = require('quick.db')
  const bans = database.get(`acilmayanBan.laura.${guild.id}`) || [];
  if (bans.some(ban => ban.user.id == user.id)) return guild.members.ban(user, { reason: 'Açılmayan Ban Sistemi' });
});

bot.on('ready', ()=>{
bot.channels.cache.get('856903101822926850').startTyping()
})

bot.on('message', message => {
  if(message.content.toLowerCase() === 'sa') return message.channel.send('Aleyküm selam');
  });






bot.login(config.token)
