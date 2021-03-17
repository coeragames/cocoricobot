const fs = require('fs')
module.exports = {
    name: 'warn',
    description: 'Pour warn un membre',
}

module.exports.execute = async (message, args, Client) => {


        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas les permissions de warn un membre");
        if(message.channel.type == "dm") return;
            let mention = message.mentions.members.first();
            const reason = args.slice(1).join(' ') 
            if(!mention){
                message.reply("Membre non-menntionné ou mal mentionné");
            }
            else {
                if (!reason) return message.channel.send("Veuillez indiquer une raison")        
                if (!Client.warn.warns[mention.id]) Client.warn.warns[mention.id] = []
                Client.warn.warns[mention.id].unshift({
                    reason,
                    date: Date.now(),
                    mod: message.author.id
                })
                fs.writeFileSync('./commands/bdd/warns.json', JSON.stringify(Client.warn))
                message.channel.send(`${mention} a été warn pour ${reason}`)
            }          
};