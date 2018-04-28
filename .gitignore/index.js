var Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('message', message => {
    var prefix = '-'
    var msg = message.content;

    if (msg === prefix + 'image') {
        message.channel.send('🔞', {
            files: [
                "./images/image-to-send.png"
            ]
        });
    }

    if (msg === prefix + 'image') {
        message.channel.send('🔞', {
            files: [
                "https://i.imgur.com/hd1v8Pr.png"
            ]
        });
    }
});

bot.login('NDI5NzQ1ODg4MTUyNTE4Njcx.DcZUVA.t_tNuhFBsdcYYFwsqbR1zJk38lo');
