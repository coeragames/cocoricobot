const ms = require('ms');
module.exports = {
    name: 'giveaway',
    description: 'Pour démarrer un giveaway',
    execute(message, args, Client) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les permissions pour démarrer un giveaway") ;

        let channel = message.mentions.channels.first();

        if(!channel) return message.channel.send("Merci de fournir un salon");

        let giveawayDuration = args[1];

        if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("Merci de fournir une duration");

        let giveawayWinners = args[2]

        if(isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send("Merci de donner un nombre de gagnants");

        let giveawayPrize = args.slice(3).join(" ");

        if(!giveawayPrize) return message.channel.send("Apparament, rien n'est a gagner");

        Client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: Client.config.hostedBy ? message.author : null,
            messages: {
                giveaway: (Client.config.everyoneMention ? "@everyone\n\n" : "")+ "** 🎉GIVEAWAY 🎉**",
                givewayEned: (Client.config.everyoneMention ? "@everyone\n\n" : "")+ "**GIVEAWAY ENDED**",
                timeRemaining: "Temps restant: **{duration}**",
                inviteToParticipate: "Réagissez avec 🎉 pour participer",
                winMessage: "Bravo à {winners}, vous avez gagné **{prize}**",
                embedFooter: "Giveaway",
                noWinner: "Zut alors, personne n'a gagné {prize}",
                hostedBy: "Hébergé par {user}",
                winners: "winner(s)",
                endedAt: "Se fini le",
                units: {
                    seconds: "secondes",
                    minutes: "minutes",
                    hours: "heures",
                    days: "jours",
                    pluralS: false
                }
            }
        })

        message.channel.send(`Un Giveaway commence sur ${channel}`);
    },
};