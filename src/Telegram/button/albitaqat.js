const path = require('path');
const fs = require('fs-extra');

module.exports = async function albitaqat(bot, Path_appDate, Markup) {

    bot.action('albitaqat', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'start')];
        let but_2 = [
            Markup.button.callback('الفاتحة', 'albitaqat_001'),
            Markup.button.callback('البقرة', 'albitaqat_002'),
            Markup.button.callback('آل عمران', 'albitaqat_003')
        ];
        let but_3 = [
            Markup.button.callback('النساء', 'albitaqat_004'),
            Markup.button.callback('المائدة', 'albitaqat_005'),
            Markup.button.callback('الأنعام', 'albitaqat_006')
        ];
        let but_4 = [
            Markup.button.callback('الأعراف', 'albitaqat_007'),
            Markup.button.callback('الأنفال', 'albitaqat_008'),
            Markup.button.callback('التوبة', 'albitaqat_009')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_1')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat')];
        let but_2 = [
            Markup.button.callback('يونس', 'albitaqat_010'),
            Markup.button.callback('هود', 'albitaqat_011'),
            Markup.button.callback('يوسف', 'albitaqat_012')
        ];
        let but_3 = [
            Markup.button.callback('الرعد', 'albitaqat_013'),
            Markup.button.callback('ابراهيم', 'albitaqat_014'),
            Markup.button.callback('الحجر', 'albitaqat_015')
        ];
        let but_4 = [
            Markup.button.callback('النحل', 'albitaqat_016'),
            Markup.button.callback('الإسراء', 'albitaqat_017'),
            Markup.button.callback('الكهف', 'albitaqat_018')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_2')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_1')];
        let but_2 = [
            Markup.button.callback('مريم', 'albitaqat_019'),
            Markup.button.callback('طه', 'albitaqat_020'),
            Markup.button.callback('الأنبياء', 'albitaqat_021')
        ];
        let but_3 = [
            Markup.button.callback('الحج', 'albitaqat_022'),
            Markup.button.callback('المؤمنون', 'albitaqat_023'),
            Markup.button.callback('النور', 'albitaqat_024')
        ];
        let but_4 = [
            Markup.button.callback('الفرقان', 'albitaqat_025'),
            Markup.button.callback('الشعراء', 'albitaqat_026'),
            Markup.button.callback('النمل', 'albitaqat_027')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_3')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_2')];
        let but_2 = [
            Markup.button.callback('القصص', 'albitaqat_028'),
            Markup.button.callback('العنكبوت', 'albitaqat_029'),
            Markup.button.callback('الروم', 'albitaqat_030')
        ];
        let but_3 = [
            Markup.button.callback('لقمان', 'albitaqat_031'),
            Markup.button.callback('السجدة', 'albitaqat_032'),
            Markup.button.callback('الأحزاب', 'albitaqat_033')
        ];
        let but_4 = [
            Markup.button.callback('سبأ', 'albitaqat_034'),
            Markup.button.callback('فاطر', 'albitaqat_035'),
            Markup.button.callback('يس', 'albitaqat_036')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_4')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_4', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_3')];
        let but_2 = [
            Markup.button.callback('الصافات', 'albitaqat_037'),
            Markup.button.callback('سورة ص', 'albitaqat_038'),
            Markup.button.callback('الزمر', 'albitaqat_039')
        ];
        let but_3 = [
            Markup.button.callback('غافر', 'albitaqat_040'),
            Markup.button.callback('فصلت', 'albitaqat_041'),
            Markup.button.callback('الشورى', 'albitaqat_042')
        ];
        let but_4 = [
            Markup.button.callback('الزخرف', 'albitaqat_043'),
            Markup.button.callback('الدخان', 'albitaqat_044'),
            Markup.button.callback('الجاثية', 'albitaqat_045')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_5')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_4')];
        let but_2 = [
            Markup.button.callback('الأحقاف', 'albitaqat_046'),
            Markup.button.callback('محمد', 'albitaqat_047'),
            Markup.button.callback('الفتح', 'albitaqat_048')
        ];
        let but_3 = [
            Markup.button.callback('الحجرات', 'albitaqat_049'),
            Markup.button.callback('سورة ق', 'albitaqat_050'),
            Markup.button.callback('الذاريات', 'albitaqat_051')
        ];
        let but_4 = [
            Markup.button.callback('الطور', 'albitaqat_052'),
            Markup.button.callback('النجم', 'albitaqat_053'),
            Markup.button.callback('القمر', 'albitaqat_054')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_6')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_5')];
        let but_2 = [
            Markup.button.callback('الرحمن', 'albitaqat_055'),
            Markup.button.callback('الواقعة', 'albitaqat_056'),
            Markup.button.callback('الحديد', 'albitaqat_057')
        ];
        let but_3 = [
            Markup.button.callback('المجادلة', 'albitaqat_058'),
            Markup.button.callback('الحشر', 'albitaqat_059'),
            Markup.button.callback('الممتحنة', 'albitaqat_060')
        ];
        let but_4 = [
            Markup.button.callback('الصف', 'albitaqat_061'),
            Markup.button.callback('الجمعة', 'albitaqat_062'),
            Markup.button.callback('المنافقون', 'albitaqat_063')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_7')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_6')];
        let but_2 = [
            Markup.button.callback('التغابن', 'albitaqat_064'),
            Markup.button.callback('الطلاق', 'albitaqat_065'),
            Markup.button.callback('التحريم', 'albitaqat_066')
        ];
        let but_3 = [
            Markup.button.callback('الملك', 'albitaqat_067'),
            Markup.button.callback('القلم', 'albitaqat_068'),
            Markup.button.callback('الحاقة', 'albitaqat_069')
        ];
        let but_4 = [
            Markup.button.callback('المعارج', 'albitaqat_070'),
            Markup.button.callback('نوح', 'albitaqat_071'),
            Markup.button.callback('الجن', 'albitaqat_072')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_8')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_7')];
        let but_2 = [
            Markup.button.callback('المزمل', 'albitaqat_073'),
            Markup.button.callback('المدثر', 'albitaqat_074'),
            Markup.button.callback('القيامة', 'albitaqat_075')
        ];
        let but_3 = [
            Markup.button.callback('الإنسان', 'albitaqat_076'),
            Markup.button.callback('المرسلات', 'albitaqat_077'),
            Markup.button.callback('النبأ', 'albitaqat_078')
        ];
        let but_4 = [
            Markup.button.callback('النازعات', 'albitaqat_079'),
            Markup.button.callback('عبس', 'albitaqat_080'),
            Markup.button.callback('التكوير', 'albitaqat_081')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_9')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_8')];
        let but_2 = [
            Markup.button.callback('الإنفطار', 'albitaqat_082'),
            Markup.button.callback('المطففين', 'albitaqat_083'),
            Markup.button.callback('الانشقاق', 'albitaqat_084')
        ];
        let but_3 = [
            Markup.button.callback('البروج', 'albitaqat_085'),
            Markup.button.callback('الطارق', 'albitaqat_086'),
            Markup.button.callback('الأعلى', 'albitaqat_087')
        ];
        let but_4 = [
            Markup.button.callback('الغاشية', 'albitaqat_088'),
            Markup.button.callback('الفجر', 'albitaqat_089'),
            Markup.button.callback('البلد', 'albitaqat_090')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_10')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_9')];
        let but_2 = [
            Markup.button.callback('الشمس', 'albitaqat_091'),
            Markup.button.callback('الليل', 'albitaqat_092'),
            Markup.button.callback('الضحى', 'albitaqat_093')
        ];
        let but_3 = [
            Markup.button.callback('الشرح', 'albitaqat_094'),
            Markup.button.callback('التين', 'albitaqat_095'),
            Markup.button.callback('العلق', 'albitaqat_096')
        ];
        let but_4 = [
            Markup.button.callback('القدر', 'albitaqat_097'),
            Markup.button.callback('البينة', 'albitaqat_098'),
            Markup.button.callback('الزلزلة', 'albitaqat_099')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_11')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_10')];
        let but_2 = [
            Markup.button.callback('العاديات', 'albitaqat_100'),
            Markup.button.callback('القارعة', 'albitaqat_101'),
            Markup.button.callback('التكاثر', 'albitaqat_102')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'albitaqat_103'),
            Markup.button.callback('الهمزة', 'albitaqat_104'),
            Markup.button.callback('الفيل', 'albitaqat_105')
        ];
        let but_4 = [
            Markup.button.callback('قريش', 'albitaqat_106'),
            Markup.button.callback('الماعون', 'albitaqat_107'),
            Markup.button.callback('الكوثر', 'albitaqat_108')
        ];
        let but_5 = [Markup.button.callback('⬇', 'albitaqat_Menu_12')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_Menu_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let albitaqat_Message = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مسموعاً ومرئياً \n\n'
        albitaqat_Message += 'محتوياتُ (البِطَاقَات):\n\n'
        albitaqat_Message += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
        albitaqat_Message += '1- آيَـــــــــــــــاتُـــــها \n'
        albitaqat_Message += '2- مَعــــــنَـى اسْـــــــمِها \n'
        albitaqat_Message += '3- سَبَبُ تَسْمِيَتِها \n'
        albitaqat_Message += '4- أَسْـــــمَاؤُهـا \n'
        albitaqat_Message += '5- مَقْصِدُها العَامُّ \n'
        albitaqat_Message += '6- سَبَبُ نُزُولِهَا \n'
        albitaqat_Message += '7- فَضْــــــلُها \n'
        albitaqat_Message += '8- مُنَــاسَــبَاتُــها \n\n'
        albitaqat_Message += '⚠️ لإرسال البطاقة صورة وصوت قم بالضغط على إسم السورة'
        let but_1 = [Markup.button.callback('⬆', 'albitaqat_Menu_11')];
        let but_2 = [
            Markup.button.callback('العاديات', 'albitaqat_109'),
            Markup.button.callback('القارعة', 'albitaqat_110'),
            Markup.button.callback('التكاثر', 'albitaqat_111')
        ];
        let but_3 = [
            Markup.button.callback('العصر', 'albitaqat_112'),
            Markup.button.callback('الهمزة', 'albitaqat_113'),
            Markup.button.callback('الفيل', 'albitaqat_114')
        ];
        let but_4 = [Markup.button.callback('الرجوع للقائمة السابقة', 'start')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(albitaqat_Message, button);
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('albitaqat_001', async (ctx) => {

        let caption = "بطاقة سورة: الفاتحة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/001.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/001.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_002', async (ctx) => {

        let caption = "بطاقة سورة: البقرة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/002.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/002.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_003', async (ctx) => {

        let caption = "بطاقة سورة: آل عمران 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/003.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/003.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_004', async (ctx) => {

        let caption = "بطاقة سورة: النساء 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/004.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/004.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_005', async (ctx) => {

        let caption = "بطاقة سورة: المائدة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/005.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/005.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_006', async (ctx) => {

        let caption = "بطاقة سورة: الأنعام 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/006.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/006.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_007', async (ctx) => {

        let caption = "بطاقة سورة: الأعراف 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/007.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/007.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_008', async (ctx) => {

        let caption = "بطاقة سورة: الأنفال 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/008.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/008.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_009', async (ctx) => {

        let caption = "بطاقة سورة: التوبة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/009.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/009.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_010', async (ctx) => {

        let caption = "بطاقة سورة: يونس 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/010.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/010.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_011', async (ctx) => {

        let caption = "بطاقة سورة: هود 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/011.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/011.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_012', async (ctx) => {

        let caption = "بطاقة سورة: يوسف 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/012.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/012.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_013', async (ctx) => {

        let caption = "بطاقة سورة: الرعد 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/013.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/013.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_014', async (ctx) => {

        let caption = "بطاقة سورة: إبراهيم 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/014.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/014.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_015', async (ctx) => {

        let caption = "بطاقة سورة: الحجر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/015.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/015.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_016', async (ctx) => {

        let caption = "بطاقة سورة: النحل 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/016.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/016.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_017', async (ctx) => {

        let caption = "بطاقة سورة: الإسراء 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/017.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/017.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_018', async (ctx) => {

        let caption = "بطاقة سورة: الكهف 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/018.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/018.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_019', async (ctx) => {

        let caption = "بطاقة سورة: مريم 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/019.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/019.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_020', async (ctx) => {

        let caption = "بطاقة سورة: طه 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/020.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/020.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_021', async (ctx) => {

        let caption = "بطاقة سورة: الأنبياء 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/021.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/021.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_022', async (ctx) => {

        let caption = "بطاقة سورة: الحج 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/022.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/022.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_023', async (ctx) => {

        let caption = "بطاقة سورة: المؤمنون 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/023.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/023.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_024', async (ctx) => {

        let caption = "بطاقة سورة: النور 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/024.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/024.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_025', async (ctx) => {

        let caption = "بطاقة سورة: الفرقان 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/025.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/025.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_026', async (ctx) => {

        let caption = "بطاقة سورة: الشعراء 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/026.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/026.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_027', async (ctx) => {

        let caption = "بطاقة سورة: النمل 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/027.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/027.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_028', async (ctx) => {

        let caption = "بطاقة سورة: القصص 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/028.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/028.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_029', async (ctx) => {

        let caption = "بطاقة سورة: العنكبوت 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/029.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/029.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_030', async (ctx) => {

        let caption = "بطاقة سورة: الروم 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/030.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/030.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_031', async (ctx) => {

        let caption = "بطاقة سورة: لقمان 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/031.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/031.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_032', async (ctx) => {

        let caption = "بطاقة سورة: السجدة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/032.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/032.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_033', async (ctx) => {

        let caption = "بطاقة سورة: الأحزاب 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/033.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/033.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_034', async (ctx) => {

        let caption = "بطاقة سورة: سبأ 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/034.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/034.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_035', async (ctx) => {

        let caption = "بطاقة سورة: فاطر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/035.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/035.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_036', async (ctx) => {

        let caption = "بطاقة سورة: يس 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/036.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/036.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_037', async (ctx) => {

        let caption = "بطاقة سورة: الصافات 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/037.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/037.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_038', async (ctx) => {

        let caption = "بطاقة سورة: ص 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/038.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/038.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_039', async (ctx) => {

        let caption = "بطاقة سورة: الزمر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/039.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/039.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_040', async (ctx) => {

        let caption = "بطاقة سورة: غافر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/040.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/040.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_041', async (ctx) => {

        let caption = "بطاقة سورة: فصلت 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/041.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/041.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_042', async (ctx) => {

        let caption = "بطاقة سورة: الشورى 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/042.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/042.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_043', async (ctx) => {

        let caption = "بطاقة سورة: الزخرف 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/043.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/043.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_044', async (ctx) => {

        let caption = "بطاقة سورة: الدخان 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/044.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/044.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_045', async (ctx) => {

        let caption = "بطاقة سورة: الجاثية 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/045.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/045.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_046', async (ctx) => {

        let caption = "بطاقة سورة: الأحقاف 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/046.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/046.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_047', async (ctx) => {

        let caption = "بطاقة سورة: محمد 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/047.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/047.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_048', async (ctx) => {

        let caption = "بطاقة سورة: الفتح 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/048.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/048.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_049', async (ctx) => {

        let caption = "بطاقة سورة: الحجرات 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/049.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/049.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_050', async (ctx) => {

        let caption = "بطاقة سورة: ق 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/050.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/050.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_051', async (ctx) => {

        let caption = "بطاقة سورة: الذاريات 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/051.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/051.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_052', async (ctx) => {

        let caption = "بطاقة سورة: الطور 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/052.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/052.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_053', async (ctx) => {

        let caption = "بطاقة سورة: النجم 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/053.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/053.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_054', async (ctx) => {

        let caption = "بطاقة سورة: القمر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/054.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/054.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_055', async (ctx) => {

        let caption = "بطاقة سورة: الرحمن 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/055.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/055.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_056', async (ctx) => {

        let caption = "بطاقة سورة: الواقعة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/056.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/056.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_057', async (ctx) => {

        let caption = "بطاقة سورة: الحديد 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/057.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/057.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_058', async (ctx) => {

        let caption = "بطاقة سورة: المجادلة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/058.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/058.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_059', async (ctx) => {

        let caption = "بطاقة سورة: الحشر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/059.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/059.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_060', async (ctx) => {

        let caption = "بطاقة سورة: الممتحنة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/060.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/060.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_061', async (ctx) => {

        let caption = "بطاقة سورة: الصف 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/061.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/061.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_062', async (ctx) => {

        let caption = "بطاقة سورة: الجمعة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/062.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/062.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_063', async (ctx) => {

        let caption = "بطاقة سورة: المنافقون 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/063.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/063.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_064', async (ctx) => {

        let caption = "بطاقة سورة: التغابن 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/064.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/064.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_065', async (ctx) => {

        let caption = "بطاقة سورة: الطلاق 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/065.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/065.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_066', async (ctx) => {

        let caption = "بطاقة سورة: التحريم 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/066.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/066.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_067', async (ctx) => {

        let caption = "بطاقة سورة: الملك 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/067.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/067.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_068', async (ctx) => {

        let caption = "بطاقة سورة: القلم 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/068.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/068.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_069', async (ctx) => {

        let caption = "بطاقة سورة: الحاقة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/069.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/069.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_070', async (ctx) => {

        let caption = "بطاقة سورة: المعارج 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/070.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/070.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_071', async (ctx) => {

        let caption = "بطاقة سورة: نوح 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/071.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/071.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_072', async (ctx) => {

        let caption = "بطاقة سورة: الجن 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/072.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/072.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_073', async (ctx) => {

        let caption = "بطاقة سورة: المزمل 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/073.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/073.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_074', async (ctx) => {

        let caption = "بطاقة سورة: المدثر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/074.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/074.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_075', async (ctx) => {

        let caption = "بطاقة سورة: القيامة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/075.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/075.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_076', async (ctx) => {

        let caption = "بطاقة سورة: الإنسان 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/076.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/076.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_077', async (ctx) => {

        let caption = "بطاقة سورة: المرسلات 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/077.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/077.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_078', async (ctx) => {

        let caption = "بطاقة سورة: النبأ 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/078.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/078.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_079', async (ctx) => {

        let caption = "بطاقة سورة: النازعات 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/079.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/079.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_080', async (ctx) => {

        let caption = "بطاقة سورة: عبس 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/080.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/080.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_081', async (ctx) => {

        let caption = "بطاقة سورة: التكوير 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/081.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/081.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_082', async (ctx) => {

        let caption = "بطاقة سورة: الانفطار 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/082.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/082.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_083', async (ctx) => {

        let caption = "بطاقة سورة: المطففين 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/083.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/083.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_084', async (ctx) => {

        let caption = "بطاقة سورة: الانشقاق 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/084.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/084.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_085', async (ctx) => {

        let caption = "بطاقة سورة: البروج 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/085.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/085.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_086', async (ctx) => {

        let caption = "بطاقة سورة: الطارق 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/086.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/086.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_087', async (ctx) => {

        let caption = "بطاقة سورة: الأعلى 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/087.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/087.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_088', async (ctx) => {

        let caption = "بطاقة سورة: الغاشية 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/088.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/088.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_089', async (ctx) => {

        let caption = "بطاقة سورة: الفجر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/089.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/089.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_090', async (ctx) => {

        let caption = "بطاقة سورة: البلد 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/090.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/090.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_091', async (ctx) => {

        let caption = "بطاقة سورة: الشمس 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/091.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/091.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_092', async (ctx) => {

        let caption = "بطاقة سورة: الليل 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/092.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/092.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_093', async (ctx) => {

        let caption = "بطاقة سورة: الضحى 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/093.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/093.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_094', async (ctx) => {

        let caption = "بطاقة سورة: الشرح 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/094.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/094.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_095', async (ctx) => {

        let caption = "بطاقة سورة: التين 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/095.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/095.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_096', async (ctx) => {

        let caption = "بطاقة سورة: العلق 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/096.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/096.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_097', async (ctx) => {

        let caption = "بطاقة سورة: القدر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/097.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/097.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_098', async (ctx) => {

        let caption = "بطاقة سورة: البينة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/098.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/098.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_099', async (ctx) => {

        let caption = "بطاقة سورة: الزلزلة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/090.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/099.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_100', async (ctx) => {

        let caption = "بطاقة سورة: العاديات 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/100.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/100.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_101', async (ctx) => {

        let caption = "بطاقة سورة: القارعة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/101.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/101.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_102', async (ctx) => {

        let caption = "بطاقة سورة: التكاثر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/102.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/102.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_103', async (ctx) => {

        let caption = "بطاقة سورة: العصر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/103.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/103.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_104', async (ctx) => {

        let caption = "بطاقة سورة: الهمزة 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/104.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/104.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_105', async (ctx) => {

        let caption = "بطاقة سورة: الفيل 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/105.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/105.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_106', async (ctx) => {

        let caption = "بطاقة سورة: قريش 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/106.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/106.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_107', async (ctx) => {

        let caption = "بطاقة سورة: الماعون 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/107.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/107.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_108', async (ctx) => {

        let caption = "بطاقة سورة: الكوثر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/108.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/108.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_109', async (ctx) => {

        let caption = "بطاقة سورة: الكافرون 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/109.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/109.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_110', async (ctx) => {

        let caption = "بطاقة سورة: النصر 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/110.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/110.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_111', async (ctx) => {

        let caption = "بطاقة سورة: المسد 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/111.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/111.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_112', async (ctx) => {

        let caption = "بطاقة سورة: الإخلاص 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/112.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/112.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_113', async (ctx) => {

        let caption = "بطاقة سورة: الفلق 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/113.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/113.mp3' }, { caption: caption })

    });

    bot.action('albitaqat_114', async (ctx) => {

        let caption = "بطاقة سورة: الناس 📖"
        await ctx.replyWithPhoto({ url: "http://bot.altaqwaa.org/media/albitaqat/images/114.jpg" });
        await ctx.replyWithAudio({ url: 'http://bot.altaqwaa.org/media/albitaqat/mp3/114.mp3' }, { caption: caption })

    });


}