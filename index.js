//the constants that make the whole thing work//
const Discord = require('discord.js');
const {Client, Attatchment} = require('discord.js');
const RichEmbed = require('discord.js');
const bot = new Discord.Client();
const bot2 = new Discord.Client();
const bot3 = new Discord.Client();
const bot4 = new Discord.Client();
const token = "NzQ0NzM4OTMzMTY1OTE2Mjcz.XznmLg.1A8gfUEWKPgsGj1yhptGPM-sS_Y"
const token2 = 'NzMwNDg4MTk3MDYyMzI4Mzkz.XwYOPQ.SvYoM_OwJkNma9Tn_Yv_FUjeS2w';
const token3 = 'NzMzNDI3ODYyMjUzODYyOTMy.XxDB3Q.xKx45enKdyfMTmMW2VVJGfZtuTk';
const token4 = 'NzE4OTg3ODcxMzA1ODU5MTQ0.XxkRtA.cHBVdMlcQazcOsbgkla2x7zmbgE'


const PREFIX = '>';
const PREFIX2 = '.';  
const PREFIX3 = '.';
const PREFIX4 = '.';
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const ms = require('ms');
const nbx = require('noblox.js');






//command files manager//
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}



// ready messages// 
bot.on('ready', () =>{
    console.log('Mr Glavik reporting for duty!');
})
bot2.on('ready', () =>{
console.log('Mr Syldavia are you secure');
})                     
bot3.on('ready', () =>{
    console.log('Freund Deutsche Republik reporting for duty');
    })
bot4.on('ready', () =>{
console.log('Mad Rabbit is online');
})



bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "join-log" );
         if(!channel) return;
   
    channel.send(`Welcome to the Glaviks! ${member} please read these channels for some info about the server! #verify, #rules, #bots, and #roles!`)
   });
bot2.on('guildMemberAdd', member =>{

 const channel = member.guild.channels.cache.find(channel => channel.name === "👋join-log👋" );
      if(!channel) return;

 channel.send(`Welcome to Syldavia! ${member} please read these channels for some info about the server! #verify, #rules, #bots, and #roles!`)
});
bot3.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "join-log" );
    if(!channel) return;
   
    channel.send(`Welcome to The UnitedGermanRepublic! ${member} please read these channels for some info about the server! #verify, #rules, #bots, and #roles!`)
   });
   bot4.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "join-log" );
    if(!channel) return;
   
    channel.send(`Welcome to MadRabbit! ${member} please read these channels for some info about the server! #verify, #rules, #bots, and #roles!`)
   });
 
  


//Mr Glavik commands//
bot.on('message', message=>{
    if(!message.content.startsWith(PREFIX)) return;
    
    let args = message.content.substring(PREFIX.length).split(" ");
    //commands//
    
    
    switch(args[0]){
    
    case "ping":
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
           bot.commands.get('ping').execute(message, args);
    break;
    
    
    
    //help command//           
    case 'help':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
         bot.commands.get('help').execute(message, args);
    break;
                           
    //create poll command//
    case 'poll':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
          bot.commands.get('poll command').execute(message, args);
    break;
                   
    
    // create announcement command//
    case 'announcement':
           if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
    bot.commands.get('announcement').execute(message, args);
    break;
    
    case 'iannouncement':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
    bot.commands.get('iannouncement').execute(message, args);
    break;
    
    case 'event':
        if (!message.member.roles.cache.find(r => r.name === "Event Perms")) return message.channel.send('You do do not have permission to do that!')    
    bot.commands.get('event').execute(message, args);
    break;


    case 'say':
        if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')    
    bot.commands.get('speak').execute(message, args);
    break;
    
    case 'icon' :
        let msgArgs2 = args.slice(1).join(" ");    
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
    const attatchment = (msgArgs2)
      message.channel.send(attatchment);
    break;
    
    case 'clear':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
    let msgArgs = args.slice(1).join(" ");            
    message.channel.bulkDelete(msgArgs)
    .then(messages => message.channel.send(`Bulk deleted ${messages.size} messages`))            
    .then(msg => msg.delete({timeout: 1000})); 
                        
    break;
    
    case 'kick' :
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
    if(!args[1]) message.channel.send('you must specify a user!')
    
    
    const user = message.mentions.users.first();
    
    if(user){
        const member = message.mentions.members.first();
    
        if(member){
            member.kick('you have been deported from the Glorious UnitedGermanRepublic!').then(()=>{ 
            message.reply(`successfully deported ${user.tag}!`);
        }).catch(err =>{
          message.reply('i was unable to kick the user!')
          console.log(err);
        })
            
        }
    }
    
    break;
    
    case 'ban' :
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
     if(!args[1]) message.channel.send('you must specify a user!')
    
    
    const user2 = message.mentions.users.first();
    
    if(user2){
        const member = message.mentions.members.first();
    
        if(member){
            member.ban('you have been exiled from the Glorious UnitedGermanRepublic!').then(()=>{ 
            message.reply(`successfully exiled ${user2.tag}!`);
        }).catch(err =>{
          message.reply('i was unable to ban the user!')
          console.log(err);
        })
            
        }
    }
    
    break;
    
    
                    
        }
    })
   






