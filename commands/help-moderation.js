const Discord = require('discord.js')

module.exports = {
    name: 'help-moderation',
    description: 'Pour signaler un bug in-game',
    execute(message, args, Client){

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Ça va te servir à quoi ?")

        var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Aide Modération**")
            .setDescription("/ban <membre> <raison> - Ban le membre mentionné \n /kick <membre> - Kick le membre mentionné \n /mute <membre> - Mute le membre mentionné \n /tempmute <membre> <secondes> - Tempmute le membre mentionné \n /warn <membre> <raison> - Warn un membre \n /unwarn <membre> <warn_number - Unwarn un membre \n /infractions <membre> - Liste les warns d'un membre")
            .setFooter("Cocorico'Bot")

        message.channel.send(embed);
    },
};