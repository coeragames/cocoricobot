module.exports = {
    name: 'ping-bot',
    description: 'Ping',
    execute(message, args){
        Client.on("message", message => {
            message.channel.send("Pong ! Calcul du Ping en cours...").then(message => {
                message.edit("Ping du bot: " + Math.round(Math.round(Client.ws.ping)) + "ms");
            })
        });

    },
};