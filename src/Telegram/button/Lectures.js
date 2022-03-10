const path = require('path');
const fs = require('fs-extra');

module.exports = async function Lectures(bot, Path_appDate, Markup, Path_Local) {

    bot.action('Lectures', async (ctx) => {

        let id = ctx.chat.id;
        let Lectures_json = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Lectures.json'));
        let random = Lectures_json[Math.floor(Math.random() * Lectures_json.length)]
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('🔄', 'Lectures'), Markup.button.callback('الرجوع', 'start')];
        let button = Markup.inlineKeyboard([but_1]);
        let caption = `<b>▪${random.Lectures}</b>\n\n`
        caption += `الشيخ: ${random.Author} 🔊`
        let { message_id } = await ctx.replyWithVideo({ url: random.FilePath }, { caption: caption, reply_markup: button.reply_markup , parse_mode: 'HTML' });
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

}