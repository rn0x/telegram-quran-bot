const path = require('path');
const fs = require('fs-extra');

module.exports = async function Idris_Abkar(bot, Path_appDate, Markup) {

    bot.action('Idris_Abkar', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Idris_Abkar_001'),
            Markup.button.callback('البقرة', 'Idris_Abkar_002'),
            Markup.button.callback('آل عمران', 'Idris_Abkar_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Idris_Abkar_004'),
            Markup.button.callback('المائدة', 'Idris_Abkar_005'),
            Markup.button.callback('الأنعام', 'Idris_Abkar_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Idris_Abkar_007'),
            Markup.button.callback('الأنفال', 'Idris_Abkar_008'),
            Markup.button.callback('التوبة', 'Idris_Abkar_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar')];
        let but_2 = [
            Markup.button.callback('يونس', 'Idris_Abkar_010'),
            Markup.button.callback('هود', 'Idris_Abkar_011'),
            Markup.button.callback('يوسف', 'Idris_Abkar_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Idris_Abkar_013'),
            Markup.button.callback('ابراهيم', 'Idris_Abkar_014'),
            Markup.button.callback('الحجر', 'Idris_Abkar_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Idris_Abkar_016'),
            Markup.button.callback('الإسراء', 'Idris_Abkar_017'),
            Markup.button.callback('الكهف', 'Idris_Abkar_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Idris_Abkar_019'),
            Markup.button.callback('طه', 'Idris_Abkar_020'),
            Markup.button.callback('الأنبياء', 'Idris_Abkar_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Idris_Abkar_022'),
            Markup.button.callback('المؤمنون', 'Idris_Abkar_023'),
            Markup.button.callback('النور', 'Idris_Abkar_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Idris_Abkar_025'),
            Markup.button.callback('الشعراء', 'Idris_Abkar_026'),
            Markup.button.callback('النمل', 'Idris_Abkar_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Idris_Abkar_028'),
            Markup.button.callback('العنكبوت', 'Idris_Abkar_029'),
            Markup.button.callback('الروم', 'Idris_Abkar_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Idris_Abkar_031'),
            Markup.button.callback('السجدة', 'Idris_Abkar_032'),
            Markup.button.callback('الأحزاب', 'Idris_Abkar_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Idris_Abkar_034'),
            Markup.button.callback('فاطر', 'Idris_Abkar_035'),
            Markup.button.callback('يس', 'Idris_Abkar_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Idris_Abkar_037'),
            Markup.button.callback('سورة ص', 'Idris_Abkar_038'),
            Markup.button.callback('الزمر', 'Idris_Abkar_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Idris_Abkar_040'),
            Markup.button.callback('فصلت', 'Idris_Abkar_041'),
            Markup.button.callback('الشورى', 'Idris_Abkar_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Idris_Abkar_043'),
            Markup.button.callback('الدخان', 'Idris_Abkar_044'),
            Markup.button.callback('الجاثية', 'Idris_Abkar_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Idris_Abkar_046'),
            Markup.button.callback('محمد', 'Idris_Abkar_047'),
            Markup.button.callback('الفتح', 'Idris_Abkar_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Idris_Abkar_049'),
            Markup.button.callback('سورة ق', 'Idris_Abkar_050'),
            Markup.button.callback('الذاريات', 'Idris_Abkar_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Idris_Abkar_052'),
            Markup.button.callback('النجم', 'Idris_Abkar_053'),
            Markup.button.callback('القمر', 'Idris_Abkar_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Idris_Abkar_055'),
            Markup.button.callback('الواقعة', 'Idris_Abkar_056'),
            Markup.button.callback('الحديد', 'Idris_Abkar_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Idris_Abkar_058'),
            Markup.button.callback('الحشر', 'Idris_Abkar_059'),
            Markup.button.callback('الممتحنة', 'Idris_Abkar_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Idris_Abkar_061'),
            Markup.button.callback('الجمعة', 'Idris_Abkar_062'),
            Markup.button.callback('المنافقون', 'Idris_Abkar_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Idris_Abkar_064'),
            Markup.button.callback('الطلاق', 'Idris_Abkar_065'),
            Markup.button.callback('التحريم', 'Idris_Abkar_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Idris_Abkar_067'),
            Markup.button.callback('القلم', 'Idris_Abkar_068'),
            Markup.button.callback('الحاقة', 'Idris_Abkar_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Idris_Abkar_070'),
            Markup.button.callback('نوح', 'Idris_Abkar_071'),
            Markup.button.callback('الجن', 'Idris_Abkar_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Idris_Abkar_073'),
            Markup.button.callback('المدثر', 'Idris_Abkar_074'),
            Markup.button.callback('القيامة', 'Idris_Abkar_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Idris_Abkar_076'),
            Markup.button.callback('المرسلات', 'Idris_Abkar_077'),
            Markup.button.callback('النبأ', 'Idris_Abkar_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Idris_Abkar_079'),
            Markup.button.callback('عبس', 'Idris_Abkar_080'),
            Markup.button.callback('التكوير', 'Idris_Abkar_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Idris_Abkar_082'),
            Markup.button.callback('المطففين', 'Idris_Abkar_083'),
            Markup.button.callback('الانشقاق', 'Idris_Abkar_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Idris_Abkar_085'),
            Markup.button.callback('الطارق', 'Idris_Abkar_086'),
            Markup.button.callback('الأعلى', 'Idris_Abkar_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Idris_Abkar_088'),
            Markup.button.callback('الفجر', 'Idris_Abkar_089'),
            Markup.button.callback('البلد', 'Idris_Abkar_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Idris_Abkar_091'),
            Markup.button.callback('الليل', 'Idris_Abkar_092'),
            Markup.button.callback('الضحى', 'Idris_Abkar_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Idris_Abkar_094'),
            Markup.button.callback('التين', 'Idris_Abkar_095'),
            Markup.button.callback('العلق', 'Idris_Abkar_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Idris_Abkar_097'),
            Markup.button.callback('البينة', 'Idris_Abkar_098'),
            Markup.button.callback('الزلزلة', 'Idris_Abkar_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Idris_Abkar_100'),
            Markup.button.callback('القارعة', 'Idris_Abkar_101'),
            Markup.button.callback('التكاثر', 'Idris_Abkar_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Idris_Abkar_103'),
            Markup.button.callback('الهمزة', 'Idris_Abkar_104'),
            Markup.button.callback('الفيل', 'Idris_Abkar_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Idris_Abkar_106'),
            Markup.button.callback('الماعون', 'Idris_Abkar_107'),
            Markup.button.callback('الكوثر', 'Idris_Abkar_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Idris_Abkar_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Idris_Abkar_Message = 'القارئ ادريس ابكر 🔊 \n\n'
        Idris_Abkar_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Idris_Abkar_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Idris_Abkar_109'),
            Markup.button.callback('القارعة', 'Idris_Abkar_110'),
            Markup.button.callback('التكاثر', 'Idris_Abkar_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Idris_Abkar_112'),
            Markup.button.callback('الهمزة', 'Idris_Abkar_113'),
            Markup.button.callback('الفيل', 'Idris_Abkar_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Idris_Abkar_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Idris_Abkar_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/001.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_002', async (ctx) => {

        let caption = "سورة: البقرة 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/002.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_003', async (ctx) => {

        let caption = "سورة: آل عمران 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/003.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_004', async (ctx) => {

        let caption = "سورة: النساء 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/004.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_005', async (ctx) => {

        let caption = "سورة: المائدة 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/005.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_006', async (ctx) => {

        let caption = "سورة: الأنعام 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/006.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_007', async (ctx) => {

        let caption = "سورة: الأعراف 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/007.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_008', async (ctx) => {

        let caption = "سورة: الأنفال 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/008.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_009', async (ctx) => {

        let caption = "سورة: التوبة 📖\nالقارئ: ادريس ابكر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/abkr/009.mp3"
        ctx.reply(caption)

    });

    bot.action('Idris_Abkar_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/010.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/011.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/012.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/013.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/014.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/015.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/016.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/017.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/018.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/019.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/020.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/021.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/022.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/023.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/024.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/025.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/026.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/027.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/028.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/029.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/030.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/031.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/032.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/033.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/034.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/035.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/036.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/037.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/038.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/039.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/040.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/041.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/042.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/043.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/044.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/045.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/046.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/047.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/048.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/049.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/050.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/051.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/052.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/053.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/054.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/055.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/056.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/057.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/058.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/059.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/060.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/061.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/062.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/063.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/064.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/065.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/066.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/067.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/068.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/069.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/070.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/071.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/072.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/073.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/074.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/075.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/076.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/077.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/078.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/079.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/080.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/081.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/082.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/083.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/084.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/085.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/086.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/087.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/088.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/089.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/090.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/091.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/092.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/093.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/094.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/095.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/096.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/097.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/098.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/099.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/100.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/101.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/102.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/103.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/104.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/105.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/106.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/107.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/108.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/109.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/110.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/111.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/112.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/113.mp3' }, { caption: caption })

    });

    bot.action('Idris_Abkar_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: ادريس ابكر 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/abkr/114.mp3' }, { caption: caption })

    });


}