const Discord = require('discord.js');
const RichEmbed = require('discord.js');
module.exports = {

    name:'poll command',
    description: "does thing",
    execute(message, args){
      const Embed = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("initiate poll")
                .setDescription("!poll to initate a yes or no poll");

                  if(!args[1]){
                     message.channel.send(Embed);
                  }
                   const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Like')
                   const emoji2 = message.guild.emojis.cache.find(emoji => emoji.name === 'Dislike')
                   
                   
                   let msgArgs = args.slice(1).join(" ");

                   message.channel.send( "@here" + " " + "**" + msgArgs + "**"  ).then(messageReaction => {  
                    messageReaction.react(emoji);
                       messageReaction.react(emoji2);
                      
                       message.delete()
                       

                   });


    }
}