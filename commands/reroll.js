module.exports = {
    name: 'reroll',
    description: 'Pour reroller un Giveaway',
    execute(message, args, Client){

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions pour reroller un giveaway");

        if(!args[0]) return message.channel.send("Aucun ID m'a été fourni");

        let giveaway = Client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || Client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('Je n\'ai pas pu trouvé un giveaway avec cet ID');

        Client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Le Giveaway a été rerollé')
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)){
                message.channel.send('Ce giveaway ne s`\'est pas fini')
            } else {
                console.error(e);
                message.channel.send('Une erreur est survenue')
            }
        })
    },
};