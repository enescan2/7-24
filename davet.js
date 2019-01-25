const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setTitle("**Hüso BOTUNU SUNUCUNA DAVET ET**")
		.addField("DAVET LINKI;", " https://discordapp.com/oauth2/authorize?client_id=538273454089044018&scope=bot&permissions=805314622")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['davet'],
  permLevel: 0 
};

exports.help = {
  name: 'davet', 
  description: 'davet',
  usage: 'davet'
};
