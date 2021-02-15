module.exports = {
    name: 'unmute',
    description: 'Unmuter un membre',
    execute(message, args, Client){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Membre non-mentionné ou mal mentionné");
        }
        else {
            if(mention.bannable){
                mention.roles.remove("689528234316136458");
                message.reply(mention.displayName + " a été unmute avec succès");
            }
            else {
                message.channel.send("Impossible de unmute ce membre");
            }
        }



    },
};