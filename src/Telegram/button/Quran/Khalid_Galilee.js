const path = require('path');
const fs = require('fs-extra');

module.exports = async function Khalid_Galilee(bot, Path_appDate, Markup) {

    bot.action('Khalid_Galilee', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Khalid_Galilee_001'),
            Markup.button.callback('البقرة', 'Khalid_Galilee_002'),
            Markup.button.callback('آل عمران', 'Khalid_Galilee_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Khalid_Galilee_004'),
            Markup.button.callback('المائدة', 'Khalid_Galilee_005'),
            Markup.button.callback('الأنعام', 'Khalid_Galilee_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Khalid_Galilee_007'),
            Markup.button.callback('الأنفال', 'Khalid_Galilee_008'),
            Markup.button.callback('التوبة', 'Khalid_Galilee_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee')];
        let but_2 = [
            Markup.button.callback('يونس', 'Khalid_Galilee_010'),
            Markup.button.callback('هود', 'Khalid_Galilee_011'),
            Markup.button.callback('يوسف', 'Khalid_Galilee_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Khalid_Galilee_013'),
            Markup.button.callback('ابراهيم', 'Khalid_Galilee_014'),
            Markup.button.callback('الحجر', 'Khalid_Galilee_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Khalid_Galilee_016'),
            Markup.button.callback('الإسراء', 'Khalid_Galilee_017'),
            Markup.button.callback('الكهف', 'Khalid_Galilee_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Khalid_Galilee_019'),
            Markup.button.callback('طه', 'Khalid_Galilee_020'),
            Markup.button.callback('الأنبياء', 'Khalid_Galilee_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Khalid_Galilee_022'),
            Markup.button.callback('المؤمنون', 'Khalid_Galilee_023'),
            Markup.button.callback('النور', 'Khalid_Galilee_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Khalid_Galilee_025'),
            Markup.button.callback('الشعراء', 'Khalid_Galilee_026'),
            Markup.button.callback('النمل', 'Khalid_Galilee_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Khalid_Galilee_028'),
            Markup.button.callback('العنكبوت', 'Khalid_Galilee_029'),
            Markup.button.callback('الروم', 'Khalid_Galilee_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Khalid_Galilee_031'),
            Markup.button.callback('السجدة', 'Khalid_Galilee_032'),
            Markup.button.callback('الأحزاب', 'Khalid_Galilee_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Khalid_Galilee_034'),
            Markup.button.callback('فاطر', 'Khalid_Galilee_035'),
            Markup.button.callback('يس', 'Khalid_Galilee_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Khalid_Galilee_037'),
            Markup.button.callback('سورة ص', 'Khalid_Galilee_038'),
            Markup.button.callback('الزمر', 'Khalid_Galilee_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Khalid_Galilee_040'),
            Markup.button.callback('فصلت', 'Khalid_Galilee_041'),
            Markup.button.callback('الشورى', 'Khalid_Galilee_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Khalid_Galilee_043'),
            Markup.button.callback('الدخان', 'Khalid_Galilee_044'),
            Markup.button.callback('الجاثية', 'Khalid_Galilee_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Khalid_Galilee_046'),
            Markup.button.callback('محمد', 'Khalid_Galilee_047'),
            Markup.button.callback('الفتح', 'Khalid_Galilee_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Khalid_Galilee_049'),
            Markup.button.callback('سورة ق', 'Khalid_Galilee_050'),
            Markup.button.callback('الذاريات', 'Khalid_Galilee_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Khalid_Galilee_052'),
            Markup.button.callback('النجم', 'Khalid_Galilee_053'),
            Markup.button.callback('القمر', 'Khalid_Galilee_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Khalid_Galilee_055'),
            Markup.button.callback('الواقعة', 'Khalid_Galilee_056'),
            Markup.button.callback('الحديد', 'Khalid_Galilee_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Khalid_Galilee_058'),
            Markup.button.callback('الحشر', 'Khalid_Galilee_059'),
            Markup.button.callback('الممتحنة', 'Khalid_Galilee_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Khalid_Galilee_061'),
            Markup.button.callback('الجمعة', 'Khalid_Galilee_062'),
            Markup.button.callback('المنافقون', 'Khalid_Galilee_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Khalid_Galilee_064'),
            Markup.button.callback('الطلاق', 'Khalid_Galilee_065'),
            Markup.button.callback('التحريم', 'Khalid_Galilee_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Khalid_Galilee_067'),
            Markup.button.callback('القلم', 'Khalid_Galilee_068'),
            Markup.button.callback('الحاقة', 'Khalid_Galilee_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Khalid_Galilee_070'),
            Markup.button.callback('نوح', 'Khalid_Galilee_071'),
            Markup.button.callback('الجن', 'Khalid_Galilee_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Khalid_Galilee_073'),
            Markup.button.callback('المدثر', 'Khalid_Galilee_074'),
            Markup.button.callback('القيامة', 'Khalid_Galilee_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Khalid_Galilee_076'),
            Markup.button.callback('المرسلات', 'Khalid_Galilee_077'),
            Markup.button.callback('النبأ', 'Khalid_Galilee_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Khalid_Galilee_079'),
            Markup.button.callback('عبس', 'Khalid_Galilee_080'),
            Markup.button.callback('التكوير', 'Khalid_Galilee_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Khalid_Galilee_082'),
            Markup.button.callback('المطففين', 'Khalid_Galilee_083'),
            Markup.button.callback('الانشقاق', 'Khalid_Galilee_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Khalid_Galilee_085'),
            Markup.button.callback('الطارق', 'Khalid_Galilee_086'),
            Markup.button.callback('الأعلى', 'Khalid_Galilee_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Khalid_Galilee_088'),
            Markup.button.callback('الفجر', 'Khalid_Galilee_089'),
            Markup.button.callback('البلد', 'Khalid_Galilee_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Khalid_Galilee_091'),
            Markup.button.callback('الليل', 'Khalid_Galilee_092'),
            Markup.button.callback('الضحى', 'Khalid_Galilee_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Khalid_Galilee_094'),
            Markup.button.callback('التين', 'Khalid_Galilee_095'),
            Markup.button.callback('العلق', 'Khalid_Galilee_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Khalid_Galilee_097'),
            Markup.button.callback('البينة', 'Khalid_Galilee_098'),
            Markup.button.callback('الزلزلة', 'Khalid_Galilee_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Khalid_Galilee_100'),
            Markup.button.callback('القارعة', 'Khalid_Galilee_101'),
            Markup.button.callback('التكاثر', 'Khalid_Galilee_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Khalid_Galilee_103'),
            Markup.button.callback('الهمزة', 'Khalid_Galilee_104'),
            Markup.button.callback('الفيل', 'Khalid_Galilee_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Khalid_Galilee_106'),
            Markup.button.callback('الماعون', 'Khalid_Galilee_107'),
            Markup.button.callback('الكوثر', 'Khalid_Galilee_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Khalid_Galilee_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Khalid_Galilee_Message = 'القارئ خالد الجليل 🔊 \n\n'
        Khalid_Galilee_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Khalid_Galilee_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Khalid_Galilee_109'),
            Markup.button.callback('القارعة', 'Khalid_Galilee_110'),
            Markup.button.callback('التكاثر', 'Khalid_Galilee_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Khalid_Galilee_112'),
            Markup.button.callback('الهمزة', 'Khalid_Galilee_113'),
            Markup.button.callback('الفيل', 'Khalid_Galilee_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Khalid_Galilee_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Khalid_Galilee_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/001.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_002', async (ctx) => {

        let caption = "سورة: البقرة 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/002.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_003', async (ctx) => {

        let caption = "سورة: آل عمران 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/003.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_004', async (ctx) => {

        let caption = "سورة: النساء 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/004.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_005', async (ctx) => {

        let caption = "سورة: المائدة 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/005.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_006', async (ctx) => {

        let caption = "سورة: الأنعام 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/006.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_007', async (ctx) => {

        let caption = "سورة: الأعراف 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/007.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_008', async (ctx) => {

        let caption = "سورة: الأنفال 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/008.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_009', async (ctx) => {

        let caption = "سورة: التوبة 📖\nالقارئ: خالد الجليل 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/jleel/009.mp3"
        ctx.reply(caption)

    });

    bot.action('Khalid_Galilee_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/010.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/011.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/012.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/013.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/014.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/015.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/016.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/017.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/018.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/019.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/020.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/021.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/022.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/023.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/024.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/025.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/026.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/027.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/028.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/029.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/030.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/031.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/032.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/033.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/034.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/035.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/036.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/037.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/038.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/039.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/040.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/041.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/042.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/043.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/044.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/045.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/046.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/047.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/048.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/049.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/050.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/051.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/052.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/053.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/054.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/055.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/056.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/057.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/058.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/059.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/060.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/061.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/062.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/063.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/064.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/065.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/066.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/067.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/068.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/069.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/070.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/071.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/072.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/073.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/074.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/075.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/076.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/077.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/078.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/079.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/080.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/081.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/082.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/083.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/084.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/085.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/086.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/087.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/088.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/089.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/090.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/091.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/092.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/093.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/094.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/095.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/096.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/097.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/098.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/099.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/100.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/101.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/102.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/103.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/104.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/105.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/106.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/107.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/108.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/109.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/110.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/111.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/112.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/113.mp3' }, { caption: caption })

    });

    bot.action('Khalid_Galilee_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: خالد الجليل 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/jleel/114.mp3' }, { caption: caption })

    });


}