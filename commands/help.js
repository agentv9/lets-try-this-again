
const Discord = require('discord.js');
const MessageEmbed = require('discord.js')
module.exports = {

    name:'help',
    description: "does thing",
    execute(message, args){
        const Embed69420 = new Discord.MessageEmbed()   
                .setColor(0xFF8E00)
                  .setTitle('Heres my current commands:')
                  .addField(".help",   "- Shows this list of commands." )
                  .addField('.poll <message>','- Creates a poll with your specified message.' )
                  .addField('.announcement <message>', '- Creates an announcement that pings here with your message.')
                  .addField(".iannouncement <message>","- Creates an announcement that everyone here with your message.")
                  .addField(".event <Event type> <Host> <Co-host> <Supervisor> <Game link>", "creates a event announcement using thise paremeters, if there isnt a Co-Host or Supervisor just put none for those two!")
                  .addField(".say <message>", "- Makes the bot say your message.")
                  .addField(".icon <link>", "- Makes the bot send a discord attatchment.")
                  .addField(".clear <message>", "- Makes the bot delete the specified ammount of messages.")
                  .addField(".kick <user>", "- Kicks the specified user.")
                  .addField(".ban <user>", "- Bans the specified user.")
                  .setTimestamp()
                  .setFooter("Bot created by MadRabbitStudios", "https://cdn.discordapp.com/attachments/702576627640697110/740956968814116934/2e9b9d2e6b167cc95d9e19a57c4b88b7.png")    
                  
                  message.channel.send(Embed69420)
    }
}