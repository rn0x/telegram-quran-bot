const path = require('path');
const fs = require('fs-extra');

module.exports = async function Bandar_Balila(bot, Path_appDate, Markup) {

    bot.action('Bandar_Balila', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Bandar_Balila_001'),
            Markup.button.callback('البقرة', 'Bandar_Balila_002'),
            Markup.button.callback('آل عمران', 'Bandar_Balila_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Bandar_Balila_004'),
            Markup.button.callback('المائدة', 'Bandar_Balila_005'),
            Markup.button.callback('الأنعام', 'Bandar_Balila_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Bandar_Balila_007'),
            Markup.button.callback('الأنفال', 'Bandar_Balila_008'),
            Markup.button.callback('التوبة', 'Bandar_Balila_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila')];
        let but_2 = [
            Markup.button.callback('يونس', 'Bandar_Balila_010'),
            Markup.button.callback('هود', 'Bandar_Balila_011'),
            Markup.button.callback('يوسف', 'Bandar_Balila_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Bandar_Balila_013'),
            Markup.button.callback('ابراهيم', 'Bandar_Balila_014'),
            Markup.button.callback('الحجر', 'Bandar_Balila_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Bandar_Balila_016'),
            Markup.button.callback('الإسراء', 'Bandar_Balila_017'),
            Markup.button.callback('الكهف', 'Bandar_Balila_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Bandar_Balila_019'),
            Markup.button.callback('طه', 'Bandar_Balila_020'),
            Markup.button.callback('الأنبياء', 'Bandar_Balila_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Bandar_Balila_022'),
            Markup.button.callback('المؤمنون', 'Bandar_Balila_023'),
            Markup.button.callback('النور', 'Bandar_Balila_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Bandar_Balila_025'),
            Markup.button.callback('الشعراء', 'Bandar_Balila_026'),
            Markup.button.callback('النمل', 'Bandar_Balila_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Bandar_Balila_028'),
            Markup.button.callback('العنكبوت', 'Bandar_Balila_029'),
            Markup.button.callback('الروم', 'Bandar_Balila_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Bandar_Balila_031'),
            Markup.button.callback('السجدة', 'Bandar_Balila_032'),
            Markup.button.callback('الأحزاب', 'Bandar_Balila_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Bandar_Balila_034'),
            Markup.button.callback('فاطر', 'Bandar_Balila_035'),
            Markup.button.callback('يس', 'Bandar_Balila_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Bandar_Balila_037'),
            Markup.button.callback('سورة ص', 'Bandar_Balila_038'),
            Markup.button.callback('الزمر', 'Bandar_Balila_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Bandar_Balila_040'),
            Markup.button.callback('فصلت', 'Bandar_Balila_041'),
            Markup.button.callback('الشورى', 'Bandar_Balila_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Bandar_Balila_043'),
            Markup.button.callback('الدخان', 'Bandar_Balila_044'),
            Markup.button.callback('الجاثية', 'Bandar_Balila_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Bandar_Balila_046'),
            Markup.button.callback('محمد', 'Bandar_Balila_047'),
            Markup.button.callback('الفتح', 'Bandar_Balila_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Bandar_Balila_049'),
            Markup.button.callback('سورة ق', 'Bandar_Balila_050'),
            Markup.button.callback('الذاريات', 'Bandar_Balila_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Bandar_Balila_052'),
            Markup.button.callback('النجم', 'Bandar_Balila_053'),
            Markup.button.callback('القمر', 'Bandar_Balila_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Bandar_Balila_055'),
            Markup.button.callback('الواقعة', 'Bandar_Balila_056'),
            Markup.button.callback('الحديد', 'Bandar_Balila_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Bandar_Balila_058'),
            Markup.button.callback('الحشر', 'Bandar_Balila_059'),
            Markup.button.callback('الممتحنة', 'Bandar_Balila_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Bandar_Balila_061'),
            Markup.button.callback('الجمعة', 'Bandar_Balila_062'),
            Markup.button.callback('المنافقون', 'Bandar_Balila_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Bandar_Balila_064'),
            Markup.button.callback('الطلاق', 'Bandar_Balila_065'),
            Markup.button.callback('التحريم', 'Bandar_Balila_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Bandar_Balila_067'),
            Markup.button.callback('القلم', 'Bandar_Balila_068'),
            Markup.button.callback('الحاقة', 'Bandar_Balila_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Bandar_Balila_070'),
            Markup.button.callback('نوح', 'Bandar_Balila_071'),
            Markup.button.callback('الجن', 'Bandar_Balila_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Bandar_Balila_073'),
            Markup.button.callback('المدثر', 'Bandar_Balila_074'),
            Markup.button.callback('القيامة', 'Bandar_Balila_075')
        ];
        let but_3 = [
            Markup.button.callback('المرسلات', 'Bandar_Balila_077'),
            Markup.button.callback('النبأ', 'Bandar_Balila_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Bandar_Balila_079'),
            Markup.button.callback('عبس', 'Bandar_Balila_080'),
            Markup.button.callback('التكوير', 'Bandar_Balila_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Bandar_Balila_082'),
            Markup.button.callback('المطففين', 'Bandar_Balila_083'),
            Markup.button.callback('الانشقاق', 'Bandar_Balila_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Bandar_Balila_085'),
            Markup.button.callback('الطارق', 'Bandar_Balila_086'),
            Markup.button.callback('الأعلى', 'Bandar_Balila_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Bandar_Balila_088'),
            Markup.button.callback('الفجر', 'Bandar_Balila_089'),
            Markup.button.callback('البلد', 'Bandar_Balila_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Bandar_Balila_091'),
            Markup.button.callback('الليل', 'Bandar_Balila_092'),
            Markup.button.callback('الضحى', 'Bandar_Balila_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Bandar_Balila_094'),
            Markup.button.callback('التين', 'Bandar_Balila_095'),
            Markup.button.callback('العلق', 'Bandar_Balila_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Bandar_Balila_097'),
            Markup.button.callback('البينة', 'Bandar_Balila_098'),
            Markup.button.callback('الزلزلة', 'Bandar_Balila_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Bandar_Balila_100'),
            Markup.button.callback('القارعة', 'Bandar_Balila_101'),
            Markup.button.callback('التكاثر', 'Bandar_Balila_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Bandar_Balila_103'),
            Markup.button.callback('الهمزة', 'Bandar_Balila_104'),
            Markup.button.callback('الفيل', 'Bandar_Balila_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Bandar_Balila_106'),
            Markup.button.callback('الماعون', 'Bandar_Balila_107'),
            Markup.button.callback('الكوثر', 'Bandar_Balila_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Bandar_Balila_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Bandar_Balila_Message = 'القارئ بندر بيليه 🔊 \n\n'
        Bandar_Balila_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Bandar_Balila_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Bandar_Balila_109'),
            Markup.button.callback('القارعة', 'Bandar_Balila_110'),
            Markup.button.callback('التكاثر', 'Bandar_Balila_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Bandar_Balila_112'),
            Markup.button.callback('الهمزة', 'Bandar_Balila_113'),
            Markup.button.callback('الفيل', 'Bandar_Balila_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Bandar_Balila_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Bandar_Balila_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/001.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_002', async (ctx) => {

        let caption = "سورة: البقرة 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/002.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_003', async (ctx) => {

        let caption = "سورة: آل عمران 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/003.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_004', async (ctx) => {

        let caption = "سورة: النساء 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/004.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_005', async (ctx) => {

        let caption = "سورة: المائدة 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/005.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_006', async (ctx) => {

        let caption = "سورة: الأنعام 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/006.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_007', async (ctx) => {

        let caption = "سورة: الأعراف 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/007.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_008', async (ctx) => {

        let caption = "سورة: الأنفال 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/008.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_009', async (ctx) => {

        let caption = "سورة: التوبة 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/009.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/010.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: بندر بيليه 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server6.mp3quran.net/balilah/011.mp3"
        ctx.reply(caption)

    });

    bot.action('Bandar_Balila_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/012.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/013.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/014.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/015.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/016.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/017.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/018.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/019.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/020.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/021.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/022.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/023.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/024.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/025.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/026.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/027.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/028.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/029.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/030.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/031.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/032.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/033.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/034.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/035.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/036.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/037.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/038.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/039.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/040.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/041.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/042.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/043.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/044.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/045.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/046.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/047.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/048.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/049.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/050.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/051.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/052.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/053.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/054.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/055.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/056.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/057.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/058.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/059.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/060.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/061.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/062.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/063.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/064.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/065.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/066.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/067.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/068.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/069.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/070.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/071.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/072.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/073.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/074.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/075.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/077.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/078.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/079.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/080.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/081.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/082.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/083.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/084.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/085.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/086.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/087.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/088.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/089.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/090.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/091.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/092.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/093.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/094.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/095.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/096.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/097.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/098.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/099.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/100.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/101.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/102.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/103.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/104.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/105.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/106.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/107.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/108.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/109.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/110.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/111.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/112.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/113.mp3' }, { caption: caption })

    });

    bot.action('Bandar_Balila_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: بندر بيليه 🔊"
        ctx.replyWithAudio({ url: 'http://server6.mp3quran.net/balilah/114.mp3' }, { caption: caption })

    });


}