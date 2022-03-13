const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
//const command = require('../command')

module.exports= {
    name: "help",
    category: "information",
    aliases: ["h","cmd"],
    cooldown: "3",
    usage: "help [command]",
  run: async(client, message, args, user, text, prefix) => {
      try{
          if (args[0]) {
           if (!cmd) {

          return
          message.channel.send('coming soon')
          }
              }
        }
      }
  }

catch(e){
    console.log(String(e.stack).red)
    }




