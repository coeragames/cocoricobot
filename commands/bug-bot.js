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
    },
};