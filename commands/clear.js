
module.exports = {
    name: 'clear',
    description: 'Pour clear un nombre défini de messages',
    execute(message, args){
        if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.member === null) return;

            let clearmsg = message.content.split(" ");
            if(message.channel.type == "dm") return;       
            if(clearmsg[1] == undefined){
                message.reply("Nombre de messages à clear non ou mal défini");
            }
            else {
                let number = parseInt(clearmsg[1]);
        
                if(isNaN(number)){
                    message.reply("Nombre de messages à clear non ou mal défini");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Suppression de " + messages.size + " messages réussie ! ");
                        message.reply(messages.size + " message(s) a/ont été supprimées").then(message => {
                            message.delete({ timeout: 1000 })
                        })
                    }).catch(err => {
                        console.log("Erreur lors du clear : " + err);
                        message.reply("Erreur lors du clear" + err);
        
                    });
                }
            }
            
        }

    },
};