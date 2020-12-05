const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "/";
const moment = require('moment');
const fs = require("fs");
const ms = require('ms')
const bddbot = require("./bug-bot.json");
const bddgame = require("./bug-game.json");
const bddsugg = require("./sugg.json");
const bddreports = require("./reports.json");
const bddwarns = require("./warn.json");


Client.on("ready", () => {
    console.log("Bot opérationnel")
    
});

Client.on("ready", async () =>{
    Client.user.setStatus('online')
    Client.user.setActivity("Surveille CocoricoMC - /help")
})

Client.on("message",  async message => {

    if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.member === null) return;
        if(message.content.startsWith(prefix + "clear")){
            let clearmsg = message.content.split(" ");
            if(message.channel.type == "dm") return;       
            if(clearmsg[1] == undefined){
                message.reply("Nombre de messages à clear non ou mal défini");
            }
            else {
                let number = parseInt(clearmsg[1]);

                if(isNaN(number)){
                    message.reply("Nombre de messages à clear non ou mal défini");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Suppression de " + messages.size + " messages réussie ! ");
                        message.reply(messages.size + " message(s) a/ont été supprimées").then(message => {
                            message.delete({ timeout: 1000 })
                        })
                    }).catch(err => {
                        console.log("Erreur lors du clear : " + err);
                        message.reply("Erreur lors du clear" + err);

                    });
                }
            }
        }
    }
});
//giveaway

Client.on("message",  async message => {
    let argsg = message.content.substring(prefix.length).split(" ")

    if (message.content.startsWith(prefix + "giveaway")) {
        let time = argsg[1]
        if (!time) return message.channel.send("Vous n'avez pas spécifié la durée du giveaway");
        
        if (
            !argsg[1].endsWith("d") &&
            !argsg[1].endsWith("h") &&
            !argsg[1].endsWith("m") &&
            !argsg[1].endsWith("s") 

        )
        return message.channel.send("Temps mal spécifié")

        let gchannel = message.mentions.channels.first();
        if (!gchannel) return message.channel.send("Je ne peux pas trouver ce salon dans ce serveur")

        let prize = argsg.slice(3).join("")
        if (!prize) return message.channel.send("Prix du giveaway non spécifié")

        message.delete()
        gchannel.send(":tada: **NOUVEAU GIVEAWAY** :tada:")
        let gembed = new Discord.MessageEmbed()
            .setTitle("Nouveau Giveway !")
            .setColor("RANDOM")
            .setDescription(`Réagissez avec :tada: pour participer \nCrée par: **${message.author}**\nDurée: **${time}**\nPrix: **${prize}**`)
            .setTimestamp(Date.now + ms(argsg[1]))
            let m = await gchannel.send(gembed)
            m.react("🎉")
            setTimeout(() => {
                if (m.reactions.cache.get("🎉").count <= 1) {
                    return message.channel.send("Pas assez de participants")
                }
                let winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                gchannel.send(`Bravo à ${winner}! Tu as gagné **${prize}**`
                );
             
            
        
        }, ms(argsg[1]));
    }
})
           
//commandes non-mp
Client.on("message", message => {
    if(message.channel.type == "dm") return;


    //ping pong easter egg
    if(message.content == "ping"){
        message.channel.send("pong");
    }
 
    //commande id
    if(message.content == prefix + "id"){
        message.channel.send("**" + message.author.username + "** a comme ID Discord __" + message.author.id + "__" );

    }

});





//messages dm
Client.on("message", message => {

    if(message.content == prefix + "discord"){
        message.channel.send("Rejoignez le Discord de **CocoricoMC** avec ce lien: https://bit.ly/Cocorico-discord");
    }
});

