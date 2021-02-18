module.exports = {
    name: 'bug-game',
    description: 'Pour signaler un bug in-game',
    execute(message, args, Client){
        if(message.content.length > 10){
            message.channel.send("Le **bug** a été envoyé au STAFF !");
            bug_game = message.content.slice(10)
            Client.channels.cache.get("796092341467217930").send("**Bug**"  + "\n" + bug_game + `\nReport par ${message.author}`).then(message => {
                message.react("✔️")
                message.react("❌")
            })
    
        }
        else {
            message.channel.send("Nous avons détecté que vous ne signalez aucun membre/joueur dans votre message");
        }



    },
};