//Freund Deutsche Republik commands//
//prefix checker//
bot3.on('message', message=>{
if(!message.content.startsWith(PREFIX2)) return;

let args = message.content.substring(PREFIX2.length).split(" ");
//commands//


switch(args[0]){

case "ping":
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
       bot.commands.get('ping').execute(message, args);
break;

        

//help command//           
case 'help':
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
     bot.commands.get('help').execute(message, args);
break;
                       
//create poll command//
case 'poll':
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
      bot.commands.get('poll command').execute(message, args);
break;
               

// create announcement command//
case 'announcement':
       if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
bot.commands.get('announcement').execute(message, args);
break;

case 'iannouncement':
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
bot.commands.get('iannouncement').execute(message, args);
break;

case 'say':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')    
bot.commands.get('speak').execute(message, args);
break;

case 'icon' :
    let msgArgs2 = args.slice(1).join(" ");    
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
const attatchment = (msgArgs2)
  message.channel.send(attatchment);
break;

case 'clear':
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
let msgArgs = args.slice(1).join(" ");            
message.channel.bulkDelete(msgArgs)
.then(messages => message.channel.send(`Bulk deleted ${messages.size} messages`))            
.then(msg => msg.delete({timeout: 1000})); 
                    
break;

case 'event':
        if (!message.member.roles.cache.find(r => r.name === "Event Perms")) return message.channel.send('You do do not have permission to do that!')    
    bot.commands.get('event').execute(message, args);
    break;

case 'kick' :
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
if(!args[1]) message.channel.send('you must specify a user!')


const user = message.mentions.users.first();

if(user){
    const member = message.mentions.members.first();

    if(member){
        member.kick('you have been deported from the Glorious UnitedGermanRepublic!').then(()=>{ 
        message.reply(`successfully deported ${user.tag}!`);
    }).catch(err =>{
      message.reply('i was unable to kick the user!')
      console.log(err);
    })
        
    }
}

break;

case 'ban' :
if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
 if(!args[1]) message.channel.send('you must specify a user!')


const user2 = message.mentions.users.first();

if(user2){
    const member = message.mentions.members.first();

    if(member){
        member.ban('you have been exiled from the Glorious UnitedGermanRepublic!').then(()=>{ 
        message.reply(`successfully exiled ${user2.tag}!`);
    }).catch(err =>{
      message.reply('i was unable to ban the user!')
      console.log(err);
    })
        
    }
}

break;


                
    }
})



