module.exports = {
    name: 'suggestion',
    description: 'Pour nous suggérer un ajout',
    execute(message, args){
        const bddsugg = require("./bdd/sugg.json");
        const Discord = require("discord.js");
        const Client = new Discord.Client();
        if(message.content.length > 9){
            message.channel.send("La **suggestion** a été enregistré !");
            sugg = message.content.slice(9)
            Client.channels.cache.get("796092652315607092").send("**Suggestion**"  + "\n" + sugg + `Envoyée par ${message.author}`);
            bddsugg["suggestion"] = sugg
            Savebddsugg();
    
        }
        else {
            message.channel.send("Nous avons détécté que vous ne faites aucune suggestion dans votre message");
        }
        function Savebddsugg() {
            fs.writeFile("./bdd/sugg.json", JSON.stringify(bddsugg, null, 4), (err) => {
                if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");
        
            });
        }
    },
};