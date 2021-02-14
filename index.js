const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "/";
const moment = require('moment');
const fs = require("fs");
const ms = require('ms');
const bddbot = require("./bdd/bug-bot.json");
const bddgame = require("./bdd/bug-game.json");
const bddsugg = require("./bdd/sugg.json");
const bddreports = require("./bdd/reports.json");

Client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    Client.commands.set(command.name, command)
}

Client.on("ready", () => {
    console.log("Bot opérationnel")

    //774708723674906634
    var Channel = Client.channels.cache.get("774708723674906634");
    setInterval(() => {
        Channel.send("**Vote** \n \nN'oubliez pas de voter ! \n __Vote 1:__ https://serveur-prive.net/minecraft/cocoricomc-6097 \n__Vote 2:__ https://serveur-minecraft.com/1939")
    }, 60000);
    
    const args = message.content.sclice(prefix.length).trim().split(/ +/);
});

Client.on("ready", async () =>{
    Client.user.setStatus('online')
    Client.user.setActivity("Surveille CocoricoMC - /help")
})

Client.on("message", async message => {
    if(!Client.commands.has(command)) return;
    try{
        Client.commands.get(command).execute(message, args);
    }catch(error){
        console.error(error);
        message.reply("Une erreur est survenue lors de l'execution de la commande");
    }
});

//messages dm et serveur
Client.on("message", message => {
 
    if(message.content == "ping"){
        message.channel.send("pong");
    }
     
    if(message.content == prefix + "id"){
        message.channel.send("**" + message.author.username + "** a comme ID Discord __" + message.author.id + "__" );
    }

    if(message.content == prefix + "discord"){
        message.channel.send("Rejoignez le Discord de **CocoricoMC** avec ce lien: https://bit.ly/Cocorico-discord");
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
        if(message.content == prefix + "vote"){
        message.channel.send("**Vote** \n \nhttps://serveur-minecraft.com/1939 \nhttps://serveur-prive.net/minecraft/cocoricomc-6097");
    }

    if(message.content == prefix + "help-global"){
        message.channel.send("**Help** \n \n /id - Donne votre ID Discord \n /ping-bot - Donne le Ping du Bot \n /discord - Donne le lien du Discord *uniquement en MP* \n /web - Donne le lien du site WEB \n /invite - Donne l'invitation officielle du Discord \n /jouer - Donne le lien de la page de téléchargement officielle du Launcher \n /version - Donne les informations sur le Bot \n /bug-game <bug> - Envoyez nous les bugs dans le jeu que vous avez repérés \n /bug-bot <bug> - Envoyez nous les bugs du bot que vous avez repérés \n /report <ping ou id de la personne que vous report> <raison (introduire liens des messages,..)> - Report un joueur  \n \n https://cocorico-mc.pr11/.fr ");
     }

     if(message.content == prefix + "help-moderation"){
        message.channel.send("**Help** \n \n /ban <membre> - Ban le membre mentionné \n /kick <membre> - Kick le membre mentionné \n \n /mute <membre> - Mute le membre mentionné \n /tempmute <membre> <secondes> - Tempmute le joueur mentionné \n \n https://cocorico-mc.pr11.fr ");
     }

});
 
//mots interdits
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.member.roles.cache.has('518500387775578115')) return;
                
                
                if(message.content.includes("cocorico-mc.pr11.fr")){
                    message.channel.send("Site WEB: https://cocorico-mc.pr11.fr \n Page de téléchargement du Launcher: https://cocorico-mc.pr11.fr/cocojouer.html");
                    message.delete();
                }
                if(message.content.includes("youtube.com")){
                    if(message.content.includes("/play")) return;
                    message.channel.send("Youtube: https://www.youtube.com/channel/UCzr5EG-YC7GDmtnvPfo_21A");
                    message.delete();
                }
        
                if(message.content.includes("https://")){
                if(message.content.startsWith("https://tenor.com")) return;
                if(message.content.includes("cocorico-mc.pr11.fr")) return;
                if(message.content.includes("youtube.com")) return;
                if(message.content.startsWith("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("merde")){
                    if(message.content.includes("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("putain")){
                    if(message.content.startsWith("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("con")){
                    if(message.content.includes("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("www")){
                    if(message.content.includes("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }

                
});

            
Client.on("message", message => {
    if(message.author.bot) return;             
    if(message.member.roles.cache.has('698519586114633800')) return;     
         
               
                if(message.content.includes("merde")){
                    if(message.content.includes("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("putain")){
                    if(message.content.includes("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("con")){
                    if(message.content.includes("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
                if(message.content.includes("www")){
                    if(message.content.includes("/play")) return;
                    message.reply("Vous avez utilisé un mot interdit ! :)");
                    message.delete();
                    
                }
});


//connection bdd.json
function Savebddbugsgame() {
    fs.writeFile("./bdd/bug-game.json", JSON.stringify(bddgame, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}

function Savebddbugsbot() {
    fs.writeFile("./bdd/bug-bot.json", JSON.stringify(bddbot, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}

function Savebddsugg() {
    fs.writeFile("./bdd/sugg.json", JSON.stringify(bddsugg, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}

function Savebddreports() {
    fs.writeFile("./bdd/reports.json", JSON.stringify(bddreports, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue lors de la connection à la database");

    });
}

Client.login("NzgxNTYxOTU4NDczNzkzNTY2.X7_cSw.4b9i2sY1evk3Re3c__6fLx0NQwg");