const Discord = require('discord.js');
const RichEmbed = require('discord.js');
module.exports = {

    name:'ActivityCheck',
    description: "does thing",
    execute(message, args){
      
let msgArgs = args.slice(1).join(" ");
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === msgArgs)

                  
        
                   message.channel.send("[ @everyone ]" + " " + "__**Activity Check!**__                                                                                                                                                                                   **Click on the reaction if You are active in Syldavia!**").then(messageReaction => {  
                    messageReaction.react(emoji);
                      message.delete()
                       

                   });


    }
}