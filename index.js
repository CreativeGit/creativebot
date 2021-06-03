const Discord = require("discord.js")
const client = new Discord.Client()
require('dotenv').config()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", message => {
if (message.content === ">ping"){
  message.channel.send("Pinging...").then(m =>{
          // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;

          // Basic embed
            var embed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${ping}`)
            .setColor("Your Color")
            
            // Then It Edits the message with the ping variable embed that you created
            m.edit(embed)


})}
})


client.login(process.env.TOKEN)