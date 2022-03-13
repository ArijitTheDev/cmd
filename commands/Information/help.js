const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const command = require('../command')

command(client, 'help', (message) => {
    message.channel.send("coming soon")
})




