var Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('message', message => {
    var prefix = '-'
    var msg = message.content;

    if (msg === prefix + 'csc') {
        message.channel.send('🔞', {
            files: [
                "./images/image-to-send.png"
            ]
        });
    }

    if (msg === prefix + 'random') {
        message.channel.send('Random PHOTO📷', {
            files: [
                "https://placeimg.com/640/480/any.png"
            ]
        });
    }
});

bot.login('NDI5NzQ1ODg4MTUyNTE4Njcx.DcZUVA.t_tNuhFBsdcYYFwsqbR1zJk38lo');
