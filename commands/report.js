module.exports = {
    name: 'report',
    description: 'Report un joueur/membre',
    execute(message, args, Client){
        if(message.content.length > 9){
            message.channel.send("Le **report** a été envoyé au STAFF !");
            report = message.content.slice(7)
            Client.channels.cache.get("796092389457788949").send("**Report**"  + "\n" + report + "\n" + `Report par ${message.author}`).then(message => {
                message.react("✔️")
                message.react("❌")
            })
    
        }
        else {
            message.channel.send("Nous avons détecté que vous ne signalez aucun membre/joueur dans votre message");
        }

        Client.on("messageReactionAdd", async (reaction, user) => {
            if(message.member.roles.cache.has('695616583917109320')) return;     
            if (message.member.hasPermission("BAN_MEMBERS")) {
                if (reaction.emoji.name === '✔️'){
                    message.delete();
                    if(message.member.roles.cache.has('695616583917109320')) return;   
                    Client.channels.cache.get("695666093381124157").send("Je te laisse prendre la bonne décision contre le joueur reporté! \n \n Rappel: \n" + report);
                }
                if (reaction.emoji.name === '❌'){
                    message.delete();
                    if(message.member.roles.cache.has('695616583917109320')) return;   
                    Client.channels.cache.get("695666093381124157").send("Je te laisse prendre la bonne décision contre la reporteur! \n \n Rappel: \n" + report);
                }
            }
        })
    },
};