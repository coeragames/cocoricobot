const Discord = require('discord.js')
module.exports = {
    name: 'help-global',
    description: 'HELP Global',
    execute(message, args, Client){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Ça va te servir à quoi ?")

        var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Aide Modération**")
            .setDescription("/id - Donne votre ID Discord \n /ping-bot - Donne le Ping du Bot \n /discord - Donne le lien du Discord \n /web - Donne le lien du site WEB \n /invite - Donne l'invitation officielle du Discord \n /jouer - Donne le lien de la page de téléchargement officielle du Launcher \n /version - Donne les informations sur le Bot \n /bug-game <bug> - Envoyez nous les bugs dans le jeu que vous avez repérés \n /bug-bot <bug> - Envoyez nous les bugs du bot que vous avez repérés \n /report <ping ou id de la personne que vous report> <raison (introduire liens des messages,..)> - Report un joueur \n /support - Informations de Contact \n /infractions - Liste vos warns")
            .setFooter("Cocorico'Bot")

        message.channel.send(embed);
    },
};