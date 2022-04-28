const path = require('path');
const fs = require('fs-extra');

module.exports = async function Abdullrahman_Alsudais(bot, Path_appDate, Markup) {

    bot.action('Abdullrahman_Alsudais', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Abdullrahman_Alsudais_001'),
            Markup.button.callback('البقرة', 'Abdullrahman_Alsudais_002'),
            Markup.button.callback('آل عمران', 'Abdullrahman_Alsudais_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Abdullrahman_Alsudais_004'),
            Markup.button.callback('المائدة', 'Abdullrahman_Alsudais_005'),
            Markup.button.callback('الأنعام', 'Abdullrahman_Alsudais_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Abdullrahman_Alsudais_007'),
            Markup.button.callback('الأنفال', 'Abdullrahman_Alsudais_008'),
            Markup.button.callback('التوبة', 'Abdullrahman_Alsudais_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais')];
        let but_2 = [
            Markup.button.callback('يونس', 'Abdullrahman_Alsudais_010'),
            Markup.button.callback('هود', 'Abdullrahman_Alsudais_011'),
            Markup.button.callback('يوسف', 'Abdullrahman_Alsudais_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Abdullrahman_Alsudais_013'),
            Markup.button.callback('ابراهيم', 'Abdullrahman_Alsudais_014'),
            Markup.button.callback('الحجر', 'Abdullrahman_Alsudais_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Abdullrahman_Alsudais_016'),
            Markup.button.callback('الإسراء', 'Abdullrahman_Alsudais_017'),
            Markup.button.callback('الكهف', 'Abdullrahman_Alsudais_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Abdullrahman_Alsudais_019'),
            Markup.button.callback('طه', 'Abdullrahman_Alsudais_020'),
            Markup.button.callback('الأنبياء', 'Abdullrahman_Alsudais_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Abdullrahman_Alsudais_022'),
            Markup.button.callback('المؤمنون', 'Abdullrahman_Alsudais_023'),
            Markup.button.callback('النور', 'Abdullrahman_Alsudais_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Abdullrahman_Alsudais_025'),
            Markup.button.callback('الشعراء', 'Abdullrahman_Alsudais_026'),
            Markup.button.callback('النمل', 'Abdullrahman_Alsudais_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Abdullrahman_Alsudais_028'),
            Markup.button.callback('العنكبوت', 'Abdullrahman_Alsudais_029'),
            Markup.button.callback('الروم', 'Abdullrahman_Alsudais_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Abdullrahman_Alsudais_031'),
            Markup.button.callback('السجدة', 'Abdullrahman_Alsudais_032'),
            Markup.button.callback('الأحزاب', 'Abdullrahman_Alsudais_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Abdullrahman_Alsudais_034'),
            Markup.button.callback('فاطر', 'Abdullrahman_Alsudais_035'),
            Markup.button.callback('يس', 'Abdullrahman_Alsudais_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Abdullrahman_Alsudais_037'),
            Markup.button.callback('سورة ص', 'Abdullrahman_Alsudais_038'),
            Markup.button.callback('الزمر', 'Abdullrahman_Alsudais_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Abdullrahman_Alsudais_040'),
            Markup.button.callback('فصلت', 'Abdullrahman_Alsudais_041'),
            Markup.button.callback('الشورى', 'Abdullrahman_Alsudais_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Abdullrahman_Alsudais_043'),
            Markup.button.callback('الدخان', 'Abdullrahman_Alsudais_044'),
            Markup.button.callback('الجاثية', 'Abdullrahman_Alsudais_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Abdullrahman_Alsudais_046'),
            Markup.button.callback('محمد', 'Abdullrahman_Alsudais_047'),
            Markup.button.callback('الفتح', 'Abdullrahman_Alsudais_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Abdullrahman_Alsudais_049'),
            Markup.button.callback('سورة ق', 'Abdullrahman_Alsudais_050'),
            Markup.button.callback('الذاريات', 'Abdullrahman_Alsudais_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Abdullrahman_Alsudais_052'),
            Markup.button.callback('النجم', 'Abdullrahman_Alsudais_053'),
            Markup.button.callback('القمر', 'Abdullrahman_Alsudais_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Abdullrahman_Alsudais_055'),
            Markup.button.callback('الواقعة', 'Abdullrahman_Alsudais_056'),
            Markup.button.callback('الحديد', 'Abdullrahman_Alsudais_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Abdullrahman_Alsudais_058'),
            Markup.button.callback('الحشر', 'Abdullrahman_Alsudais_059'),
            Markup.button.callback('الممتحنة', 'Abdullrahman_Alsudais_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Abdullrahman_Alsudais_061'),
            Markup.button.callback('الجمعة', 'Abdullrahman_Alsudais_062'),
            Markup.button.callback('المنافقون', 'Abdullrahman_Alsudais_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Abdullrahman_Alsudais_064'),
            Markup.button.callback('الطلاق', 'Abdullrahman_Alsudais_065'),
            Markup.button.callback('التحريم', 'Abdullrahman_Alsudais_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Abdullrahman_Alsudais_067'),
            Markup.button.callback('القلم', 'Abdullrahman_Alsudais_068'),
            Markup.button.callback('الحاقة', 'Abdullrahman_Alsudais_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Abdullrahman_Alsudais_070'),
            Markup.button.callback('نوح', 'Abdullrahman_Alsudais_071'),
            Markup.button.callback('الجن', 'Abdullrahman_Alsudais_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Abdullrahman_Alsudais_073'),
            Markup.button.callback('المدثر', 'Abdullrahman_Alsudais_074'),
            Markup.button.callback('القيامة', 'Abdullrahman_Alsudais_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Abdullrahman_Alsudais_076'),
            Markup.button.callback('المرسلات', 'Abdullrahman_Alsudais_077'),
            Markup.button.callback('النبأ', 'Abdullrahman_Alsudais_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Abdullrahman_Alsudais_079'),
            Markup.button.callback('عبس', 'Abdullrahman_Alsudais_080'),
            Markup.button.callback('التكوير', 'Abdullrahman_Alsudais_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Abdullrahman_Alsudais_082'),
            Markup.button.callback('المطففين', 'Abdullrahman_Alsudais_083'),
            Markup.button.callback('الانشقاق', 'Abdullrahman_Alsudais_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Abdullrahman_Alsudais_085'),
            Markup.button.callback('الطارق', 'Abdullrahman_Alsudais_086'),
            Markup.button.callback('الأعلى', 'Abdullrahman_Alsudais_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Abdullrahman_Alsudais_088'),
            Markup.button.callback('الفجر', 'Abdullrahman_Alsudais_089'),
            Markup.button.callback('البلد', 'Abdullrahman_Alsudais_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Abdullrahman_Alsudais_091'),
            Markup.button.callback('الليل', 'Abdullrahman_Alsudais_092'),
            Markup.button.callback('الضحى', 'Abdullrahman_Alsudais_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Abdullrahman_Alsudais_094'),
            Markup.button.callback('التين', 'Abdullrahman_Alsudais_095'),
            Markup.button.callback('العلق', 'Abdullrahman_Alsudais_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Abdullrahman_Alsudais_097'),
            Markup.button.callback('البينة', 'Abdullrahman_Alsudais_098'),
            Markup.button.callback('الزلزلة', 'Abdullrahman_Alsudais_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Abdullrahman_Alsudais_100'),
            Markup.button.callback('القارعة', 'Abdullrahman_Alsudais_101'),
            Markup.button.callback('التكاثر', 'Abdullrahman_Alsudais_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Abdullrahman_Alsudais_103'),
            Markup.button.callback('الهمزة', 'Abdullrahman_Alsudais_104'),
            Markup.button.callback('الفيل', 'Abdullrahman_Alsudais_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Abdullrahman_Alsudais_106'),
            Markup.button.callback('الماعون', 'Abdullrahman_Alsudais_107'),
            Markup.button.callback('الكوثر', 'Abdullrahman_Alsudais_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Abdullrahman_Alsudais_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Abdullrahman_Alsudais_Message = 'القارئ عبدالرحمن السديس 🔊 \n\n'
        Abdullrahman_Alsudais_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Abdullrahman_Alsudais_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Abdullrahman_Alsudais_109'),
            Markup.button.callback('القارعة', 'Abdullrahman_Alsudais_110'),
            Markup.button.callback('التكاثر', 'Abdullrahman_Alsudais_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Abdullrahman_Alsudais_112'),
            Markup.button.callback('الهمزة', 'Abdullrahman_Alsudais_113'),
            Markup.button.callback('الفيل', 'Abdullrahman_Alsudais_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Abdullrahman_Alsudais_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Abdullrahman_Alsudais_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/001.mp3' }, { caption: caption })
    
    });
    
    bot.action('Abdullrahman_Alsudais_002', async (ctx) => {
    
        let caption = "سورة: البقرة 📖\nالقارئ: عبدالرحمن السديس 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server11.mp3quran.net/sds/002.mp3"
        ctx.reply(caption)
    
    });
    
    bot.action('Abdullrahman_Alsudais_003', async (ctx) => {
    
        let caption = "سورة: آل عمران 📖\nالقارئ: عبدالرحمن السديس 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server11.mp3quran.net/sds/003.mp3"
        ctx.reply(caption)
    
    });
    
    bot.action('Abdullrahman_Alsudais_004', async (ctx) => {
    
        let caption = "سورة: النساء 📖\nالقارئ: عبدالرحمن السديس 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server11.mp3quran.net/sds/004.mp3"
        ctx.reply(caption)
    
    });
    
    bot.action('Abdullrahman_Alsudais_005', async (ctx) => {
    
        let caption = "سورة: المائدة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/005.mp3' }, { caption: caption })
    
    });
    
    bot.action('Abdullrahman_Alsudais_006', async (ctx) => {
    
        let caption = "سورة: الأنعام 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/006.mp3' }, { caption: caption })
    
    });
    
    bot.action('Abdullrahman_Alsudais_007', async (ctx) => {
    
        let caption = "سورة: الأعراف 📖\nالقارئ: عبدالرحمن السديس 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server11.mp3quran.net/sds/007.mp3"
        ctx.reply(caption)
    
    });
    
    bot.action('Abdullrahman_Alsudais_008', async (ctx) => {
    
        let caption = "سورة: الأنفال 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/008.mp3' }, { caption: caption })
    
    });
    
    bot.action('Abdullrahman_Alsudais_009', async (ctx) => {
    
        let caption = "سورة: التوبة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/009.mp3' }, { caption: caption })
    
    });

    bot.action('Abdullrahman_Alsudais_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/010.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/011.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/012.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/013.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/014.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/015.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/016.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/017.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/018.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/019.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/020.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/021.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/022.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/023.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/024.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/025.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/026.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/027.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/028.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/029.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/030.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/031.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/032.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/033.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/034.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/035.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/036.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/037.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/038.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/039.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/040.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/041.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/042.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/043.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/044.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/045.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/046.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/047.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/048.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/049.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/050.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/051.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/052.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/053.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/054.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/055.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/056.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/057.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/058.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/059.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/060.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/061.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/062.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/063.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/064.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/065.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/066.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/067.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/068.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/069.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/070.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/071.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/072.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/073.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/074.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/075.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/076.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/077.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/078.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/079.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/080.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/081.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/082.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/083.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/084.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/085.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/086.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/087.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/088.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/089.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/090.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/091.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/092.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/093.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/094.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/095.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/096.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/097.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/098.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/099.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/100.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/101.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/102.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/103.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/104.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/105.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/106.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/107.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/108.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/109.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/110.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/111.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/112.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/113.mp3' }, { caption: caption })

    });

    bot.action('Abdullrahman_Alsudais_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: عبدالرحمن السديس 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/sds/114.mp3' }, { caption: caption })

    });


}