//messages dm et serveur
Client.on("message", message => {

        //ping bot
    if(message.content === prefix + "ping-bot"){
        message.channel.send("Calcul du Ping en cours...").then(message => {
            message.edit("Ping du bot: " + Math.round(Client.ping) + "ms");

        })
    }

    if(message.content.startsWith("/bug-game")){
        if(message.content.length > 10){
            message.channel.send("Le **bug** a été enregistré ! \n Nous allons essaier de le régler le plus rapidement possible");
            bug_game = message.content.slice(10)
            bddgame["bug"] = bug_game
            Savebddbugsgame();

        }

    }

    if(message.content.startsWith("/bug-bot")){
        if(message.content.length > 11){
            message.channel.send("Le **bug** a été enregistré ! \n Nous allons essaier de le régler le plus rapidement possible");
            bug_bot = message.content.slice(9)
            bddbot["bug"] = bug_bot
            Savebddbugsbot();

        }

    }

    if(message.content.startsWith("/suggestion")){
        if(message.content.length > 9){
            message.channel.send("La **suggestion** a été enregistré !");
            sugg = message.content.slice(9)
            bddsugg["suggestion"] = sugg
            Savebddsugg();

        }

    }

    if(message.content.startsWith("/report")){
        if(message.content.length > 9){
            message.channel.send("La **report** a été envoyé au STAFF !");
            sugg = message.content.slice(9)
            bddreports["reports"] = sugg
            Savebddreports();

        }

    }


    if(message.content == prefix + "support"){
        message.channel.send("**Support** \n \n Pour contacter le Support, vous pouvez: \n __Email:__ official@pr11.fr \n __Chat:__ https://cocorico-mc.pr11.fr \n __Discord:__ @CocoricoSupport#0166");
    }

    if(message.content == prefix + "aide"){
        message.channel.send("**Support** \n \n Pour contacter le Support, vous pouvez: \n __Email:__ official@pr11.fr \n __Chat:__ https://cocorico-mc.pr11.fr \n __Discord:__ @CocoricoSupport#0166");
    }

    if(message.content == prefix + "bug"){
        message.channel.send("**Mauvaise formulation** \n \n Utilisez /bug-game pour les bugs ingame et /bug-bot pour les bugs du bot");
    }

    if(message.content == prefix + "web"){
        message.channel.send("Visitez le site Web de **CocoricoMC**: https://cocorico-mc.pr11.fr");
    }

    if(message.content == prefix + "invite"){
        message.channel.send("Invitez vos amis sur le Discord de **CocoricoMC** avec ce lien: https://bit.ly/Cocorico-discord");
    }

    if(message.content == prefix + "jouer"){
        message.channel.send("Pour jouer, **téléchargez le launcher sécurisé** de CocoricoMC sur notre site Web uniquement: https://cocorico-mc.pr11.fr/cocojouer.html");
    }

    if(message.content == prefix + "version"){
        message.channel.send("**Informations Bot** \n \n developpé par __coeragames#9370__ \n \n **Version** 0.1.1 \n \n **https://cocorico-mc.pr11.fr** \n \n - /help");
    }

    if(message.content == prefix + "help"){
        message.channel.send("**Help** \n \n __Besoin d'aide ?__ \n \n /help-global - Aide Générale \n \n /help-moderation - Aide Modération \n \n /support - *Avec CocoricoSupport*");
    }

    if(message.content == prefix + "help-global"){
        message.channel.send("**Help** \n \n /id - Donne votre ID Discord \n /ping-bot - Donne le Ping du Bot \n /discord - Donne le lien du Discord *uniquement en MP* \n /web - Donne le lien du site WEB \n /invite - Donne l'invitation officielle du Discord \n /jouer - Donne le lien de la page de téléchargement officielle du Launcher \n /version - Donne les informations sur le Bot \n /bug-game <bug> - Envoyez nous les bugs dans le jeu que vous avez repérés \n /bug-bot <bug> - Envoyez nous les bugs du bot que vous avez repérés \n /report <ping ou id de la personne que vous report> <raison (introduire liens des messages,..)> - Report un joueur  \n \n https://cocorico-mc.pr11/.fr ");
     }

     if(message.content == prefix + "help-moderation"){
        message.channel.send("**Help** \n \n /ban <membre> - Ban le membre mentionné \n /kick <membre> - Kick le membre mentionné \n \n /mute <membre> - Mute le membre mentionné \n /tempmute <membre> <secondes> - Tempmute le joueur mentionné \n \n https://cocorico-mc.pr11.fr ");
     }

});
 
