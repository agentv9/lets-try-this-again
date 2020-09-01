const Discord = require('discord.js');
const RichEmbed = require('discord.js');
module.exports = {

    name:'event',
    description: "does thing",
    execute(message, args){
      const Embed = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("initiate announcement")
                .setDescription(".announcement to send an announcement");

                  if(!args[1]){
                     message.channel.send(Embed);
                  }

                   let msgArgs = args[1]
                   let msgArgs2 = args[2]
                   let msgArgs3 = args[3]
                   let msgArgs4 = args[4]
                   let msgArgs5 = args[5]
                   let msgArgs6 = args.slice(6).join(" ");
                   message.channel.send(`${msgArgs}-` + " " + "[ @everyone ]" + " "  + `host: ${msgArgs2},`  + " "  + `Co-Host: ${msgArgs3},`  + " "  + `Supervisor: ${msgArgs4},` + " " + `aditional rules: ${msgArgs6},`+ " "  + `game: ${msgArgs5}`).then(messageReaction => {  
                   
                   
                      message.delete()
                       

                   });


    }
}