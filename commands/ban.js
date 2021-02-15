module.exports = {
    name: 'ban',
    description: 'Pour bannir un membre',
    execute(message, args, Client){

    if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.channel.type == "dm") return;
            let mention = message.mentions.members.first();
        
            if(mention == undefined){
                message.reply("Membre non-menntionné ou mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + "a été banni de CocoricoMC");
        
                }
                else {
                    message.reply("Impossible de bannir ce membre");
                }
            }
                
        }      
     
    },
};