//commandes kick ban mute
Client.on("message", message => {

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

        if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non-menntionné ou mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + "a été banni de CocoricoMC");

                }
                else {
                    message.reply("Impossible de bannir ce membre");
                }
            }
        }
        

        
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non-mentionné ou mal mentionné");
            }
            else {
                if(mention.kickable){
                  mention.kick();  
                  message.channel.send(mention.displayName + "a été kick avec succès");
                  
                }
                else {
                    message.reply("Impossible de kick ce membre");
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non-mentionné ou mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.roles.add("689528234316136458");
                    message.reply(mention.displayName + " a été mute avec succès");
                    }
                    else {
                        message.reply("Impossible de mute ce membre");
                    }
                 }
            
            }
            else if(message.content.startsWith(prefix + "unmute")){
                let mention = message.mentions.members.first();

                if(mention == undefined){
                    message.reply("Membre non-mentionné ou mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.roles.remove("689528234316136458");
                    message.reply(mention.displayName + " a été unmute avec succès");
                    }
                    else {
                        message.channel.send("Impossible de unmute ce membre");
                    }
                }
            }
            else if(message.content.startsWith(prefix + "tempmute")){
                let mention = message.mentions.members.first();

                if(mention == undefined){
                    message.reply("Membre non-mentionné ou mal mentionné");
                }
                else {
                    let args = message.content.split(" ");

                    mention.roles.add("689528234316136458");
                    message.channel.send(mention.displayName + "a été tempmute avec succès")
                    setTimeout(function() {
                        mention.roles.remove("689528234316136458");
                        message.channel.send("<@" + mention.id + "> . Tu as été unmute");
                    }, args[2] *1000);
                }
            
            }
        }
        });

   Client.on("message", message => {
        
                if(message.content.includes("https://cocorico")){
                    message.reply("Site WEB: https://cocorico-mc.pr11.fr \n Page de téléchargement du Launcher: https://cocorico-mc.pr11.fr/cocojouer.html");
                    message.delete();
                }
                if(message.content.includes("www.cocorico")){
                    message.reply("Site WEB: https://cocorico-mc.pr11.fr \n Page de téléchargement du Launcher: https://cocorico-mc.pr11.fr/cocojouer.html");
                    message.delete();
                }
                if(message.content.includes("http://cocorico")){
                    message.reply("Site WEB: https://cocorico-mc.pr11.fr \n Page de téléchargement du Launcher: https://cocorico-mc.pr11.fr/cocojouer.html");
                    message.delete();
                }
                if(message.content.includes("youtube.com")){
                    message.reply("Youtube: https://www.youtube.com/channel/UCzr5EG-YC7GDmtnvPfo_21A");
                    message.delete();
                }
        
                if(message.content.includes("https://")){
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("merde")){
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("putain")){
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("con")){
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("www")){
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }

                


            
               
        
        });             
               

//warn
Client.on("message", message => {
    if(message.content.startsWith("/warn")){
        if(message.member.hasPermission("BAN_MEMBERS")){

            if(!message.mentions.users.first()) return;

            utilisateur = message.mentions.users.first().id

            if(bddwarns["warn"][utilisateur] == 3){
                utilisateur.roles.add("689528234316136458");

            }
            else{
                if(!bddwarns["warn"][utilisateur]){
                    bddwarns["warn"][utilisateur] = 1
                    Savebddwarns();
                    message.channel.send(utilisateur + " a désormais " + bddwarns["warn"][utilisateur] + " warn(s)");
                }
                else{
                    bddwarns["warn"][utilisateur]++
                    Savebddwarns();
                    message.channel.send(utilisateur + " a désormais " + bddwarns["warn"][utilisateur] + " warn(s)");

                }

            }
            if(bddwarns["warn"][utilisateur] == 6){
                utilisateur.kick();
            }
            if(bddwarns["warn"][utilisateur] == 10){
                delete bddwarns["warn"][utilisateur]
                utilisateur.ban();
                Savebddwarns();
            }


        }
    }

});



//connection bdd.json
function Savebddbugsgame() {
    fs.writeFile("./bug-game.json", JSON.stringify(bddgame, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}

function Savebddbugsbot() {
    fs.writeFile("./bug-bot.json", JSON.stringify(bddbot, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}

function Savebddsugg() {
    fs.writeFile("./sugg.json", JSON.stringify(bddsugg, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}

function Savebddreports() {
    fs.writeFile("./reports.json", JSON.stringify(bddreports, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}
function Savebddwarns() {
    fs.writeFile("./warn.json", JSON.stringify(bddwarns, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}






