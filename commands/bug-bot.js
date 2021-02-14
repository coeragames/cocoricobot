module.exports = {
    name: 'bug-bot',
    description: 'Pour signaler un bug sur le Bot',
    execute(message, args){        
        const bddbot = require("./bdd/bug-bot.json");
        const Discord = require("discord.js");
        const Client = new Discord.Client();
        if(message.content.length > 9){
            message.channel.send("Le **bug** a été enregistré ! \n Nous allons essaier de le régler le plus rapidement possible");
            bug_bot = message.content.slice(9)
            Client.channels.cache.get("796092366309163059").send("**Bug**"  + "\n" + bug_bot + `Report par ${message.author}`);
            bddbot["bug"] = bug_bot
            Savebddbugsbot();

        }
        else {
            message.channel.send("Nous avons détectés que vous signalez aucun bug dans votre message");
        }
        function Savebddbugsbot() {
            fs.writeFile("./bdd/bug-bot.json", JSON.stringify(bddbot, null, 4), (err) => {
                if(err)message.channel.send("Une erreur est survenue lors de la connection à la database");
        
            });
        }


    },
};