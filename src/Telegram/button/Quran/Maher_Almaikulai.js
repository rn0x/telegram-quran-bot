const path = require('path');
const fs = require('fs-extra');

module.exports = async function Maher_Almaikulai(bot, Path_appDate, Markup) {

    bot.action('Maher_Almaikulai', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Maher_Almaikulai_001'),
            Markup.button.callback('البقرة', 'Maher_Almaikulai_002'),
            Markup.button.callback('آل عمران', 'Maher_Almaikulai_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Maher_Almaikulai_004'),
            Markup.button.callback('المائدة', 'Maher_Almaikulai_005'),
            Markup.button.callback('الأنعام', 'Maher_Almaikulai_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Maher_Almaikulai_007'),
            Markup.button.callback('الأنفال', 'Maher_Almaikulai_008'),
            Markup.button.callback('التوبة', 'Maher_Almaikulai_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai')];
        let but_2 = [
            Markup.button.callback('يونس', 'Maher_Almaikulai_010'),
            Markup.button.callback('هود', 'Maher_Almaikulai_011'),
            Markup.button.callback('يوسف', 'Maher_Almaikulai_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Maher_Almaikulai_013'),
            Markup.button.callback('ابراهيم', 'Maher_Almaikulai_014'),
            Markup.button.callback('الحجر', 'Maher_Almaikulai_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Maher_Almaikulai_016'),
            Markup.button.callback('الإسراء', 'Maher_Almaikulai_017'),
            Markup.button.callback('الكهف', 'Maher_Almaikulai_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Maher_Almaikulai_019'),
            Markup.button.callback('طه', 'Maher_Almaikulai_020'),
            Markup.button.callback('الأنبياء', 'Maher_Almaikulai_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Maher_Almaikulai_022'),
            Markup.button.callback('المؤمنون', 'Maher_Almaikulai_023'),
            Markup.button.callback('النور', 'Maher_Almaikulai_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Maher_Almaikulai_025'),
            Markup.button.callback('الشعراء', 'Maher_Almaikulai_026'),
            Markup.button.callback('النمل', 'Maher_Almaikulai_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Maher_Almaikulai_028'),
            Markup.button.callback('العنكبوت', 'Maher_Almaikulai_029'),
            Markup.button.callback('الروم', 'Maher_Almaikulai_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Maher_Almaikulai_031'),
            Markup.button.callback('السجدة', 'Maher_Almaikulai_032'),
            Markup.button.callback('الأحزاب', 'Maher_Almaikulai_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Maher_Almaikulai_034'),
            Markup.button.callback('فاطر', 'Maher_Almaikulai_035'),
            Markup.button.callback('يس', 'Maher_Almaikulai_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Maher_Almaikulai_037'),
            Markup.button.callback('سورة ص', 'Maher_Almaikulai_038'),
            Markup.button.callback('الزمر', 'Maher_Almaikulai_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Maher_Almaikulai_040'),
            Markup.button.callback('فصلت', 'Maher_Almaikulai_041'),
            Markup.button.callback('الشورى', 'Maher_Almaikulai_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Maher_Almaikulai_043'),
            Markup.button.callback('الدخان', 'Maher_Almaikulai_044'),
            Markup.button.callback('الجاثية', 'Maher_Almaikulai_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Maher_Almaikulai_046'),
            Markup.button.callback('محمد', 'Maher_Almaikulai_047'),
            Markup.button.callback('الفتح', 'Maher_Almaikulai_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Maher_Almaikulai_049'),
            Markup.button.callback('سورة ق', 'Maher_Almaikulai_050'),
            Markup.button.callback('الذاريات', 'Maher_Almaikulai_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Maher_Almaikulai_052'),
            Markup.button.callback('النجم', 'Maher_Almaikulai_053'),
            Markup.button.callback('القمر', 'Maher_Almaikulai_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Maher_Almaikulai_055'),
            Markup.button.callback('الواقعة', 'Maher_Almaikulai_056'),
            Markup.button.callback('الحديد', 'Maher_Almaikulai_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Maher_Almaikulai_058'),
            Markup.button.callback('الحشر', 'Maher_Almaikulai_059'),
            Markup.button.callback('الممتحنة', 'Maher_Almaikulai_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Maher_Almaikulai_061'),
            Markup.button.callback('الجمعة', 'Maher_Almaikulai_062'),
            Markup.button.callback('المنافقون', 'Maher_Almaikulai_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Maher_Almaikulai_064'),
            Markup.button.callback('الطلاق', 'Maher_Almaikulai_065'),
            Markup.button.callback('التحريم', 'Maher_Almaikulai_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Maher_Almaikulai_067'),
            Markup.button.callback('القلم', 'Maher_Almaikulai_068'),
            Markup.button.callback('الحاقة', 'Maher_Almaikulai_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Maher_Almaikulai_070'),
            Markup.button.callback('نوح', 'Maher_Almaikulai_071'),
            Markup.button.callback('الجن', 'Maher_Almaikulai_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Maher_Almaikulai_073'),
            Markup.button.callback('المدثر', 'Maher_Almaikulai_074'),
            Markup.button.callback('القيامة', 'Maher_Almaikulai_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Maher_Almaikulai_076'),
            Markup.button.callback('المرسلات', 'Maher_Almaikulai_077'),
            Markup.button.callback('النبأ', 'Maher_Almaikulai_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Maher_Almaikulai_079'),
            Markup.button.callback('عبس', 'Maher_Almaikulai_080'),
            Markup.button.callback('التكوير', 'Maher_Almaikulai_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Maher_Almaikulai_082'),
            Markup.button.callback('المطففين', 'Maher_Almaikulai_083'),
            Markup.button.callback('الانشقاق', 'Maher_Almaikulai_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Maher_Almaikulai_085'),
            Markup.button.callback('الطارق', 'Maher_Almaikulai_086'),
            Markup.button.callback('الأعلى', 'Maher_Almaikulai_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Maher_Almaikulai_088'),
            Markup.button.callback('الفجر', 'Maher_Almaikulai_089'),
            Markup.button.callback('البلد', 'Maher_Almaikulai_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Maher_Almaikulai_091'),
            Markup.button.callback('الليل', 'Maher_Almaikulai_092'),
            Markup.button.callback('الضحى', 'Maher_Almaikulai_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Maher_Almaikulai_094'),
            Markup.button.callback('التين', 'Maher_Almaikulai_095'),
            Markup.button.callback('العلق', 'Maher_Almaikulai_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Maher_Almaikulai_097'),
            Markup.button.callback('البينة', 'Maher_Almaikulai_098'),
            Markup.button.callback('الزلزلة', 'Maher_Almaikulai_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Maher_Almaikulai_100'),
            Markup.button.callback('القارعة', 'Maher_Almaikulai_101'),
            Markup.button.callback('التكاثر', 'Maher_Almaikulai_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Maher_Almaikulai_103'),
            Markup.button.callback('الهمزة', 'Maher_Almaikulai_104'),
            Markup.button.callback('الفيل', 'Maher_Almaikulai_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Maher_Almaikulai_106'),
            Markup.button.callback('الماعون', 'Maher_Almaikulai_107'),
            Markup.button.callback('الكوثر', 'Maher_Almaikulai_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Maher_Almaikulai_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Maher_Almaikulai_Message = 'القارئ ماهر المعيقلي 🔊 \n\n'
        Maher_Almaikulai_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Maher_Almaikulai_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Maher_Almaikulai_109'),
            Markup.button.callback('القارعة', 'Maher_Almaikulai_110'),
            Markup.button.callback('التكاثر', 'Maher_Almaikulai_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Maher_Almaikulai_112'),
            Markup.button.callback('الهمزة', 'Maher_Almaikulai_113'),
            Markup.button.callback('الفيل', 'Maher_Almaikulai_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Maher_Almaikulai_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Maher_Almaikulai_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/001.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_002', async (ctx) => {
    
        let caption = "سورة: البقرة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/002.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_003', async (ctx) => {
    
        let caption = "سورة: آل عمران 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/003.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_004', async (ctx) => {
    
        let caption = "سورة: النساء 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/004.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_005', async (ctx) => {
    
        let caption = "سورة: المائدة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/005.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_006', async (ctx) => {
    
        let caption = "سورة: الأنعام 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/006.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_007', async (ctx) => {
    
        let caption = "سورة: الأعراف 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/007.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_008', async (ctx) => {
    
        let caption = "سورة: الأنفال 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/008.mp3' }, { caption: caption })
    
    });
    
    bot.action('Maher_Almaikulai_009', async (ctx) => {
    
        let caption = "سورة: التوبة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/009.mp3' }, { caption: caption })
    
    });

    bot.action('Maher_Almaikulai_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/010.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/011.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/012.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/013.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/014.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/015.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/016.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/017.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/018.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/019.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/020.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/021.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/022.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/023.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/024.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/025.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/026.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/027.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/028.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/029.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/030.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/031.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/032.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/033.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/034.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/035.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/036.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/037.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/038.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/039.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/040.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/041.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/042.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/043.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/044.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/045.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/046.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/047.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/048.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/049.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/050.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/051.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/052.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/053.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/054.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/055.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/056.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/057.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/058.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/059.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/060.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/061.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/062.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/063.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/064.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/065.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/066.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/067.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/068.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/069.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/070.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/071.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/072.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/073.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/074.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/075.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/076.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/077.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/078.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/079.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/080.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/081.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/082.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/083.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/084.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/085.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/086.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/087.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/088.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/089.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/090.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/091.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/092.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/093.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/094.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/095.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/096.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/097.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/098.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/099.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/100.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/101.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/102.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/103.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/104.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/105.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/106.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/107.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/108.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/109.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/110.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/111.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/112.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/113.mp3' }, { caption: caption })

    });

    bot.action('Maher_Almaikulai_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: ماهر المعيقلي 🔊"
        ctx.replyWithAudio({ url: 'http://server12.mp3quran.net/maher/114.mp3' }, { caption: caption })

    });


}