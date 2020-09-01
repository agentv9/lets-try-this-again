const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = require('discord.js');
const ms = require('ms');
module.exports = {

    name:'react',
    description: "does thing",
    execute(message, args){
                  if(!args[1]){
                     message.channel.send("please specify an emoji");
                  }
                   const emoji = args[2]
                    
                   new Discord.MessageReaction(bot, message, emoji);
                   React.MessageReaction
                       
                      
                      
                       

                   


    }
}