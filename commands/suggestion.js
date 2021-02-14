module.exports = {
    name: 'suggestion',
    description: 'Pour nous suggérer un ajout',
    execute(message, args){
        if(message.content.length > 9){
            message.channel.send("La **suggestion** a été enregistré !");
            sugg = message.content.slice(9)
            Client.channels.cache.get("796092652315607092").send("**Suggestion**"  + "\n" + sugg + `Envoyée par ${message.author}`);
            bddsugg["suggestion"] = sugg
            Savebddsugg();

        }

    },
};