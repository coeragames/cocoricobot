module.exports = {
    name: 'report',
    description: 'Report un joueur/membre',
    execute(message, args){
        Client.on("message", message => {
            if(message.content.length > 9){
                message.channel.send("La **report** a été envoyé au STAFF !");
                report = message.content.slice(9)
                Client.channels.cache.get("796092389457788949").send("**Bug**"  + "\n" + report + `Report par ${message.author}`);
                bddreports["reports"] = report
                Savebddreports();
    
            }
        });

    },
};