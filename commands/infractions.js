const moment = require("moment"),
    Discord = require('discord.js')

moment.locale('fr')


module.exports = {
    name: 'infractions',
    description: 'Liste des infractions',
}

module.exports.execute = async (message, args, Client) => {

    const member = message.mentions.members.first()
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas les permissions de warn un membre");
        if(message.channel.type == "dm") return;
            let mention = message.mentions.members.first();
            if(!mention) return message.reply("Membre non-menntionné ou mal mentionné");
            if (!Client.warn.warns[member.id]) return message.channel.send('Ce membre n\'a aucune infraction')
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`**Total de warns :** ${Client.warn.warns[member.id].length}\n\n__**10 derniers warns**__\n\n${Client.warn.warns[member.id].slice(0, 10).map((warn, i) => `**${i + 1}.** ${warn.reason}\nSanctionné ${moment(warn.date).fromNow()} par <@!${warn.mod}>`).join('\n\n')}`))
        
}