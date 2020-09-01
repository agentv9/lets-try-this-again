const Discord = require('discord.js');
const RichEmbed = require('discord.js');
module.exports = {

    name:'speak',
    description: "makes the bot do a thing",
    execute(message, args){
      

                  if(!args[1]){
                     message.channel.send("please put a message")
                  }

                   let msgArgs = args.slice(1).join(" ");

                   message.channel.send( "**" + msgArgs + "**");
                    
                      message.delete();
                       

                   


    }
}