const path = require('path');
const fs = require('fs-extra');

module.exports = async function hisn_almuslim(bot, Path_appDate, Markup, Path_Local) {


    bot.action('hisn_almuslim', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'start')];
        let but_2 = [Markup.button.callback(key[0], 'hisn_almuslim_001')];
        let but_3 = [Markup.button.callback(key[1], 'hisn_almuslim_002')];
        let but_4 = [Markup.button.callback(key[2], 'hisn_almuslim_003')];
        let but_5 = [Markup.button.callback(key[3], 'hisn_almuslim_004')];
        let but_6 = [Markup.button.callback(key[4], 'hisn_almuslim_005')];
        let but_7 = [Markup.button.callback(key[5], 'hisn_almuslim_006')];
        let but_8 = [Markup.button.callback(key[6], 'hisn_almuslim_007')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim')];
        let but_2 = [Markup.button.callback(key[7], 'hisn_almuslim_008')];
        let but_3 = [Markup.button.callback(key[8], 'hisn_almuslim_009')];
        let but_4 = [Markup.button.callback(key[9], 'hisn_almuslim_010')];
        let but_5 = [Markup.button.callback(key[10], 'hisn_almuslim_011')];
        let but_6 = [Markup.button.callback(key[11], 'hisn_almuslim_012')];
        let but_7 = [Markup.button.callback(key[12], 'hisn_almuslim_013')];
        let but_8 = [Markup.button.callback(key[13], 'hisn_almuslim_014')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_1')];
        let but_2 = [Markup.button.callback(key[14], 'hisn_almuslim_015')];
        let but_3 = [Markup.button.callback(key[15], 'hisn_almuslim_016')];
        let but_4 = [Markup.button.callback(key[16], 'hisn_almuslim_017')];
        let but_5 = [Markup.button.callback(key[17], 'hisn_almuslim_018')];
        let but_6 = [Markup.button.callback(key[18], 'hisn_almuslim_019')];
        let but_7 = [Markup.button.callback(key[19], 'hisn_almuslim_020')];
        let but_8 = [Markup.button.callback(key[20], 'hisn_almuslim_021')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_2')];
        let but_2 = [Markup.button.callback(key[21], 'hisn_almuslim_022')];
        let but_3 = [Markup.button.callback(key[22], 'hisn_almuslim_023')];
        let but_4 = [Markup.button.callback(key[23], 'hisn_almuslim_024')];
        let but_5 = [Markup.button.callback(key[24], 'hisn_almuslim_025')];
        let but_6 = [Markup.button.callback(key[25], 'hisn_almuslim_026')];
        let but_7 = [Markup.button.callback(key[26], 'hisn_almuslim_027')];
        let but_8 = [Markup.button.callback(key[27], 'hisn_almuslim_028')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_3')];
        let but_2 = [Markup.button.callback(key[28], 'hisn_almuslim_029')];
        let but_3 = [Markup.button.callback(key[29], 'hisn_almuslim_030')];
        let but_4 = [Markup.button.callback(key[30], 'hisn_almuslim_031')];
        let but_5 = [Markup.button.callback(key[31], 'hisn_almuslim_032')];
        let but_6 = [Markup.button.callback(key[32], 'hisn_almuslim_033')];
        let but_7 = [Markup.button.callback(key[33], 'hisn_almuslim_034')];
        let but_8 = [Markup.button.callback(key[34], 'hisn_almuslim_035')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_4')];
        let but_2 = [Markup.button.callback(key[35], 'hisn_almuslim_036')];
        let but_3 = [Markup.button.callback(key[36], 'hisn_almuslim_037')];
        let but_4 = [Markup.button.callback(key[37], 'hisn_almuslim_038')];
        let but_5 = [Markup.button.callback(key[38], 'hisn_almuslim_039')];
        let but_6 = [Markup.button.callback(key[39], 'hisn_almuslim_040')];
        let but_7 = [Markup.button.callback(key[40], 'hisn_almuslim_041')];
        let but_8 = [Markup.button.callback(key[41], 'hisn_almuslim_042')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_5')];
        let but_2 = [Markup.button.callback(key[42], 'hisn_almuslim_043')];
        let but_3 = [Markup.button.callback(key[43], 'hisn_almuslim_044')];
        let but_4 = [Markup.button.callback(key[44], 'hisn_almuslim_045')];
        let but_5 = [Markup.button.callback(key[45], 'hisn_almuslim_046')];
        let but_6 = [Markup.button.callback(key[46], 'hisn_almuslim_047')];
        let but_7 = [Markup.button.callback(key[47], 'hisn_almuslim_048')];
        let but_8 = [Markup.button.callback(key[48], 'hisn_almuslim_049')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_6')];
        let but_2 = [Markup.button.callback(key[49], 'hisn_almuslim_050')];
        let but_3 = [Markup.button.callback(key[50], 'hisn_almuslim_051')];
        let but_4 = [Markup.button.callback(key[51], 'hisn_almuslim_052')];
        let but_5 = [Markup.button.callback(key[52], 'hisn_almuslim_053')];
        let but_6 = [Markup.button.callback(key[53], 'hisn_almuslim_054')];
        let but_7 = [Markup.button.callback(key[54], 'hisn_almuslim_055')];
        let but_8 = [Markup.button.callback(key[55], 'hisn_almuslim_056')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_7')];
        let but_2 = [Markup.button.callback(key[56], 'hisn_almuslim_057')];
        let but_3 = [Markup.button.callback(key[57], 'hisn_almuslim_058')];
        let but_4 = [Markup.button.callback(key[58], 'hisn_almuslim_059')];
        let but_5 = [Markup.button.callback(key[59], 'hisn_almuslim_060')];
        let but_6 = [Markup.button.callback(key[60], 'hisn_almuslim_061')];
        let but_7 = [Markup.button.callback(key[61], 'hisn_almuslim_062')];
        let but_8 = [Markup.button.callback(key[62], 'hisn_almuslim_063')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_8')];
        let but_2 = [Markup.button.callback(key[63], 'hisn_almuslim_064')];
        let but_3 = [Markup.button.callback(key[64], 'hisn_almuslim_065')];
        let but_4 = [Markup.button.callback(key[65], 'hisn_almuslim_066')];
        let but_5 = [Markup.button.callback(key[66], 'hisn_almuslim_067')];
        let but_6 = [Markup.button.callback(key[67], 'hisn_almuslim_068')];
        let but_7 = [Markup.button.callback(key[68], 'hisn_almuslim_069')];
        let but_8 = [Markup.button.callback(key[69], 'hisn_almuslim_070')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_9')];
        let but_2 = [Markup.button.callback(key[70], 'hisn_almuslim_071')];
        let but_3 = [Markup.button.callback(key[71], 'hisn_almuslim_072')];
        let but_4 = [Markup.button.callback(key[72], 'hisn_almuslim_073')];
        let but_5 = [Markup.button.callback(key[73], 'hisn_almuslim_074')];
        let but_6 = [Markup.button.callback(key[74], 'hisn_almuslim_075')];
        let but_7 = [Markup.button.callback(key[75], 'hisn_almuslim_076')];
        let but_8 = [Markup.button.callback(key[76], 'hisn_almuslim_077')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_10')];
        let but_2 = [Markup.button.callback(key[77], 'hisn_almuslim_078')];
        let but_3 = [Markup.button.callback(key[78], 'hisn_almuslim_079')];
        let but_4 = [Markup.button.callback(key[79], 'hisn_almuslim_080')];
        let but_5 = [Markup.button.callback(key[80], 'hisn_almuslim_081')];
        let but_6 = [Markup.button.callback(key[81], 'hisn_almuslim_082')];
        let but_7 = [Markup.button.callback(key[82], 'hisn_almuslim_083')];
        let but_8 = [Markup.button.callback(key[83], 'hisn_almuslim_084')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_11')];
        let but_2 = [Markup.button.callback(key[84], 'hisn_almuslim_085')];
        let but_3 = [Markup.button.callback(key[85], 'hisn_almuslim_086')];
        let but_4 = [Markup.button.callback(key[86], 'hisn_almuslim_087')];
        let but_5 = [Markup.button.callback(key[87], 'hisn_almuslim_088')];
        let but_6 = [Markup.button.callback(key[88], 'hisn_almuslim_089')];
        let but_7 = [Markup.button.callback(key[89], 'hisn_almuslim_090')];
        let but_8 = [Markup.button.callback(key[90], 'hisn_almuslim_091')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_13')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_13', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_12')];
        let but_2 = [Markup.button.callback(key[91], 'hisn_almuslim_092')];
        let but_3 = [Markup.button.callback(key[92], 'hisn_almuslim_093')];
        let but_4 = [Markup.button.callback(key[93], 'hisn_almuslim_094')];
        let but_5 = [Markup.button.callback(key[94], 'hisn_almuslim_095')];
        let but_6 = [Markup.button.callback(key[95], 'hisn_almuslim_096')];
        let but_7 = [Markup.button.callback(key[96], 'hisn_almuslim_097')];
        let but_8 = [Markup.button.callback(key[97], 'hisn_almuslim_098')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_14')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_14', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_13')];
        let but_2 = [Markup.button.callback(key[98], 'hisn_almuslim_099')];
        let but_3 = [Markup.button.callback(key[99], 'hisn_almuslim_100')];
        let but_4 = [Markup.button.callback(key[100], 'hisn_almuslim_101')];
        let but_5 = [Markup.button.callback(key[101], 'hisn_almuslim_102')];
        let but_6 = [Markup.button.callback(key[102], 'hisn_almuslim_103')];
        let but_7 = [Markup.button.callback(key[103], 'hisn_almuslim_104')];
        let but_8 = [Markup.button.callback(key[104], 'hisn_almuslim_105')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_15')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_15', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_14')];
        let but_2 = [Markup.button.callback(key[105], 'hisn_almuslim_106')];
        let but_3 = [Markup.button.callback(key[106], 'hisn_almuslim_107')];
        let but_4 = [Markup.button.callback(key[107], 'hisn_almuslim_108')];
        let but_5 = [Markup.button.callback(key[108], 'hisn_almuslim_109')];
        let but_6 = [Markup.button.callback(key[109], 'hisn_almuslim_110')];
        let but_7 = [Markup.button.callback(key[110], 'hisn_almuslim_111')];
        let but_8 = [Markup.button.callback(key[111], 'hisn_almuslim_112')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_16')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_16', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_15')];
        let but_2 = [Markup.button.callback(key[112], 'hisn_almuslim_113')];
        let but_3 = [Markup.button.callback(key[113], 'hisn_almuslim_114')];
        let but_4 = [Markup.button.callback(key[114], 'hisn_almuslim_115')];
        let but_5 = [Markup.button.callback(key[115], 'hisn_almuslim_116')];
        let but_6 = [Markup.button.callback(key[116], 'hisn_almuslim_117')];
        let but_7 = [Markup.button.callback(key[117], 'hisn_almuslim_118')];
        let but_8 = [Markup.button.callback(key[118], 'hisn_almuslim_119')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_17')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_17', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_16')];
        let but_2 = [Markup.button.callback(key[119], 'hisn_almuslim_120')];
        let but_3 = [Markup.button.callback(key[120], 'hisn_almuslim_121')];
        let but_4 = [Markup.button.callback(key[121], 'hisn_almuslim_122')];
        let but_5 = [Markup.button.callback(key[122], 'hisn_almuslim_123')];
        let but_6 = [Markup.button.callback(key[123], 'hisn_almuslim_124')];
        let but_7 = [Markup.button.callback(key[124], 'hisn_almuslim_125')];
        let but_8 = [Markup.button.callback(key[125], 'hisn_almuslim_126')];
        let but_9 = [Markup.button.callback('⬇', 'hisn_almuslim_Menu_18')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('hisn_almuslim_Menu_18', async (ctx) => {

        let id = ctx.chat.id;
        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let hisn_almuslim_Message = 'حصن المسلم 🏰\n\n'
        hisn_almuslim_Message += ' كتاب أدعية تأليف سعيد بن علي بن وهف القحطاني حرر في شهر صفر 1409هـ والكتاب يحتوي على أذكار النبي محمد صلى الله عليه وسلم في مختلف مواضع الحياة اليومية وهو من أكثر الكتب الإسلامية انتشارا لسهولة أسلوبه والتزامه بالصحيح من الأحاديث. '
        let but_1 = [Markup.button.callback('⬆', 'hisn_almuslim_Menu_17')];
        let but_2 = [Markup.button.callback(key[126], 'hisn_almuslim_127')];
        let but_3 = [Markup.button.callback(key[127], 'hisn_almuslim_128')];
        let but_4 = [Markup.button.callback(key[128], 'hisn_almuslim_129')];
        let but_5 = [Markup.button.callback(key[129], 'hisn_almuslim_130')];
        let but_6 = [Markup.button.callback(key[130], 'hisn_almuslim_131')];
        let but_7 = [Markup.button.callback(key[131], 'hisn_almuslim_132')];
        let but_8 = [Markup.button.callback(key[132], 'hisn_almuslim_133')];
        let but_9 = [Markup.button.callback(key[133], 'hisn_almuslim_134')];
        let but_10 = [Markup.button.callback('الرجوع للقائمة الرئيسية', 'start')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7, but_8, but_9, but_10]);
        let { message_id } = await ctx.reply(hisn_almuslim_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });


    bot.action('hisn_almuslim_001', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[0]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[0]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[0]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_002', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[1]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[1]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[1]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_003', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[2]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[2]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[2]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_004', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[3]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[3]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[3]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_005', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[4]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[4]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[4]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_006', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[5]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[5]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[5]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_007', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[6]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[6]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[6]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_008', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[7]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[7]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[7]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_009', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[8]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[8]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[8]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_010', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[9]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[9]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[9]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_011', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[10]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[10]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[10]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_012', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[11]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[11]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[11]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_013', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[12]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[12]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[12]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_014', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[13]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[13]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[13]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_015', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[14]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[14]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[14]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_016', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[15]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[15]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[15]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_017', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[16]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[16]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[16]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_018', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[17]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[17]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[17]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_019', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[18]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[18]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[18]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_020', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[19]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[19]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[19]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_021', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[20]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[20]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[20]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_022', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[21]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[21]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[21]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_023', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[22]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[22]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[22]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_024', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[23]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[23]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[23]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_025', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[24]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[24]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[24]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_026', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[25]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[25]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[25]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_027', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[26]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[26]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[26]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_028', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[27]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[27]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[27]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_029', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[28]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[28]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[28]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_030', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[29]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[29]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[29]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_031', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[30]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[30]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[30]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_032', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[31]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[31]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[31]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_033', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[32]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[32]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[32]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_034', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[33]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[33]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[33]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_035', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[34]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[34]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[34]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_036', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[35]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[35]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[35]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_037', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[36]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[36]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[36]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_038', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[37]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[37]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[37]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_039', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[38]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[38]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[38]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_040', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[39]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[39]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[39]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_041', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[40]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[40]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[40]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_042', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[41]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[41]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[41]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_043', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[42]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[42]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[42]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_044', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[43]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[43]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[43]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_045', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[44]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[44]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[44]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_046', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[45]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[45]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[45]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_047', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[46]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[46]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[46]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_048', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[47]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[47]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[47]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_049', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[48]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[48]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[48]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_050', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[49]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[49]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[49]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_051', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[50]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[50]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[50]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_052', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[51]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[51]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[51]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_053', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[52]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[52]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[52]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_054', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[53]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[53]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[53]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_055', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[54]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[54]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[54]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_056', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[55]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[55]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[55]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_057', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[56]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[56]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[56]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_058', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[57]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[57]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[57]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_059', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[58]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[58]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[58]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_060', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[59]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[59]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[59]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_061', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[60]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[60]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[60]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_062', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[61]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[61]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[61]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_063', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[62]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[62]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[62]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_064', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[63]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[63]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[63]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_065', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[64]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[64]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[64]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_066', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[65]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[65]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[65]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_067', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[66]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[66]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[66]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_068', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[67]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[67]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[67]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_069', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[68]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[68]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[68]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_070', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[69]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[69]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[69]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_071', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[70]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[70]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[70]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_072', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[71]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[71]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[71]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_073', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[72]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[72]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[72]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_074', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[73]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[73]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[73]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_075', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[74]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[74]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[74]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_076', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[75]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[75]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[75]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_077', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[76]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[76]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[76]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_078', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[77]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[77]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[77]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_079', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[78]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[78]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[78]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_080', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[79]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[79]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[79]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_081', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[80]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[80]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[80]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_082', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[81]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[81]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[81]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_083', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[82]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[82]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[82]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_084', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[83]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[83]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[83]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_085', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[84]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[84]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[84]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_086', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[85]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[85]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[85]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_087', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[86]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[86]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[86]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_088', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[87]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[87]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[87]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_089', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[88]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[88]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[88]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_090', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[89]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[89]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[89]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_091', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[90]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[90]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[90]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_092', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[91]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[91]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[91]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_093', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[92]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[92]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[92]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_094', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[93]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[93]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[93]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_095', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[94]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[94]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[94]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_096', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[95]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[95]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[95]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_097', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[96]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[96]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[96]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_098', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[97]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[97]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[97]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_099', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[98]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[98]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[98]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_100', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[99]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[99]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[99]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_101', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[100]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[100]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[100]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_102', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[101]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[101]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[101]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_103', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[102]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[102]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[102]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_104', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[103]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[103]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[103]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_105', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[104]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[104]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[104]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_106', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[105]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[105]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[105]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_107', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[106]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[106]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[106]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_108', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[107]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[107]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[107]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_109', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[108]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[108]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[108]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_110', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[109]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[109]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[109]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_111', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[110]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[110]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[110]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_112', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[111]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[111]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[111]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_113', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[112]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[112]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[112]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_114', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[113]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[113]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[113]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_115', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[114]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[114]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[114]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_116', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[115]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[115]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[115]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_117', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[116]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[116]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[116]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_118', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[117]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[117]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[117]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_119', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[118]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[118]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[118]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_120', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[119]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[119]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[119]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_121', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[120]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[120]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[120]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_122', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[121]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[121]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[121]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_123', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[122]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[122]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[122]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_124', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[123]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[123]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[123]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_125', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[124]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[124]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[124]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_126', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[125]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[125]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[125]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_127', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[126]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[126]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[126]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_128', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[127]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[127]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[127]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_129', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[128]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[128]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[128]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_130', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[129]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[129]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[129]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_131', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[130]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[130]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[130]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_132', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[131]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[131]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[131]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_133', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[132]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[132]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[132]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });

    bot.action('hisn_almuslim_134', async (ctx) => {

        let hisn_almuslim_json = fs.readJsonSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
        let key = Object.keys(hisn_almuslim_json);
        let message = `<b>✽ ${key[133]}</b>\n\n`

        for (let lop of hisn_almuslim_json[key[133]].text) {
            message += `<b>${lop}</b>\n`
        }
        message += `\n\n\n\n________\n\n`
        for (let lop2 of hisn_almuslim_json[key[133]].footnote) {
            message += `${lop2}\n`
        }

        await ctx.reply(message, { parse_mode: 'HTML' });
    });



}