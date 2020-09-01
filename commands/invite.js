
const Discord = require('discord.js');
const MessageEmbed = require('discord.js')
module.exports = {

    name:'invite',
    description: "does thing",
    execute(message, args){
        const Embed420 = new Discord.MessageEmbed()   
                .setColor(0xFF8E00)
                  
                  .addField("Add MadModeration to your server!",  "To invite the bot to your server [Click here](https://discord.com/api/oauth2/authorize?client_id=718987871305859144&permissions=8&scope=bot)"  )
                  .setTimestamp()
                  .setFooter("Bot created by MadRabbitStudios", "https://cdn.discordapp.com/attachments/702576627640697110/740956968814116934/2e9b9d2e6b167cc95d9e19a57c4b88b7.png")    
                  
                  message.channel.send(Embed420)
    }
}