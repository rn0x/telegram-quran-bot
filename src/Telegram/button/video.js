const path = require('path');
const fs = require('fs-extra');

module.exports = async function video(bot, Path_appDate, Markup, Path_Local) {

    bot.action('video', async (ctx) => {

        let id = ctx.chat.id;
        let Video_json = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Video_json.json'));
        let random = Video_json[Math.floor(Math.random() * Video_json.length)]
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('🔄', 'video'), Markup.button.callback('الرجوع', 'start')];
        let button = Markup.inlineKeyboard([but_1]);
        let { message_id } = await ctx.replyWithVideo({ url: random }, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

}