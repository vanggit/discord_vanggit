const Discord = require('discord.js');
const client = new Discord.Client();

const Secrets = require("./secrets.js");

client.on('ready', () => {
  console.log('I am ready!');
});
 
client.on('message', message => {
  if (message.content[0] !== '%' && !(message.author.bot)) {
    message.delete();
    // message.author = null;
    // message.client = null;
    message.channel.send(message.content);
    //message.reply(message.content, {color: "#ff0000", prepend: "prepend", reply: "reply"});
  }else if(message.content[0] === '%'){
    let toReplaceArr = message.content.split("");
    toReplaceArr.shift();
    let toReplaceStr = toReplaceArr.join("");
    message.edit(toReplaceStr);
  }else if(message.content[0] === '!'){
    message.delete();
  }
});
 
client.login(Secrets.token);

module.exports = client;