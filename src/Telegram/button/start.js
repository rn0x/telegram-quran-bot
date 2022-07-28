const path = require('path');
const fs = require('fs-extra');

module.exports = async function start(bot, Path_appDate, Markup) {

    bot.action('start', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        if (json[id].message_id !== undefined) {

            await ctx.deleteMessage(json[id].message_id);
            
        }
        let username = ctx.chat.username ? ctx.chat.username : null;
        let first_name = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : null;
        let name_bot = ctx.botInfo.first_name
        let channel = [];
        let supergroup = [];
        let private = [];

        for (let lop of Object.keys(json)) {
            if (json[lop].type === 'channel') {
                channel.push(lop)
            } else if (json[lop].type === 'supergroup') {
                supergroup.push(lop)
            } else if (json[lop].type === 'private') {
                private.push(lop)
            }
        }

        let message_start = ` مرحباً بك ${first_name !== null ? first_name : `@${username}`} في بوت ${name_bot} 👋 \n\n`
        message_start += 'يقدم هذا البوت العديد من الخدمات \n\n'
        message_start += '1- القرآن الكريم 📖 \n'
        message_start += '2- الأذكار 📿 \n'
        message_start += '3- فيديوهات قرآن عشوائية 🎥 \n'
        message_start += '4- صورة عشوائية 🖼️ \n'
        message_start += '5- أسماء الله الحسنى ✨ \n'
        message_start += '6- بطاقات القرآن 🎴 \n'
        message_start += '7- حصن المسلم 🏰 \n'
        message_start += '8- محاضرات و توعية 🌾 \n\n\n'
        message_start += 'إحصائيات البوت \n\n'
        message_start += `عدد المحادثات : ${private.length}\n`
        message_start += `عدد المجموعات : ${supergroup.length}\n`
        message_start += `عدد القنوات : ${channel.length}\n\n\n`
        message_start += 'قم بالتنقل بين الخدمات  بالضغط على الازرار التي بالأسفل 🔘'
        let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'), Markup.button.callback('حصن المسلم 🏰', 'hisn_almuslim')];
        let but_2 = [Markup.button.callback('أذكار 📿', 'adhkar'), Markup.button.callback('بطاقات 🎴', 'albitaqat')];
        let but_3 = [Markup.button.callback('فيديو 🎥', 'video'), Markup.button.callback('صور 🖼️', 'photo')];
        let but_4 = [Markup.button.callback('محاضرات و توعية 🌾', 'Lectures'), Markup.button.callback('أسماء الله الحسنى ✨', 'Names_Of_Allah')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(message_start, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);


    });

}