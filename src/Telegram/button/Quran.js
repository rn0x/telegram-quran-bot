const path = require('path');
const fs = require('fs-extra');

module.exports = async function quran(bot, Path_appDate, Markup) {

    bot.action('quran', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
        quran_menu += '1- أدريس أبكر \n'
        quran_menu += '2- ماهر المعيقلي \n'
        quran_menu += '3- بدر التركي \n'
        quran_menu += '4- علي جابر \n'
        quran_menu += '5- عبدالرحمن السديس \n'
        quran_menu += '6- خالد الجليل \n'
        quran_menu += '7- بندر بيليه \n'
        quran_menu += '8- محمد أيوب \n'
        quran_menu += '9- احمد السويلم \n'
        quran_menu += '10- موسى بلال'
        let but_1 = [Markup.button.callback('أدريس أبكر', 'Idris_Abkar'), Markup.button.callback('ماهر المعيقلي', 'Maher_Almaikulai')];
        let but_2 = [Markup.button.callback('بدر التركي', 'Badr_Al_Turki'), Markup.button.callback('علي جابر', 'Ali_Jaber')];
        let but_3 = [Markup.button.callback('عبدالرحمن السديس', 'Abdullrahman_Alsudais'), Markup.button.callback('خالد الجليل', 'Khalid_Galilee')];
        let but_4 = [Markup.button.callback('بندر بيليه', 'Bandar_Balila'), Markup.button.callback('محمد أيوب', 'Mohamed_Ayoub')];
        let but_5 = [Markup.button.callback('احمد السويلم', 'Ahmed_Al_Suwailem'), Markup.button.callback('موسى بلال', 'Musa_Bilal')];
        let but_6 = [Markup.button.callback('رجوع للقائمة الرئيسية', 'start')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6]);
        let { message_id } = await ctx.reply(quran_menu, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

}