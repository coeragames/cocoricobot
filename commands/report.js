module.exports = {
    name: 'report',
    description: 'Report un joueur/membre',
    execute(message, args){
        const bddreports = require("./bdd/reports.json");
        const Discord = require("discord.js");
        const Client = new Discord.Client();
        if(message.content.length > 9){
            message.channel.send("La **report** a été envoyé au STAFF !");
            report = message.content.slice(9)
            Client.channels.cache.get("796092389457788949").send("**Bug**"  + "\n" + report + `Report par ${message.author}`);
            bddreports["reports"] = report
            Savebddreports();
    
        }
        else {
            message.channel.send("Nous avons détecté que vous ne signalez aucun membre/joueur dans votre message");
        }
        function Savebddreports() {
            fs.writeFile("./bdd/reports.json", JSON.stringify(bddreports, null, 4), (err) => {
                if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");
        
            });
        }
    },
};