module.exports = {
    name: 'kick',
    description: 'Pour kick un membre',
    execute(message, args, Client){
        if(message.member.hasPermission("BAN_MEMBERS")){
            if(message.channel.type == "dm") return;
    
            let mention = message.mentions.members.first();
    
            if(mention == undefined){
                message.reply("Membre non-mentionné ou mal mentionné");
            }
            else {
                if(mention.kickable){
                    mention.kick();  
                      message.channel.send(mention.displayName + "a été kick avec succès");
                      
                }
                else {
                    message.reply("Impossible de kick ce membre");
                }
            }
                    
        }
        
    },
};