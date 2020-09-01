const Discord = require('discord.js');
const RichEmbed = require('discord.js');
module.exports = {

    name:'iannouncement',
    description: "does thing",
    execute(message, args){
      const Embed = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("initiate announcement")
                .setDescription(".announcement to send an announcement");

                  if(!args[1]){
                     message.channel.send(Embed);
                  }

                   let msgArgs = args.slice(1).join(" ");

                   message.channel.send("@everyone" + " " + "**" + msgArgs + "**").then(messageReaction => {  
                    
                      message.delete()
                       

                   });


    }
}