module.exports = {
    name: 'suggestion',
    description: 'Pour nous suggérer un ajout',
    execute(message, args, Client){
        if(message.content.length > 11){
            message.channel.send("La **suggestion** a été enregistré !");
            sugg = message.content.slice(11)
            Client.channels.cache.get("796092652315607092").send("**Suggestion**"  + "\n" + sugg + `\n Envoyée par ${message.author}`).then(message => {
                message.react("✔️")
                message.react("❌")
            })
        }
        else {
            message.channel.send("Nous avons détécté que vous ne faites aucune suggestion dans votre message");
        }

   },
};