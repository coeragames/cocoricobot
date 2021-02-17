
module.exports = {
    name: 'bug-bot',
    description: 'Pour signaler un bug sur le Bot',
    execute(message, args, Client){    
         if(message.content.length > 9){
            message.channel.send("Le **bug** a été enregistré ! \n Nous allons essaier de le régler le plus rapidement possible");
            bug_bot = message.content.slice(9)
            Client.channels.cache.get("796092366309163059").send("**Bug**"  + "\n" + bug_bot + `Report par ${message.author}`).then(message => {
                message.react("✔️")
                message.react("❌")
            })
        }
        else {
            message.channel.send("Nous avons détectés que vous signalez aucun bug dans votre message");
        }

        Client.on("messageReactionAdd", async (reaction, user) => {
            if(message.member.roles.cache.has('695616583917109320')) return;   
            if (message.member.hasPermission("BAN_MEMBERS")) {
                if (reaction.emoji.name === '❌'){
                    message.delete();
                    if(message.member.roles.cache.has('695616583917109320')) return;   
                }
                if (reaction.emoji.name === '✔️'){
                    message.delete();
                    if(message.member.roles.cache.has('695616583917109320')) return;   
                    Client.channels.cache.get("811555693449445418").send("@Développeur Un Bug a été confirmé par l'équipe ! \n" + bug_bot);
                }
                
            }
        })
    },
};