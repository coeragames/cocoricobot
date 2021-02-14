module.exports = {
    name: 'bug-bot',
    description: 'Pour signaler un bug sur le Bot',
    execute(message, args){
        Client.on("message", message => {
        
            if(message.content.length > 11){
              message.channel.send("Le **bug** a été enregistré ! \n Nous allons essaier de le régler le plus rapidement possible");
              bug_bot = message.content.slice(9)
              Client.channels.cache.get("796092366309163059").send("**Bug**"  + "\n" + bug_bot + `Report par ${message.author}`);
              bddbot["bug"] = bug_bot
              Savebddbugsbot();

            }
        });  

    },
};