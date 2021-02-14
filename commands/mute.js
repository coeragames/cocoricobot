module.exports = {
    name: 'mute',
    description: 'Pour mute un membre',
    execute(message, args){
        Client.on("message", message => {
            if(message.member.hasPermission("BAN_MEMBERS")){
                if(message.channel.type == "dm") return;
    
                let mention = message.mentions.members.first();
    
                if(mention == undefined){
                    message.reply("Membre non-mentionné ou mal mentionné");
                }
                else {
                    if(mention.bannable){
                        mention.roles.add("689528234316136458");
                        message.reply(mention.displayName + " a été mute avec succès");
                        }
                        else {
                            message.reply("Impossible de mute ce membre");
                        }
                     }
                    
            }
        });

    },
};