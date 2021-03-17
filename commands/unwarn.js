const fs = require('fs')
module.exports = {
    name: 'unwarn',
    description: 'Pour unwarn un membre',
}

module.exports.execute = async (message, args, Client) => {


        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas les permissions de unwarn un membre");
        if(message.channel.type == "dm") return;
            let mention = message.mentions.members.first();
            const member = message.mentions.members.first();
            if(!mention){
                message.reply("Membre non-menntionné ou mal mentionné");
            }
            if (!Client.warn.warns[member.id]) return message.channel.send('Ce membre n\'a aucun warn.')
            const warnIndex = parseInt(args[1], 10) -1
            if (warnIndex < 0 || !Client.warn.warns[member.id][warnIndex]) return message.channel.send('Ce warn n\'existe pas')
            const { reason } = Client.warn.warns[member.id].splice(warnIndex, 1)[0]
            if (!Client.warn.warns[member.id].lenght) delete Client.warn.warns[member.id]
            fs.writeFileSync('./commands/bdd/warns.json', JSON.stringify(Client.warn))
            message.channel.send(`${mention} a été unwarn pour ${reason}`)      
};