bot2.on('message', message=>{
    if(!message.content.startsWith(PREFIX2)) return;
    
    let args = message.content.substring(PREFIX2.length).split(" ");
    //commands//
    
    
    switch(args[0]){
    
    case "ping":
        if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
         bot.commands.get('ping').execute(message, args);
    break;
    
   
    
    //help command//            
    case 'help':
        if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
         bot.commands.get('help').execute(message, args);
    break;
                
                
    //create poll command//
    case 'poll':
         if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
         bot.commands.get('poll command').execute(message, args);
    break;
           //Activity check
    case 'activitycheck':
         if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
         bot.commands.get('ActivityCheck').execute(message, args);
    break;        
    
    // create announcement command//
    case 'announcement':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
    bot.commands.get('announcement').execute(message, args);
    break;
    
    case 'iannouncement':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
    bot.commands.get('iannouncement').execute(message, args);
    break;
    
    case 'say':
        if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')    
    bot.commands.get('speak').execute(message, args);
    break;

    case 'event':
        if (!message.member.roles.cache.find(r => r.name === "Event Perms")) return message.channel.send('You do do not have permission to do that!')    
    bot.commands.get('event').execute(message, args);
    break;

    case 'icon' :
        let msgArgs2 = args.slice(1).join(" ");    
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
    const attatchment = (msgArgs2)
      message.channel.send(attatchment);
    break;
    
    case 'clear':
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
    let msgArgs = args.slice(1).join(" ");            
    message.channel.bulkDelete(msgArgs)
    .then(messages => message.channel.send(`Bulk deleted ${messages.size} messages`))            
    .then(msg => msg.delete({timeout: 1000})); 
                        
    break;
    
    case 'kick' :
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
    if(!args[1]) message.channel.send('you must specify a user!')
    
    
    const user = message.mentions.users.first();
    
    if(user){
        const member = message.mentions.members.first();
    
        if(member){
            member.kick('you have been deported from the Glorious Federation Of Syldavia!').then(()=>{ 
            message.reply(`successfully deported ${user.tag}!`);
        }).catch(err =>{
          message.reply('i was unable to kick the user!')
          console.log(err);
        })
            
        }
    }
    
    break;
    
    case 'ban' :
    if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
    if(!args[1]) message.channel.send('you must specify a user!')
    
    
    const user2 = message.mentions.users.first();
    
    if(user2){
        const member = message.mentions.members.first();
    
        if(member){
            member.ban('you have been exiled from the Glorious Federation Of Syldavia!').then(()=>{ 
            message.reply(`successfully exiled ${user2.tag}!`);
        }).catch(err =>{
          message.reply('i was unable to ban the user!')
          console.log(err);
        })
            
        }
    }
    
    break;
    
    
                    
        }
    })
    bot4.on('message', message=>{
      if(!message.content.startsWith(PREFIX2)) return;
      
      let args = message.content.substring(PREFIX2.length).split(" ");
      //commands//
      
      
      switch(args[0]){
      
      case "ping":
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
      bot.commands.get('ping').execute(message, args);
      break;
      
      case "invite":
      bot.commands.get('invite').execute(message, args);
      break;        
      
      //help command//           
      case 'help':
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
      bot.commands.get('help').execute(message, args);
      break;
                  
                  
      //create poll command//
      case 'poll':
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
      bot.commands.get('poll command').execute(message, args);
      break;
                     
      
      // create announcement command//
      case 'announcement':
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
      bot.commands.get('announcement').execute(message, args);
      break;
      
      case 'iannouncement':
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
      bot.commands.get('iannouncement').execute(message, args);
      break;
      
      case 'say':
          if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')    
        bot.commands.get('speak').execute(message, args);
      break;
      
      case 'icon' :
          let msgArgs2 = args.slice(1).join(" ");    
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
      const attatchment = (msgArgs2)
        message.channel.send(attatchment);
      break;
      
      case 'clear':
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!')
      let msgArgs = args.slice(1).join(" ");            
      message.channel.bulkDelete(msgArgs)
      .then(messages => message.channel.send(`Bulk deleted ${messages.size} messages`))            
      .then(msg => msg.delete({timeout: 1000})); 
                          
      break;
      
      case 'kick' :
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
      if(!args[1]) message.channel.send('you must specify a user!')
      
      
      const user = message.mentions.users.first();
      
      if(user){
          const member = message.mentions.members.first();
      
          if(member){
              member.kick('you have been kicked from MadRabbit!').then(()=>{ 
              message.reply(`successfully kicked ${user.tag}!`);
          }).catch(err =>{
            message.reply('i was unable to kick the user!')
            console.log(err);
          })
              
          }
      }
      
      break;
      
      case 'ban' :
      if (!message.member.roles.cache.find(r => r.name === "Moderator")) return message.channel.send('You do do not have permission to do that!') 
      if(!args[1]) message.channel.send('you must specify a user!')
      
      
      const user2 = message.mentions.users.first();
      
      if(user2){
          const member = message.mentions.members.first();
      
          if(member){
              member.ban('you have been banned from MadRabbit!').then(()=>{ 
              message.reply(`successfully banned ${user2.tag}!`);
          }).catch(err =>{
            message.reply('i was unable to ban the user!')
            console.log(err);
          })
              
          }
      }
      
      break;
      
      
                      
          }
      })



//idk the point of this i just know i need it//
bot.login(token);
bot3.login(token3);
bot4.login(token4);
bot2.login(token2);
