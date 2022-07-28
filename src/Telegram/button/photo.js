const path = require('path');
const fs = require('fs-extra');

module.exports = async function photo(bot, Path_appDate, Markup, Path_Local) {

    bot.action('photo', async (ctx) => {

        let id = ctx.chat.id;
        let photo_json = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Photo_Json.json'));
        let random = photo_json[Math.floor(Math.random() * photo_json.length)]
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('🔄', 'photo'), Markup.button.callback('الرجوع', 'start')];
        let button = Markup.inlineKeyboard([but_1]);
        let { message_id } = await ctx.replyWithPhoto({ url: random }, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

}