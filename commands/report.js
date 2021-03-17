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

    },
};