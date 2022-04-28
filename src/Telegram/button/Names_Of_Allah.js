const path = require('path');
const fs = require('fs-extra');

module.exports = async function Names_Of_Allah(bot, Path_appDate, Markup, Path_Local) {

    bot.action('Names_Of_Allah', async (ctx) => {

        let id = ctx.chat.id;
        let Names_Of_Allah_json = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Names_Of_Allah.json'));
        let random = Names_Of_Allah_json[Math.floor(Math.random() * Names_Of_Allah_json.length)]
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let message = `<b>الإسم: ${random.name}</b>\n\n`
        message += `المعنى: ${random.text}\n\n`
        let but_1 = [Markup.button.callback('🔄', 'Names_Of_Allah'), Markup.button.callback('الرجوع للقائمة الرئيسية', 'start')];
        let button = Markup.inlineKeyboard([but_1]);
        let { message_id } = await ctx.reply(message, { reply_markup: button.reply_markup , parse_mode: 'HTML' })
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

}