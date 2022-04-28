const path = require('path');
const fs = require('fs-extra');

module.exports = async function Ahmed_Al_Suwailem(bot, Path_appDate, Markup) {

    bot.action('Ahmed_Al_Suwailem', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Ahmed_Al_Suwailem_001'),
            Markup.button.callback('البقرة', 'Ahmed_Al_Suwailem_002'),
            Markup.button.callback('آل عمران', 'Ahmed_Al_Suwailem_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Ahmed_Al_Suwailem_004'),
            Markup.button.callback('المائدة', 'Ahmed_Al_Suwailem_005'),
            Markup.button.callback('الأنعام', 'Ahmed_Al_Suwailem_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Ahmed_Al_Suwailem_007'),
            Markup.button.callback('الأنفال', 'Ahmed_Al_Suwailem_008'),
            Markup.button.callback('التوبة', 'Ahmed_Al_Suwailem_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem')];
        let but_2 = [
            Markup.button.callback('يونس', 'Ahmed_Al_Suwailem_010'),
            Markup.button.callback('هود', 'Ahmed_Al_Suwailem_011'),
            Markup.button.callback('يوسف', 'Ahmed_Al_Suwailem_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Ahmed_Al_Suwailem_013'),
            Markup.button.callback('ابراهيم', 'Ahmed_Al_Suwailem_014'),
            Markup.button.callback('الحجر', 'Ahmed_Al_Suwailem_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Ahmed_Al_Suwailem_016'),
            Markup.button.callback('الإسراء', 'Ahmed_Al_Suwailem_017'),
            Markup.button.callback('الكهف', 'Ahmed_Al_Suwailem_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Ahmed_Al_Suwailem_019'),
            Markup.button.callback('طه', 'Ahmed_Al_Suwailem_020'),
            Markup.button.callback('الأنبياء', 'Ahmed_Al_Suwailem_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Ahmed_Al_Suwailem_022'),
            Markup.button.callback('المؤمنون', 'Ahmed_Al_Suwailem_023'),
            Markup.button.callback('النور', 'Ahmed_Al_Suwailem_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Ahmed_Al_Suwailem_025'),
            Markup.button.callback('الشعراء', 'Ahmed_Al_Suwailem_026'),
            Markup.button.callback('النمل', 'Ahmed_Al_Suwailem_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Ahmed_Al_Suwailem_028'),
            Markup.button.callback('العنكبوت', 'Ahmed_Al_Suwailem_029'),
            Markup.button.callback('الروم', 'Ahmed_Al_Suwailem_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Ahmed_Al_Suwailem_031'),
            Markup.button.callback('السجدة', 'Ahmed_Al_Suwailem_032'),
            Markup.button.callback('الأحزاب', 'Ahmed_Al_Suwailem_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Ahmed_Al_Suwailem_034'),
            Markup.button.callback('فاطر', 'Ahmed_Al_Suwailem_035'),
            Markup.button.callback('يس', 'Ahmed_Al_Suwailem_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Ahmed_Al_Suwailem_037'),
            Markup.button.callback('سورة ص', 'Ahmed_Al_Suwailem_038'),
            Markup.button.callback('الزمر', 'Ahmed_Al_Suwailem_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Ahmed_Al_Suwailem_040'),
            Markup.button.callback('فصلت', 'Ahmed_Al_Suwailem_041'),
            Markup.button.callback('الشورى', 'Ahmed_Al_Suwailem_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Ahmed_Al_Suwailem_043'),
            Markup.button.callback('الدخان', 'Ahmed_Al_Suwailem_044'),
            Markup.button.callback('الجاثية', 'Ahmed_Al_Suwailem_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Ahmed_Al_Suwailem_046'),
            Markup.button.callback('محمد', 'Ahmed_Al_Suwailem_047'),
            Markup.button.callback('الفتح', 'Ahmed_Al_Suwailem_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Ahmed_Al_Suwailem_049'),
            Markup.button.callback('سورة ق', 'Ahmed_Al_Suwailem_050'),
            Markup.button.callback('الذاريات', 'Ahmed_Al_Suwailem_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Ahmed_Al_Suwailem_052'),
            Markup.button.callback('النجم', 'Ahmed_Al_Suwailem_053'),
            Markup.button.callback('القمر', 'Ahmed_Al_Suwailem_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Ahmed_Al_Suwailem_055'),
            Markup.button.callback('الواقعة', 'Ahmed_Al_Suwailem_056'),
            Markup.button.callback('الحديد', 'Ahmed_Al_Suwailem_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Ahmed_Al_Suwailem_058'),
            Markup.button.callback('الحشر', 'Ahmed_Al_Suwailem_059'),
            Markup.button.callback('الممتحنة', 'Ahmed_Al_Suwailem_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Ahmed_Al_Suwailem_061'),
            Markup.button.callback('الجمعة', 'Ahmed_Al_Suwailem_062'),
            Markup.button.callback('المنافقون', 'Ahmed_Al_Suwailem_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Ahmed_Al_Suwailem_064'),
            Markup.button.callback('الطلاق', 'Ahmed_Al_Suwailem_065'),
            Markup.button.callback('التحريم', 'Ahmed_Al_Suwailem_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Ahmed_Al_Suwailem_067'),
            Markup.button.callback('القلم', 'Ahmed_Al_Suwailem_068'),
            Markup.button.callback('الحاقة', 'Ahmed_Al_Suwailem_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Ahmed_Al_Suwailem_070'),
            Markup.button.callback('نوح', 'Ahmed_Al_Suwailem_071'),
            Markup.button.callback('الجن', 'Ahmed_Al_Suwailem_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Ahmed_Al_Suwailem_073'),
            Markup.button.callback('المدثر', 'Ahmed_Al_Suwailem_074'),
            Markup.button.callback('القيامة', 'Ahmed_Al_Suwailem_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Ahmed_Al_Suwailem_076'),
            Markup.button.callback('المرسلات', 'Ahmed_Al_Suwailem_077'),
            Markup.button.callback('النبأ', 'Ahmed_Al_Suwailem_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Ahmed_Al_Suwailem_079'),
            Markup.button.callback('عبس', 'Ahmed_Al_Suwailem_080'),
            Markup.button.callback('التكوير', 'Ahmed_Al_Suwailem_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Ahmed_Al_Suwailem_082'),
            Markup.button.callback('المطففين', 'Ahmed_Al_Suwailem_083'),
            Markup.button.callback('الانشقاق', 'Ahmed_Al_Suwailem_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Ahmed_Al_Suwailem_085'),
            Markup.button.callback('الطارق', 'Ahmed_Al_Suwailem_086'),
            Markup.button.callback('الأعلى', 'Ahmed_Al_Suwailem_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Ahmed_Al_Suwailem_088'),
            Markup.button.callback('الفجر', 'Ahmed_Al_Suwailem_089'),
            Markup.button.callback('البلد', 'Ahmed_Al_Suwailem_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Ahmed_Al_Suwailem_091'),
            Markup.button.callback('الليل', 'Ahmed_Al_Suwailem_092'),
            Markup.button.callback('الضحى', 'Ahmed_Al_Suwailem_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Ahmed_Al_Suwailem_094'),
            Markup.button.callback('التين', 'Ahmed_Al_Suwailem_095'),
            Markup.button.callback('العلق', 'Ahmed_Al_Suwailem_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Ahmed_Al_Suwailem_097'),
            Markup.button.callback('البينة', 'Ahmed_Al_Suwailem_098'),
            Markup.button.callback('الزلزلة', 'Ahmed_Al_Suwailem_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Ahmed_Al_Suwailem_100'),
            Markup.button.callback('القارعة', 'Ahmed_Al_Suwailem_101'),
            Markup.button.callback('التكاثر', 'Ahmed_Al_Suwailem_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Ahmed_Al_Suwailem_103'),
            Markup.button.callback('الهمزة', 'Ahmed_Al_Suwailem_104'),
            Markup.button.callback('الفيل', 'Ahmed_Al_Suwailem_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Ahmed_Al_Suwailem_106'),
            Markup.button.callback('الماعون', 'Ahmed_Al_Suwailem_107'),
            Markup.button.callback('الكوثر', 'Ahmed_Al_Suwailem_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Ahmed_Al_Suwailem_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Ahmed_Al_Suwailem_Message = 'القارئ احمد السويلم 🔊 \n\n'
        Ahmed_Al_Suwailem_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Ahmed_Al_Suwailem_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Ahmed_Al_Suwailem_109'),
            Markup.button.callback('القارعة', 'Ahmed_Al_Suwailem_110'),
            Markup.button.callback('التكاثر', 'Ahmed_Al_Suwailem_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Ahmed_Al_Suwailem_112'),
            Markup.button.callback('الهمزة', 'Ahmed_Al_Suwailem_113'),
            Markup.button.callback('الفيل', 'Ahmed_Al_Suwailem_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Ahmed_Al_Suwailem_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Ahmed_Al_Suwailem_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/001.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_002', async (ctx) => {

        let caption = "سورة: البقرة 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/002.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_003', async (ctx) => {

        let caption = "سورة: آل عمران 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/003.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_004', async (ctx) => {

        let caption = "سورة: النساء 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/004.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_005', async (ctx) => {

        let caption = "سورة: المائدة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/005.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_006', async (ctx) => {

        let caption = "سورة: الأنعام 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/006.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_007', async (ctx) => {

        let caption = "سورة: الأعراف 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/007.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_008', async (ctx) => {

        let caption = "سورة: الأنفال 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/008.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_009', async (ctx) => {

        let caption = "سورة: التوبة 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/009.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/010.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/011.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/012.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/013.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/014.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/015.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/016.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/017.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/018.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/019.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/020.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/021.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/022.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/023.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/024.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/025.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/026.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/027.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: احمد السويلم 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/028.mp3"
        ctx.reply(caption)

    });

    bot.action('Ahmed_Al_Suwailem_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/029.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/030.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/031.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/032.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/033.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/034.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/035.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/036.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/037.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/038.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/039.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/040.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/041.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/042.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/043.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/044.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/045.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/046.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/047.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/048.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/049.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/050.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/051.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/052.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/053.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/054.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/055.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/056.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/057.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/058.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/059.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/060.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/061.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/062.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/063.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/064.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/065.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/066.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/067.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/068.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/069.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/070.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/071.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/072.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/073.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/074.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/075.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/076.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/077.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/078.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/079.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/080.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/081.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/082.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/083.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/084.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/085.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/086.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/087.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/088.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/089.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/090.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/091.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/092.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/093.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/094.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/095.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/096.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/097.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/098.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/099.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/100.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/101.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/102.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/103.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/104.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/105.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/106.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/107.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/108.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/109.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/110.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/111.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/112.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/113.mp3' }, { caption: caption })

    });

    bot.action('Ahmed_Al_Suwailem_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: احمد السويلم 🔊"
        ctx.replyWithAudio({ url: 'http://server14.mp3quran.net/swlim/Rewayat-Hafs-A-n-Assem/114.mp3' }, { caption: caption })

    });


}