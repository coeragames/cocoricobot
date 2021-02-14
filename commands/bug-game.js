module.exports = {
    name: 'bug-game',
    description: 'Pour signaler un bug in-game',
    execute(message, args){
        const bddgame = require("./bdd/bug-game.json");
        const Discord = require("discord.js");
        const Client = new Discord.Client();
        if(message.content.length > 10){
            message.channel.send("Le **bug** a été enregistré ! \n Nous allons essaier de le régler le plus rapidement possible");
            bug_game = message.content.slice(10)
            Client.channels.cache.get("796092341467217930").send("**Bug**"  + "\n" + bug_game + `Report par ${message.author}`);
            bddgame["bug"] = bug_game
            Savebddbugsgame();
        } 
        else {
            message.channel.send("Nous avons détécté que vous signalez aucun bug dans votre message");
        }

        function Savebddbugsgame() {
            fs.writeFile("./bdd/bug-game.json", JSON.stringify(bddgame, null, 4), (err) => {
                if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");
        
            });
        }

    },
};