const path = require('path');
const fs = require('fs-extra');

module.exports = async function Mohamed_Ayoub(bot, Path_appDate, Markup) {

    bot.action('Mohamed_Ayoub', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'quran')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'Mohamed_Ayoub_001'),
            Markup.button.callback('البقرة', 'Mohamed_Ayoub_002'),
            Markup.button.callback('آل عمران', 'Mohamed_Ayoub_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'Mohamed_Ayoub_004'),
            Markup.button.callback('المائدة', 'Mohamed_Ayoub_005'),
            Markup.button.callback('الأنعام', 'Mohamed_Ayoub_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'Mohamed_Ayoub_007'),
            Markup.button.callback('الأنفال', 'Mohamed_Ayoub_008'),
            Markup.button.callback('التوبة', 'Mohamed_Ayoub_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub')];
        let but_2 = [
            Markup.button.callback('يونس', 'Mohamed_Ayoub_010'),
            Markup.button.callback('هود', 'Mohamed_Ayoub_011'),
            Markup.button.callback('يوسف', 'Mohamed_Ayoub_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'Mohamed_Ayoub_013'),
            Markup.button.callback('ابراهيم', 'Mohamed_Ayoub_014'),
            Markup.button.callback('الحجر', 'Mohamed_Ayoub_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'Mohamed_Ayoub_016'),
            Markup.button.callback('الإسراء', 'Mohamed_Ayoub_017'),
            Markup.button.callback('الكهف', 'Mohamed_Ayoub_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'Mohamed_Ayoub_019'),
            Markup.button.callback('طه', 'Mohamed_Ayoub_020'),
            Markup.button.callback('الأنبياء', 'Mohamed_Ayoub_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'Mohamed_Ayoub_022'),
            Markup.button.callback('المؤمنون', 'Mohamed_Ayoub_023'),
            Markup.button.callback('النور', 'Mohamed_Ayoub_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'Mohamed_Ayoub_025'),
            Markup.button.callback('الشعراء', 'Mohamed_Ayoub_026'),
            Markup.button.callback('النمل', 'Mohamed_Ayoub_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'Mohamed_Ayoub_028'),
            Markup.button.callback('العنكبوت', 'Mohamed_Ayoub_029'),
            Markup.button.callback('الروم', 'Mohamed_Ayoub_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'Mohamed_Ayoub_031'),
            Markup.button.callback('السجدة', 'Mohamed_Ayoub_032'),
            Markup.button.callback('الأحزاب', 'Mohamed_Ayoub_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'Mohamed_Ayoub_034'),
            Markup.button.callback('فاطر', 'Mohamed_Ayoub_035'),
            Markup.button.callback('يس', 'Mohamed_Ayoub_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'Mohamed_Ayoub_037'),
            Markup.button.callback('سورة ص', 'Mohamed_Ayoub_038'),
            Markup.button.callback('الزمر', 'Mohamed_Ayoub_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'Mohamed_Ayoub_040'),
            Markup.button.callback('فصلت', 'Mohamed_Ayoub_041'),
            Markup.button.callback('الشورى', 'Mohamed_Ayoub_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'Mohamed_Ayoub_043'),
            Markup.button.callback('الدخان', 'Mohamed_Ayoub_044'),
            Markup.button.callback('الجاثية', 'Mohamed_Ayoub_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'Mohamed_Ayoub_046'),
            Markup.button.callback('محمد', 'Mohamed_Ayoub_047'),
            Markup.button.callback('الفتح', 'Mohamed_Ayoub_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'Mohamed_Ayoub_049'),
            Markup.button.callback('سورة ق', 'Mohamed_Ayoub_050'),
            Markup.button.callback('الذاريات', 'Mohamed_Ayoub_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'Mohamed_Ayoub_052'),
            Markup.button.callback('النجم', 'Mohamed_Ayoub_053'),
            Markup.button.callback('القمر', 'Mohamed_Ayoub_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'Mohamed_Ayoub_055'),
            Markup.button.callback('الواقعة', 'Mohamed_Ayoub_056'),
            Markup.button.callback('الحديد', 'Mohamed_Ayoub_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'Mohamed_Ayoub_058'),
            Markup.button.callback('الحشر', 'Mohamed_Ayoub_059'),
            Markup.button.callback('الممتحنة', 'Mohamed_Ayoub_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'Mohamed_Ayoub_061'),
            Markup.button.callback('الجمعة', 'Mohamed_Ayoub_062'),
            Markup.button.callback('المنافقون', 'Mohamed_Ayoub_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'Mohamed_Ayoub_064'),
            Markup.button.callback('الطلاق', 'Mohamed_Ayoub_065'),
            Markup.button.callback('التحريم', 'Mohamed_Ayoub_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'Mohamed_Ayoub_067'),
            Markup.button.callback('القلم', 'Mohamed_Ayoub_068'),
            Markup.button.callback('الحاقة', 'Mohamed_Ayoub_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'Mohamed_Ayoub_070'),
            Markup.button.callback('نوح', 'Mohamed_Ayoub_071'),
            Markup.button.callback('الجن', 'Mohamed_Ayoub_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'Mohamed_Ayoub_073'),
            Markup.button.callback('المدثر', 'Mohamed_Ayoub_074'),
            Markup.button.callback('القيامة', 'Mohamed_Ayoub_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'Mohamed_Ayoub_076'),
            Markup.button.callback('المرسلات', 'Mohamed_Ayoub_077'),
            Markup.button.callback('النبأ', 'Mohamed_Ayoub_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'Mohamed_Ayoub_079'),
            Markup.button.callback('عبس', 'Mohamed_Ayoub_080'),
            Markup.button.callback('التكوير', 'Mohamed_Ayoub_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'Mohamed_Ayoub_082'),
            Markup.button.callback('المطففين', 'Mohamed_Ayoub_083'),
            Markup.button.callback('الانشقاق', 'Mohamed_Ayoub_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'Mohamed_Ayoub_085'),
            Markup.button.callback('الطارق', 'Mohamed_Ayoub_086'),
            Markup.button.callback('الأعلى', 'Mohamed_Ayoub_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'Mohamed_Ayoub_088'),
            Markup.button.callback('الفجر', 'Mohamed_Ayoub_089'),
            Markup.button.callback('البلد', 'Mohamed_Ayoub_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'Mohamed_Ayoub_091'),
            Markup.button.callback('الليل', 'Mohamed_Ayoub_092'),
            Markup.button.callback('الضحى', 'Mohamed_Ayoub_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'Mohamed_Ayoub_094'),
            Markup.button.callback('التين', 'Mohamed_Ayoub_095'),
            Markup.button.callback('العلق', 'Mohamed_Ayoub_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'Mohamed_Ayoub_097'),
            Markup.button.callback('البينة', 'Mohamed_Ayoub_098'),
            Markup.button.callback('الزلزلة', 'Mohamed_Ayoub_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Mohamed_Ayoub_100'),
            Markup.button.callback('القارعة', 'Mohamed_Ayoub_101'),
            Markup.button.callback('التكاثر', 'Mohamed_Ayoub_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Mohamed_Ayoub_103'),
            Markup.button.callback('الهمزة', 'Mohamed_Ayoub_104'),
            Markup.button.callback('الفيل', 'Mohamed_Ayoub_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'Mohamed_Ayoub_106'),
            Markup.button.callback('الماعون', 'Mohamed_Ayoub_107'),
            Markup.button.callback('الكوثر', 'Mohamed_Ayoub_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'Mohamed_Ayoub_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let Mohamed_Ayoub_Message = 'القارئ محمد أيوب 🔊 \n\n'
        Mohamed_Ayoub_Message += 'قم بالضغط على اسم السورة الإرسالها'
        let but_1 = [Markup.button.callback('⬆', 'Mohamed_Ayoub_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'Mohamed_Ayoub_109'),
            Markup.button.callback('القارعة', 'Mohamed_Ayoub_110'),
            Markup.button.callback('التكاثر', 'Mohamed_Ayoub_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'Mohamed_Ayoub_112'),
            Markup.button.callback('الهمزة', 'Mohamed_Ayoub_113'),
            Markup.button.callback('الفيل', 'Mohamed_Ayoub_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'quran')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(Mohamed_Ayoub_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam-bot/Users.json'), json);
        

    });

    bot.action('Mohamed_Ayoub_001', async (ctx) => {

        let caption = "سورة: الفاتحة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/001.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_002', async (ctx) => {
    
        let caption = "سورة: البقرة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/002.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_003', async (ctx) => {
    
        let caption = "سورة: آل عمران 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/003.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_004', async (ctx) => {
    
        let caption = "سورة: النساء 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/004.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_005', async (ctx) => {
    
        let caption = "سورة: المائدة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/005.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_006', async (ctx) => {
    
        let caption = "سورة: الأنعام 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/006.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_007', async (ctx) => {
    
        let caption = "سورة: الأعراف 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/007.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_008', async (ctx) => {
    
        let caption = "سورة: الأنفال 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/008.mp3' }, { caption: caption })
    
    });
    
    bot.action('Mohamed_Ayoub_009', async (ctx) => {
    
        let caption = "سورة: التوبة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/009.mp3' }, { caption: caption })
    
    });

    bot.action('Mohamed_Ayoub_010', async (ctx) => {

        let caption = "سورة: يونس 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/010.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_011', async (ctx) => {

        let caption = "سورة: هود 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/011.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_012', async (ctx) => {

        let caption = "سورة: يوسف 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/012.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_013', async (ctx) => {

        let caption = "سورة: الرعد 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/013.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_014', async (ctx) => {

        let caption = "سورة: إبراهيم 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/014.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_015', async (ctx) => {

        let caption = "سورة: الحجر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/015.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_016', async (ctx) => {

        let caption = "سورة: النحل 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/016.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_017', async (ctx) => {

        let caption = "سورة: الإسراء 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/017.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_018', async (ctx) => {

        let caption = "سورة: الكهف 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/018.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_019', async (ctx) => {

        let caption = "سورة: مريم 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/019.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_020', async (ctx) => {

        let caption = "سورة: طه 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/020.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_021', async (ctx) => {

        let caption = "سورة: الأنبياء 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/021.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_022', async (ctx) => {

        let caption = "سورة: الحج 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/022.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_023', async (ctx) => {

        let caption = "سورة: المؤمنون 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/023.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_024', async (ctx) => {

        let caption = "سورة: النور 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/024.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_025', async (ctx) => {

        let caption = "سورة: الفرقان 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/025.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_026', async (ctx) => {

        let caption = "سورة: الشعراء 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/026.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_027', async (ctx) => {

        let caption = "سورة: النمل 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/027.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_028', async (ctx) => {

        let caption = "سورة: القصص 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/028.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_029', async (ctx) => {

        let caption = "سورة: العنكبوت 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/029.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_030', async (ctx) => {

        let caption = "سورة: الروم 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/030.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_031', async (ctx) => {

        let caption = "سورة: لقمان 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/031.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_032', async (ctx) => {

        let caption = "سورة: السجدة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/032.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_033', async (ctx) => {

        let caption = "سورة: الأحزاب 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/033.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_034', async (ctx) => {

        let caption = "سورة: سبأ 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/034.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_035', async (ctx) => {

        let caption = "سورة: فاطر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/035.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_036', async (ctx) => {

        let caption = "سورة: يس 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/036.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_037', async (ctx) => {

        let caption = "سورة: الصافات 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/037.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_038', async (ctx) => {

        let caption = "سورة: ص 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/038.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_039', async (ctx) => {

        let caption = "سورة: الزمر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/039.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_040', async (ctx) => {

        let caption = "سورة: غافر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/040.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_041', async (ctx) => {

        let caption = "سورة: فصلت 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/041.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_042', async (ctx) => {

        let caption = "سورة: الشورى 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/042.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_043', async (ctx) => {

        let caption = "سورة: الزخرف 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/043.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_044', async (ctx) => {

        let caption = "سورة: الدخان 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/044.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_045', async (ctx) => {

        let caption = "سورة: الجاثية 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/045.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_046', async (ctx) => {

        let caption = "سورة: الأحقاف 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/046.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_047', async (ctx) => {

        let caption = "سورة: محمد 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/047.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_048', async (ctx) => {

        let caption = "سورة: الفتح 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/048.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_049', async (ctx) => {

        let caption = "سورة: الحجرات 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/049.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_050', async (ctx) => {

        let caption = "سورة: ق 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/050.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_051', async (ctx) => {

        let caption = "سورة: الذاريات 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/051.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_052', async (ctx) => {

        let caption = "سورة: الطور 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/052.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_053', async (ctx) => {

        let caption = "سورة: النجم 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/053.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_054', async (ctx) => {

        let caption = "سورة: القمر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/054.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_055', async (ctx) => {

        let caption = "سورة: الرحمن 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/055.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_056', async (ctx) => {

        let caption = "سورة: الواقعة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/056.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_057', async (ctx) => {

        let caption = "سورة: الحديد 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/057.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_058', async (ctx) => {

        let caption = "سورة: المجادلة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/058.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_059', async (ctx) => {

        let caption = "سورة: الحشر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/059.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_060', async (ctx) => {

        let caption = "سورة: الممتحنة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/060.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_061', async (ctx) => {

        let caption = "سورة: الصف 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/061.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_062', async (ctx) => {

        let caption = "سورة: الجمعة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/062.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_063', async (ctx) => {

        let caption = "سورة: المنافقون 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/063.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_064', async (ctx) => {

        let caption = "سورة: التغابن 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/064.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_065', async (ctx) => {

        let caption = "سورة: الطلاق 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/065.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_066', async (ctx) => {

        let caption = "سورة: التحريم 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/066.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_067', async (ctx) => {

        let caption = "سورة: الملك 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/067.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_068', async (ctx) => {

        let caption = "سورة: القلم 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/068.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_069', async (ctx) => {

        let caption = "سورة: الحاقة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/069.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_070', async (ctx) => {

        let caption = "سورة: المعارج 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/070.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_071', async (ctx) => {

        let caption = "سورة: نوح 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/071.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_072', async (ctx) => {

        let caption = "سورة: الجن 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/072.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_073', async (ctx) => {

        let caption = "سورة: المزمل 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/073.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_074', async (ctx) => {

        let caption = "سورة: المدثر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/074.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_075', async (ctx) => {

        let caption = "سورة: القيامة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/075.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_076', async (ctx) => {

        let caption = "سورة: الإنسان 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/076.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_077', async (ctx) => {

        let caption = "سورة: المرسلات 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/077.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_078', async (ctx) => {

        let caption = "سورة: النبأ 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/078.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_079', async (ctx) => {

        let caption = "سورة: النازعات 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/079.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_080', async (ctx) => {

        let caption = "سورة: عبس 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/080.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_081', async (ctx) => {

        let caption = "سورة: التكوير 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/081.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_082', async (ctx) => {

        let caption = "سورة: الانفطار 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/082.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_083', async (ctx) => {

        let caption = "سورة: المطففين 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/083.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_084', async (ctx) => {

        let caption = "سورة: الانشقاق 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/084.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_085', async (ctx) => {

        let caption = "سورة: البروج 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/085.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_086', async (ctx) => {

        let caption = "سورة: الطارق 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/086.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_087', async (ctx) => {

        let caption = "سورة: الأعلى 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/087.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_088', async (ctx) => {

        let caption = "سورة: الغاشية 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/088.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_089', async (ctx) => {

        let caption = "سورة: الفجر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/089.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_090', async (ctx) => {

        let caption = "سورة: البلد 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/090.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_091', async (ctx) => {

        let caption = "سورة: الشمس 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/091.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_092', async (ctx) => {

        let caption = "سورة: الليل 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/092.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_093', async (ctx) => {

        let caption = "سورة: الضحى 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/093.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_094', async (ctx) => {

        let caption = "سورة: الشرح 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/094.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_095', async (ctx) => {

        let caption = "سورة: التين 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/095.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_096', async (ctx) => {

        let caption = "سورة: العلق 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/096.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_097', async (ctx) => {

        let caption = "سورة: القدر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/097.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_098', async (ctx) => {

        let caption = "سورة: البينة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/098.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_099', async (ctx) => {

        let caption = "سورة: الزلزلة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/099.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_100', async (ctx) => {

        let caption = "سورة: العاديات 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/100.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_101', async (ctx) => {

        let caption = "سورة: القارعة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/101.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_102', async (ctx) => {

        let caption = "سورة: التكاثر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/102.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_103', async (ctx) => {

        let caption = "سورة: العصر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/103.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_104', async (ctx) => {

        let caption = "سورة: الهمزة 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/104.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_105', async (ctx) => {

        let caption = "سورة: الفيل 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/105.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_106', async (ctx) => {

        let caption = "سورة: قريش 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/106.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_107', async (ctx) => {

        let caption = "سورة: الماعون 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/107.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_108', async (ctx) => {

        let caption = "سورة: الكوثر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/108.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_109', async (ctx) => {

        let caption = "سورة: الكافرون 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/109.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_110', async (ctx) => {

        let caption = "سورة: النصر 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/110.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_111', async (ctx) => {

        let caption = "سورة: المسد 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/111.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_112', async (ctx) => {

        let caption = "سورة: الإخلاص 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/112.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_113', async (ctx) => {

        let caption = "سورة: الفلق 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/113.mp3' }, { caption: caption })

    });

    bot.action('Mohamed_Ayoub_114', async (ctx) => {

        let caption = "سورة: الناس 📖\nالقارئ: محمد أيوب 🔊"
        ctx.replyWithAudio({ url: 'http://server8.mp3quran.net/ayyub/114.mp3' }, { caption: caption })

    });


}