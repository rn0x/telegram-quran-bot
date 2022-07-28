const path = require('path');
const fs = require('fs-extra');

module.exports = async function Musa_Bilal(bot, Path_appDate, Markup) {

    bot.action('Musa_Bilal', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Musa_Bilal_001'),
            Markup.button.callback('البقرة', 'Musa_Bilal_002'),
            Markup.button.callback('آل عمران', 'Musa_Bilal_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Musa_Bilal_004'),
            Markup.button.callback('المائدة', 'Musa_Bilal_005'),
            Markup.button.callback('الأنعام', 'Musa_Bilal_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Musa_Bilal_007'),
            Markup.button.callback('الأنفال', 'Musa_Bilal_008'),
            Markup.button.callback('التوبة', 'Musa_Bilal_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal')];
        let but_2 = [
            Markup.button.callback('يونس', 'Musa_Bilal_010'),
            Markup.button.callback('هود', 'Musa_Bilal_011'),
            Markup.button.callback('يوسف', 'Musa_Bilal_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Musa_Bilal_013'),
            Markup.button.callback('ابراهيم', 'Musa_Bilal_014'),
            Markup.button.callback('الحجر', 'Musa_Bilal_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Musa_Bilal_016'),
            Markup.button.callback('الإسراء', 'Musa_Bilal_017'),
            Markup.button.callback('الكهف', 'Musa_Bilal_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Musa_Bilal_019'),
            Markup.button.callback('طه', 'Musa_Bilal_020'),
            Markup.button.callback('الأنبياء', 'Musa_Bilal_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Musa_Bilal_022'),
            Markup.button.callback('المؤمنون', 'Musa_Bilal_023'),
            Markup.button.callback('النور', 'Musa_Bilal_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Musa_Bilal_025'),
            Markup.button.callback('الشعراء', 'Musa_Bilal_026'),
            Markup.button.callback('النمل', 'Musa_Bilal_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Musa_Bilal_028'),
            Markup.button.callback('العنكبوت', 'Musa_Bilal_029'),
            Markup.button.callback('الروم', 'Musa_Bilal_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Musa_Bilal_031'),
            Markup.button.callback('السجدة', 'Musa_Bilal_032'),
            Markup.button.callback('الأحزاب', 'Musa_Bilal_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Musa_Bilal_034'),
            Markup.button.callback('فاطر', 'Musa_Bilal_035'),
            Markup.button.callback('يس', 'Musa_Bilal_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Musa_Bilal_037'),
            Markup.button.callback('سورة ص', 'Musa_Bilal_038'),
            Markup.button.callback('الزمر', 'Musa_Bilal_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Musa_Bilal_040'),
            Markup.button.callback('فصلت', 'Musa_Bilal_041'),
            Markup.button.callback('الشورى', 'Musa_Bilal_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Musa_Bilal_043'),
            Markup.button.callback('الدخان', 'Musa_Bilal_044'),
            Markup.button.callback('الجاثية', 'Musa_Bilal_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Musa_Bilal_046'),
            Markup.button.callback('محمد', 'Musa_Bilal_047'),
            Markup.button.callback('الفتح', 'Musa_Bilal_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Musa_Bilal_049'),
            Markup.button.callback('سورة ق', 'Musa_Bilal_050'),
            Markup.button.callback('الذاريات', 'Musa_Bilal_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Musa_Bilal_052'),
            Markup.button.callback('النجم', 'Musa_Bilal_053'),
            Markup.button.callback('القمر', 'Musa_Bilal_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Musa_Bilal_055'),
            Markup.button.callback('الواقعة', 'Musa_Bilal_056'),
            Markup.button.callback('الحديد', 'Musa_Bilal_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Musa_Bilal_058'),
            Markup.button.callback('الحشر', 'Musa_Bilal_059'),
            Markup.button.callback('الممتحنة', 'Musa_Bilal_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Musa_Bilal_061'),
            Markup.button.callback('الجمعة', 'Musa_Bilal_062'),
            Markup.button.callback('المنافقون', 'Musa_Bilal_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Musa_Bilal_064'),
            Markup.button.callback('الطلاق', 'Musa_Bilal_065'),
            Markup.button.callback('التحريم', 'Musa_Bilal_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Musa_Bilal_067'),
            Markup.button.callback('القلم', 'Musa_Bilal_068'),
            Markup.button.callback('الحاقة', 'Musa_Bilal_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Musa_Bilal_070'),
            Markup.button.callback('نوح', 'Musa_Bilal_071'),
            Markup.button.callback('الجن', 'Musa_Bilal_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Musa_Bilal_073'),
            Markup.button.callback('المدثر', 'Musa_Bilal_074'),
            Markup.button.callback('القيامة', 'Musa_Bilal_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Musa_Bilal_076'),
            Markup.button.callback('المرسلات', 'Musa_Bilal_077'),
            Markup.button.callback('النبأ', 'Musa_Bilal_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Musa_Bilal_079'),
            Markup.button.callback('عبس', 'Musa_Bilal_080'),
            Markup.button.callback('التكوير', 'Musa_Bilal_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Musa_Bilal_082'),
            Markup.button.callback('المطففين', 'Musa_Bilal_083'),
            Markup.button.callback('الانشقاق', 'Musa_Bilal_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Musa_Bilal_085'),
            Markup.button.callback('الطارق', 'Musa_Bilal_086'),
            Markup.button.callback('الأعلى', 'Musa_Bilal_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Musa_Bilal_088'),
            Markup.button.callback('الفجر', 'Musa_Bilal_089'),
            Markup.button.callback('البلد', 'Musa_Bilal_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Musa_Bilal_091'),
            Markup.button.callback('الليل', 'Musa_Bilal_092'),
            Markup.button.callback('الضحى', 'Musa_Bilal_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Musa_Bilal_094'),
            Markup.button.callback('التين', 'Musa_Bilal_095'),
            Markup.button.callback('العلق', 'Musa_Bilal_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Musa_Bilal_097'),
            Markup.button.callback('البينة', 'Musa_Bilal_098'),
            Markup.button.callback('الزلزلة', 'Musa_Bilal_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Musa_Bilal_100'),
            Markup.button.callback('القارعة', 'Musa_Bilal_101'),
            Markup.button.callback('التكاثر', 'Musa_Bilal_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Musa_Bilal_103'),
            Markup.button.callback('الهمزة', 'Musa_Bilal_104'),
            Markup.button.callback('الفيل', 'Musa_Bilal_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Musa_Bilal_106'),
            Markup.button.callback('الماعون', 'Musa_Bilal_107'),
            Markup.button.callback('الكوثر', 'Musa_Bilal_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Musa_Bilal_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? await ctx.deleteMessage(json[id].message_id) : ''
        let Musa_Bilal_Message = 'القارئ موسى بلال 🔊 \n\n'
        Musa_Bilal_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Musa_Bilal_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Musa_Bilal_109'),
            Markup.button.callback('القارعة', 'Musa_Bilal_110'),
            Markup.button.callback('التكاثر', 'Musa_Bilal_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Musa_Bilal_112'),
            Markup.button.callback('الهمزة', 'Musa_Bilal_113'),
            Markup.button.callback('الفيل', 'Musa_Bilal_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Musa_Bilal_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Musa_Bilal_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/001.mp3' }, { caption: caption })
    
    });
    
    bot.action('Musa_Bilal_002', async (ctx) => {
    
        let caption = "سورة: البقرة 📖\nالقارئ: موسى بلال 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server11.mp3quran.net/bilal/002.mp3"
        ctx.reply(caption)
    
    });
    
    bot.action('Musa_Bilal_003', async (ctx) => {
    
        let caption = "سورة: آل عمران 📖\nالقارئ: موسى بلال 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server11.mp3quran.net/bilal/003.mp3"
        ctx.reply(caption)
    
    });
    
    bot.action('Musa_Bilal_004', async (ctx) => {
    
        let caption = "سورة: النساء 📖\nالقارئ: موسى بلال 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server11.mp3quran.net/bilal/002.mp3"
        ctx.reply(caption)
    
    });
    
    bot.action('Musa_Bilal_005', async (ctx) => {
    
        let caption = "سورة: المائدة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/005.mp3' }, { caption: caption })
    
    });
    
    bot.action('Musa_Bilal_006', async (ctx) => {
    
        let caption = "سورة: الأنعام 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/006.mp3' }, { caption: caption })
    
    });
    
    bot.action('Musa_Bilal_007', async (ctx) => {
    
        let caption = "سورة: الأعراف 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/007.mp3' }, { caption: caption })
    
    });
    
    bot.action('Musa_Bilal_008', async (ctx) => {
    
        let caption = "سورة: الأنفال 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/008.mp3' }, { caption: caption })
    
    });
    
    bot.action('Musa_Bilal_009', async (ctx) => {
    
        let caption = "سورة: التوبة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/009.mp3' }, { caption: caption })
    
    });

    bot.action('Musa_Bilal_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/010.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/011.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/012.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/013.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/014.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/015.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/016.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/017.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/018.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/019.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/020.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/021.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/022.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/023.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/024.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/025.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/026.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/027.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/028.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/029.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/030.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/031.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/032.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/033.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/034.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/035.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/036.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/037.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/038.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/039.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/040.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/041.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/042.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/043.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/044.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/045.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/046.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/047.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/048.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/049.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/050.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/051.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/052.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/053.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/054.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/055.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/056.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/057.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/058.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/059.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/060.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/061.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/062.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/063.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/064.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/065.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/066.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/067.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/068.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/069.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/070.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/071.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/072.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/073.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/074.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/075.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/076.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/077.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/078.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/079.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/080.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/081.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/082.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/083.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/084.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/085.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/086.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/087.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/088.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/089.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/090.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/091.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/092.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/093.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/094.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/095.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/096.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/097.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/098.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/099.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/100.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/101.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/102.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/103.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/104.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/105.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/106.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/107.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/108.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/109.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/110.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/111.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/112.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/113.mp3' }, { caption: caption })

    });

    bot.action('Musa_Bilal_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: موسى بلال 🔊"
        ctx.replyWithAudio({ url: 'http://server11.mp3quran.net/bilal/114.mp3' }, { caption: caption })

    });


}