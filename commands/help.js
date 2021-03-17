const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Commande HELPPP',
    execute(message, args, Client){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Ça va te servir à quoi ?")

        var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Aide**")
            .setDescription("/help-moderation - Accéder à l'aide pour la modération *(réservé modérateurs)* \n /help-global - Accéder à l'aide générale")
            .setFooter("Cocorico'Bot")


        message.channel.send(embed);
    },
};