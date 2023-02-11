const {Events, EmbedBuilder} = require('discord.js');
module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    execute(newMember) {
        const content = `Bienvenue <@${newMember.user.id}>`;
        const contentEN = `Welcome <@${newMember.user.id}>`;
        const exampleEmbed = new EmbedBuilder()
            .setColor(0xf71f3c)
            .setTitle(`Bienvenue sur Projet Slaveous !`)
            .setAuthor({ name: 'Slaveous Team', iconURL: 'https://slaveous.com/assets/icons/LOGO_SLAVEOUS.png', url: 'https://slaveous.com' })
            .setDescription('Ce serveur existe pour que vous puissiez suivre le projet [Slaveous](https://slaveous.com)\n' +
                'en temps réel ou y participer.\n' +
                '[Slaveous](https://slaveous.com) (le site : https://www.slaveous.com) est une plateforme en construction en vue de devenir un site et application de rencontre bdsm.\n\n' +
                'Pour rejoindre le serveur, veuillez :\n' +
                '    - Spécifier votre âge et écrire "__**Je certifie avoir plus de 18 ans et je prends l\'entière responsabilité de cette affirmation**__"\n' +
                '    - nous expliquer en quelques mots ce qui vous a amené jusqu\'ici\n\n' +
                `Taguez <@&901952096960671846> une fois que vous êtes prêt(e) et attendez qu\'un(e) Modérateur/trice vous accueille. Bienvenue !`
            )
            .setTimestamp();
        const exampleEmbedEN = new EmbedBuilder()
            .setColor(0xf71f3c)
            .setTitle(`Welcome to Project Slaveous!`)
            .setAuthor({ name: 'Slaveous Team', iconURL: 'https://slaveous.com/assets/icons/LOGO_SLAVEOUS.png', url: 'https://slaveous.com' })
            .setDescription('This server exists so that you can follow the project [Slaveous](https://slaveous.com)\n' +
                'in real time or participate.\n' +
                '[Slaveous](https://slaveous.com) (the website : https://www.slaveous.com) is a platform under construction to become a bdsm dating site and application.\n\n' +
                'Go on, let your temptations ride you to <#975194318480506970> then into our dungeon.\nDon\'t keep us all waiting.~ <a:firered:976283142015049810>'
            )
            .setTimestamp();
        newMember.roles.add(newMember.guild.roles.cache.find(r => r.id === '833632646180503612' || r.id === '975139168416067625')).catch(console.error);
        newMember.guild.channels.cache.find(c => c.id === '712637102289977408' || c.id === '975046656800202810').send({embeds:[
            newMember.guild.roles.cache.filter(r => r.id === '833632646180503612').length > 0 ? exampleEmbed : exampleEmbedEN],
            content: newMember.guild.roles.cache.filter(r => r.id === '833632646180503612').length > 0 ? content : contentEN
        }).then();
    },
};