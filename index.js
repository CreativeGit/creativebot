const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login('ODQzMTY2ODEwODE5MTMzNDQw.YJ_6SA.SaFrXDMVE26MkARac7NN-Y6a4MQ')