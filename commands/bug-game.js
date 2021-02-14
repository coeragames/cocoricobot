module.exports = {
    name: 'bug-game',
    description: 'Pour signaler un bug in-game',
    execute(message, args){
        if(message.content.length > 10){
            message.channel.send("Le **bug** a été enregistré ! \n Nous allons essaier de le régler le plus rapidement possible");
            bug_game = message.content.slice(10)
            Client.channels.cache.get("796092341467217930").send("**Bug**"  + "\n" + bug_game + `Report par ${message.author}`);
            bddgame["bug"] = bug_game
            Savebddbugsgame();
        
        }

    },
};