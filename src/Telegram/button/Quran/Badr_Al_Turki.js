const path = require('path');
const fs = require('fs-extra');

module.exports = async function Badr_Al_Turki(bot, Path_appDate, Markup) {

    bot.action('Badr_Al_Turki', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Badr_Al_Turki_001'),
            Markup.button.callback('البقرة', 'Badr_Al_Turki_002'),
            Markup.button.callback('آل عمران', 'Badr_Al_Turki_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Badr_Al_Turki_004'),
            Markup.button.callback('المائدة', 'Badr_Al_Turki_005'),
            Markup.button.callback('الأنعام', 'Badr_Al_Turki_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Badr_Al_Turki_007'),
            Markup.button.callback('الأنفال', 'Badr_Al_Turki_008'),
            Markup.button.callback('التوبة', 'Badr_Al_Turki_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki')];
        let but_2 = [
            Markup.button.callback('يونس', 'Badr_Al_Turki_010'),
            Markup.button.callback('هود', 'Badr_Al_Turki_011'),
            Markup.button.callback('يوسف', 'Badr_Al_Turki_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Badr_Al_Turki_013'),
            Markup.button.callback('ابراهيم', 'Badr_Al_Turki_014'),
            Markup.button.callback('الحجر', 'Badr_Al_Turki_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Badr_Al_Turki_016'),
            Markup.button.callback('الإسراء', 'Badr_Al_Turki_017'),
            Markup.button.callback('الكهف', 'Badr_Al_Turki_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Badr_Al_Turki_019'),
            Markup.button.callback('طه', 'Badr_Al_Turki_020'),
            Markup.button.callback('الأنبياء', 'Badr_Al_Turki_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Badr_Al_Turki_022'),
            Markup.button.callback('المؤمنون', 'Badr_Al_Turki_023'),
            Markup.button.callback('النور', 'Badr_Al_Turki_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Badr_Al_Turki_025'),
            Markup.button.callback('الشعراء', 'Badr_Al_Turki_026'),
            Markup.button.callback('النمل', 'Badr_Al_Turki_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Badr_Al_Turki_028'),
            Markup.button.callback('العنكبوت', 'Badr_Al_Turki_029'),
            Markup.button.callback('الروم', 'Badr_Al_Turki_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Badr_Al_Turki_031'),
            Markup.button.callback('السجدة', 'Badr_Al_Turki_032'),
            Markup.button.callback('الأحزاب', 'Badr_Al_Turki_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Badr_Al_Turki_034'),
            Markup.button.callback('فاطر', 'Badr_Al_Turki_035'),
            Markup.button.callback('يس', 'Badr_Al_Turki_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Badr_Al_Turki_037'),
            Markup.button.callback('سورة ص', 'Badr_Al_Turki_038'),
            Markup.button.callback('الزمر', 'Badr_Al_Turki_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Badr_Al_Turki_040'),
            Markup.button.callback('فصلت', 'Badr_Al_Turki_041'),
            Markup.button.callback('الشورى', 'Badr_Al_Turki_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Badr_Al_Turki_043'),
            Markup.button.callback('الدخان', 'Badr_Al_Turki_044'),
            Markup.button.callback('الجاثية', 'Badr_Al_Turki_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Badr_Al_Turki_046'),
            Markup.button.callback('محمد', 'Badr_Al_Turki_047'),
            Markup.button.callback('الفتح', 'Badr_Al_Turki_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Badr_Al_Turki_049'),
            Markup.button.callback('سورة ق', 'Badr_Al_Turki_050'),
            Markup.button.callback('الذاريات', 'Badr_Al_Turki_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Badr_Al_Turki_052'),
            Markup.button.callback('النجم', 'Badr_Al_Turki_053'),
            Markup.button.callback('القمر', 'Badr_Al_Turki_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Badr_Al_Turki_055'),
            Markup.button.callback('الواقعة', 'Badr_Al_Turki_056'),
            Markup.button.callback('الحديد', 'Badr_Al_Turki_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Badr_Al_Turki_058'),
            Markup.button.callback('الحشر', 'Badr_Al_Turki_059'),
            Markup.button.callback('الممتحنة', 'Badr_Al_Turki_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Badr_Al_Turki_061'),
            Markup.button.callback('الجمعة', 'Badr_Al_Turki_062'),
            Markup.button.callback('المنافقون', 'Badr_Al_Turki_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Badr_Al_Turki_064'),
            Markup.button.callback('الطلاق', 'Badr_Al_Turki_065'),
            Markup.button.callback('التحريم', 'Badr_Al_Turki_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Badr_Al_Turki_067'),
            Markup.button.callback('القلم', 'Badr_Al_Turki_068'),
            Markup.button.callback('الحاقة', 'Badr_Al_Turki_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Badr_Al_Turki_070'),
            Markup.button.callback('نوح', 'Badr_Al_Turki_071'),
            Markup.button.callback('الجن', 'Badr_Al_Turki_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Badr_Al_Turki_073'),
            Markup.button.callback('المدثر', 'Badr_Al_Turki_074'),
            Markup.button.callback('القيامة', 'Badr_Al_Turki_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Badr_Al_Turki_076'),
            Markup.button.callback('المرسلات', 'Badr_Al_Turki_077'),
            Markup.button.callback('النبأ', 'Badr_Al_Turki_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Badr_Al_Turki_079'),
            Markup.button.callback('عبس', 'Badr_Al_Turki_080'),
            Markup.button.callback('التكوير', 'Badr_Al_Turki_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Badr_Al_Turki_082'),
            Markup.button.callback('المطففين', 'Badr_Al_Turki_083'),
            Markup.button.callback('الانشقاق', 'Badr_Al_Turki_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Badr_Al_Turki_085'),
            Markup.button.callback('الطارق', 'Badr_Al_Turki_086'),
            Markup.button.callback('الأعلى', 'Badr_Al_Turki_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Badr_Al_Turki_088'),
            Markup.button.callback('الفجر', 'Badr_Al_Turki_089'),
            Markup.button.callback('البلد', 'Badr_Al_Turki_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Badr_Al_Turki_091'),
            Markup.button.callback('الليل', 'Badr_Al_Turki_092'),
            Markup.button.callback('الضحى', 'Badr_Al_Turki_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Badr_Al_Turki_094'),
            Markup.button.callback('التين', 'Badr_Al_Turki_095'),
            Markup.button.callback('العلق', 'Badr_Al_Turki_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Badr_Al_Turki_097'),
            Markup.button.callback('البينة', 'Badr_Al_Turki_098'),
            Markup.button.callback('الزلزلة', 'Badr_Al_Turki_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Badr_Al_Turki_100'),
            Markup.button.callback('القارعة', 'Badr_Al_Turki_101'),
            Markup.button.callback('التكاثر', 'Badr_Al_Turki_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Badr_Al_Turki_103'),
            Markup.button.callback('الهمزة', 'Badr_Al_Turki_104'),
            Markup.button.callback('الفيل', 'Badr_Al_Turki_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Badr_Al_Turki_106'),
            Markup.button.callback('الماعون', 'Badr_Al_Turki_107'),
            Markup.button.callback('الكوثر', 'Badr_Al_Turki_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Badr_Al_Turki_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Badr_Al_Turki_Message = 'القارئ بدر التركي 🔊 \n\n'
        Badr_Al_Turki_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Badr_Al_Turki_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Badr_Al_Turki_109'),
            Markup.button.callback('القارعة', 'Badr_Al_Turki_110'),
            Markup.button.callback('التكاثر', 'Badr_Al_Turki_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Badr_Al_Turki_112'),
            Markup.button.callback('الهمزة', 'Badr_Al_Turki_113'),
            Markup.button.callback('الفيل', 'Badr_Al_Turki_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Badr_Al_Turki_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Badr_Al_Turki_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/001.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_002', async (ctx) => {

        let caption = "سورة: البقرة 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/002.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_003', async (ctx) => {

        let caption = "سورة: آل عمران 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/003.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_004', async (ctx) => {

        let caption = "سورة: النساء 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/004.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_005', async (ctx) => {

        let caption = "سورة: المائدة 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/005.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_006', async (ctx) => {

        let caption = "سورة: الأنعام 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/006.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_007', async (ctx) => {

        let caption = "سورة: الأعراف 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/007.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_008', async (ctx) => {

        let caption = "سورة: الأنفال 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/008.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_009', async (ctx) => {

        let caption = "سورة: التوبة 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/009.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/010.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: بدر التركي 🔊\n\n"
        caption += "عذراً لايمكن إرسال الملف كصوت لان الحجم اكبر من 50 ميغابايت\n"
        caption += "http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/011.mp3"
        ctx.reply(caption)

    });

    bot.action('Badr_Al_Turki_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/012.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/013.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/014.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/015.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/016.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/017.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/018.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/019.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/020.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/021.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/022.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/023.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/024.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/025.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/026.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/027.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/028.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/029.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/030.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/031.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/032.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/033.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/034.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/035.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/036.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/037.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/038.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/039.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/040.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/041.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/042.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/043.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/044.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/045.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/046.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/047.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/048.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/049.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/050.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/051.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/052.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/053.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/054.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/055.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/056.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/057.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/058.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/059.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/060.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/061.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/062.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/063.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/064.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/065.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/066.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/067.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/068.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/069.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/070.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/071.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/072.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/073.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/074.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/075.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/076.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/077.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/078.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/079.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/080.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/081.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/082.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/083.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/084.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/085.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/086.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/087.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/088.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/089.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/090.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/091.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/092.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/093.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/094.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/095.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/096.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/097.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/098.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/099.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/100.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/101.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/102.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/103.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/104.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/105.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/106.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/107.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/108.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/109.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/110.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/111.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/112.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/113.mp3' }, { caption: caption })

    });

    bot.action('Badr_Al_Turki_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: بدر التركي 🔊"
        ctx.replyWithAudio({ url: 'http://server10.mp3quran.net/bader/Rewayat-Hafs-A-n-Assem/114.mp3' }, { caption: caption })

    });


}