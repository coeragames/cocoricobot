module.exports = {
    name: 'giveaway',
    description: 'Pour démarrer un giveaway',
    execute(message, args){
        Client.on("message", message => {
          message.reply("Commande en cours d'optimisation")
        });
    },
};