module.exports = {
    name: 'tempmute',
    description: 'Tempmuter un membre',
    execute(message, args){

        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Membre non-mentionné ou mal mentionné");
        }
        else {
            let args = message.content.split(" ");

            mention.roles.add("689528234316136458");
            message.channel.send(mention.displayName + "a été tempmute avec succès")
            setTimeout(function() {
                mention.roles.remove("689528234316136458");
                message.channel.send("<@" + mention.id + "> . Tu as été unmute");
            }, args[2] *1000);
        }

    },
};