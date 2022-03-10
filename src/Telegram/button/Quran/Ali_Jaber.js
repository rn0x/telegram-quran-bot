const path = require('path');
const fs = require('fs-extra');

module.exports = async function Ali_Jaber(bot, Path_appDate, Markup) {

    bot.action('Ali_Jaber', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Ali_Jaber_001'),
            Markup.button.callback('البقرة', 'Ali_Jaber_002'),
            Markup.button.callback('آل عمران', 'Ali_Jaber_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Ali_Jaber_004'),
            Markup.button.callback('المائدة', 'Ali_Jaber_005'),
            Markup.button.callback('الأنعام', 'Ali_Jaber_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Ali_Jaber_007'),
            Markup.button.callback('الأنفال', 'Ali_Jaber_008'),
            Markup.button.callback('التوبة', 'Ali_Jaber_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber')];
        let but_2 = [
            Markup.button.callback('يونس', 'Ali_Jaber_010'),
            Markup.button.callback('هود', 'Ali_Jaber_011'),
            Markup.button.callback('يوسف', 'Ali_Jaber_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Ali_Jaber_013'),
            Markup.button.callback('ابراهيم', 'Ali_Jaber_014'),
            Markup.button.callback('الحجر', 'Ali_Jaber_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Ali_Jaber_016'),
            Markup.button.callback('الإسراء', 'Ali_Jaber_017'),
            Markup.button.callback('الكهف', 'Ali_Jaber_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Ali_Jaber_019'),
            Markup.button.callback('طه', 'Ali_Jaber_020'),
            Markup.button.callback('الأنبياء', 'Ali_Jaber_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Ali_Jaber_022'),
            Markup.button.callback('المؤمنون', 'Ali_Jaber_023'),
            Markup.button.callback('النور', 'Ali_Jaber_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Ali_Jaber_025'),
            Markup.button.callback('الشعراء', 'Ali_Jaber_026'),
            Markup.button.callback('النمل', 'Ali_Jaber_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Ali_Jaber_028'),
            Markup.button.callback('العنكبوت', 'Ali_Jaber_029'),
            Markup.button.callback('الروم', 'Ali_Jaber_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Ali_Jaber_031'),
            Markup.button.callback('السجدة', 'Ali_Jaber_032'),
            Markup.button.callback('الأحزاب', 'Ali_Jaber_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Ali_Jaber_034'),
            Markup.button.callback('فاطر', 'Ali_Jaber_035'),
            Markup.button.callback('يس', 'Ali_Jaber_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Ali_Jaber_037'),
            Markup.button.callback('سورة ص', 'Ali_Jaber_038'),
            Markup.button.callback('الزمر', 'Ali_Jaber_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Ali_Jaber_040'),
            Markup.button.callback('فصلت', 'Ali_Jaber_041'),
            Markup.button.callback('الشورى', 'Ali_Jaber_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Ali_Jaber_043'),
            Markup.button.callback('الدخان', 'Ali_Jaber_044'),
            Markup.button.callback('الجاثية', 'Ali_Jaber_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Ali_Jaber_046'),
            Markup.button.callback('محمد', 'Ali_Jaber_047'),
            Markup.button.callback('الفتح', 'Ali_Jaber_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Ali_Jaber_049'),
            Markup.button.callback('سورة ق', 'Ali_Jaber_050'),
            Markup.button.callback('الذاريات', 'Ali_Jaber_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Ali_Jaber_052'),
            Markup.button.callback('النجم', 'Ali_Jaber_053'),
            Markup.button.callback('القمر', 'Ali_Jaber_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Ali_Jaber_055'),
            Markup.button.callback('الواقعة', 'Ali_Jaber_056'),
            Markup.button.callback('الحديد', 'Ali_Jaber_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Ali_Jaber_058'),
            Markup.button.callback('الحشر', 'Ali_Jaber_059'),
            Markup.button.callback('الممتحنة', 'Ali_Jaber_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Ali_Jaber_061'),
            Markup.button.callback('الجمعة', 'Ali_Jaber_062'),
            Markup.button.callback('المنافقون', 'Ali_Jaber_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Ali_Jaber_064'),
            Markup.button.callback('الطلاق', 'Ali_Jaber_065'),
            Markup.button.callback('التحريم', 'Ali_Jaber_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Ali_Jaber_067'),
            Markup.button.callback('القلم', 'Ali_Jaber_068'),
            Markup.button.callback('الحاقة', 'Ali_Jaber_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Ali_Jaber_070'),
            Markup.button.callback('نوح', 'Ali_Jaber_071'),
            Markup.button.callback('الجن', 'Ali_Jaber_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Ali_Jaber_073'),
            Markup.button.callback('المدثر', 'Ali_Jaber_074'),
            Markup.button.callback('القيامة', 'Ali_Jaber_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Ali_Jaber_076'),
            Markup.button.callback('المرسلات', 'Ali_Jaber_077'),
            Markup.button.callback('النبأ', 'Ali_Jaber_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Ali_Jaber_079'),
            Markup.button.callback('عبس', 'Ali_Jaber_080'),
            Markup.button.callback('التكوير', 'Ali_Jaber_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Ali_Jaber_082'),
            Markup.button.callback('المطففين', 'Ali_Jaber_083'),
            Markup.button.callback('الانشقاق', 'Ali_Jaber_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Ali_Jaber_085'),
            Markup.button.callback('الطارق', 'Ali_Jaber_086'),
            Markup.button.callback('الأعلى', 'Ali_Jaber_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Ali_Jaber_088'),
            Markup.button.callback('الفجر', 'Ali_Jaber_089'),
            Markup.button.callback('البلد', 'Ali_Jaber_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Ali_Jaber_091'),
            Markup.button.callback('الليل', 'Ali_Jaber_092'),
            Markup.button.callback('الضحى', 'Ali_Jaber_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Ali_Jaber_094'),
            Markup.button.callback('التين', 'Ali_Jaber_095'),
            Markup.button.callback('العلق', 'Ali_Jaber_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Ali_Jaber_097'),
            Markup.button.callback('البينة', 'Ali_Jaber_098'),
            Markup.button.callback('الزلزلة', 'Ali_Jaber_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Ali_Jaber_100'),
            Markup.button.callback('القارعة', 'Ali_Jaber_101'),
            Markup.button.callback('التكاثر', 'Ali_Jaber_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Ali_Jaber_103'),
            Markup.button.callback('الهمزة', 'Ali_Jaber_104'),
            Markup.button.callback('الفيل', 'Ali_Jaber_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Ali_Jaber_106'),
            Markup.button.callback('الماعون', 'Ali_Jaber_107'),
            Markup.button.callback('الكوثر', 'Ali_Jaber_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ali_Jaber_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ali_Jaber_Message = 'القارئ علي جابر 🔊 \n\n'
        Ali_Jaber_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ali_Jaber_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Ali_Jaber_109'),
            Markup.button.callback('القارعة', 'Ali_Jaber_110'),
            Markup.button.callback('التكاثر', 'Ali_Jaber_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Ali_Jaber_112'),
            Markup.button.callback('الهمزة', 'Ali_Jaber_113'),
            Markup.button.callback('الفيل', 'Ali_Jaber_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Ali_Jaber_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('Ali_Jaber_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/001.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_002', async (ctx) => {

        let caption = "سورة: البقرة 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/002.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_003', async (ctx) => {

        let caption = "سورة: آل عمران 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/003.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_004', async (ctx) => {

        let caption = "سورة: النساء 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/004.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_005', async (ctx) => {

        let caption = "سورة: المائدة 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/005.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_006', async (ctx) => {

        let caption = "سورة: الأنعام 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/006.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_007', async (ctx) => {

        let caption = "سورة: الأعراف 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/007.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_008', async (ctx) => {

        let caption = "سورة: الأنفال 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/008.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_009', async (ctx) => {

        let caption = "سورة: التوبة 📖\nالقارئ: علي جابر 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "https://server11.mp3quran.net/a_jbr/009.mp3"
        ctx.reply(caption)

    });

    bot.action('Ali_Jaber_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/010.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/011.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/012.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/013.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/014.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/015.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/016.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/017.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/018.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/019.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/020.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/021.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/022.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/023.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/024.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/025.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/026.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/027.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/028.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/029.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/030.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/031.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/032.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/033.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/034.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/035.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/036.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/037.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/038.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/039.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/040.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/041.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/042.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/043.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/044.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/045.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/046.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/047.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/048.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/049.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/050.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/051.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/052.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/053.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/054.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/055.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/056.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/057.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/058.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/059.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/060.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/061.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/062.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/063.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/064.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/065.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/066.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/067.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/068.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/069.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/070.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/071.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/072.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/073.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/074.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/075.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/076.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/077.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/078.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/079.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/080.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/081.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/082.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/083.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/084.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/085.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/086.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/087.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/088.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/089.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/090.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/091.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/092.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/093.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/094.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/095.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/096.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/097.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/098.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/099.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/100.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/101.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/102.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/103.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/104.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/105.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/106.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/107.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/108.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/109.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/110.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/111.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/112.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/113.mp3' }, { caption: caption })

    });

    bot.action('Ali_Jaber_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: علي جابر 🔊"
        ctx.replyWithAudio({ url: 'https://server11.mp3quran.net/a_jbr/114.mp3' }, { caption: caption })

    });


}