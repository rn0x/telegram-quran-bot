const path = require('path');
const fs = require('fs-extra');

module.exports = async function adhkar(bot, Path_appDate, Markup, Path_Local) {

    bot.action('adhkar', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('أذكار الصباح ☀️', 'adhkar_1'), Markup.button.callback('أذكار المساء 🌑', 'adhkar_2')];
        let but_2 = [Markup.button.callback('أذكار النوم 😴', 'adhkar_3'), Markup.button.callback('أذكار عشوائية 🔄', 'adhkar_4')];
        let but_3 = [Markup.button.callback('أدعية نبوية 🤲', 'adhkar_5'), Markup.button.callback('أذكار عند سماع الآذان 📢', 'adhkar_6')];
        let but_4 = [Markup.button.callback('أذكار المسجد 🕌', 'adhkar_7'), Markup.button.callback('أذكار الوضوء 💦', 'adhkar_8')];
        let but_5 = [Markup.button.callback('أذكار دخول وخروج المنزل 🏠', 'adhkar_9'), Markup.button.callback('أذكار الخلاء 🚻', 'adhkar_10')];
        let but_6 = [Markup.button.callback('أذكار الطعام 🥣', 'adhkar_11'), Markup.button.callback('دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ 📖', 'adhkar_12')];
        let but_7 = [Markup.button.callback('الرجوع للقائمة الرئيسية', 'start')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4, but_5, but_6, but_7]);
        let adhkar_menu = 'قائمة الأذكار 📿 \n\n'
        adhkar_menu += 'قم بالضغط على الازرار التي بالاسفل لإرسال الذكر'
        let { message_id } = await ctx.reply(adhkar_menu, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        

    });

    bot.action('adhkar_1', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار الصباح 🌞

▪ الفاتحة | ¹ مره واحدة
▪ آية الكرسى | ¹ مره واحدة
▪ الإخلاص | ³ مرات
▪ الفلق | ³ مرات
▪ الناس | ³ مرات


❀ أَصْـبَحْنا وَأَصْـبَحَ المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. | ¹ مره واحدة

❀ اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ | ¹ مره واحدة

❀ رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً | ³ مرات

❀ اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك. | ⁴مرات

❀ اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. | ¹ مره واحدة

❀ حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم. | ⁷ مرات

❀ بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. | ³ مرات

❀ اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النشور. | ¹ مره واحدة 

❀ أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ. | ¹ مره واحدة

❀ سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. | ³ مرات

❀ اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. | ³ مرات

❀ اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ. | ³ مرات

❀ اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. | ¹ مره واحدة

❀ يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. | ³ مرات

❀ أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه. | ¹ مره واحدة 

❀ اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. | ¹ مره واحدة

❀ أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. | ³ مرات

❀ اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. | ¹⁰ مرات 

❀ اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ. | ³ مرات

❀ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ. | ³ مرات`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_2', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار المساء 🌑

▪ الفاتحة | ¹ مره واحدة
▪ آية الكرسى | ¹ مره واحدة
▪ الإخلاص | ³ مرات
▪ الفلق | ³ مرات
▪ الناس | ³ مرات


❀ أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. | ¹ مره واحدة

❀ اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ | ¹ مره واحدة

❀ رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً | ³ مرات

❀ اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك. | ⁴مرات

❀ اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. | ¹ مره واحدة

❀ حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم. | ⁷ مرات

❀ بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. | ³ مرات

❀ اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ. | ¹ مره واحدة 

❀ أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ. | ¹ مره واحدة

❀ سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. | ³ مرات

❀ اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. | ³ مرات

❀ اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ. | ³ مرات

❀ اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. | ¹ مره واحدة

❀ يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. | ³ مرات

❀ أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا. | ¹ مره واحدة 

❀ اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. | ¹ مره واحدة

❀ أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. | ³ مرات

❀ اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. | ¹⁰ مرات 

❀ اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ. | ³ مرات

❀ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ. | ³ مرات`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_3', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار النوم 🌑

❀ بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي ، وَبِكَ أَرْفَعُـه، فَإِن أَمْسَـكْتَ نَفْسـي فارْحَـمْها ، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصّـالِحـين. | ¹ مره واحدة
❀ اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتـها وَمَحْـياها ، إِنْ أَحْيَيْـتَها فاحْفَظْـها ، وَإِنْ أَمَتَّـها فَاغْفِـرْ لَـها . اللّهُـمَّ إِنَّـي أَسْـأَلُـكَ العـافِـيَة. | ¹ مره واحدة
❀  اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك. | ³ مرات
❀ بِاسْـمِكَ اللّهُـمَّ أَمـوتُ وَأَحْـيا. | ¹ مره واحدة
❀ الـحَمْدُ للهِ الَّذي أَطْـعَمَنا وَسَقـانا، وَكَفـانا، وَآوانا، فَكَـمْ مِمَّـنْ لا كـافِيَ لَـهُ وَلا مُـؤْوي. | ¹ مره واحدة
❀ اللّهُـمَّ عالِـمَ الغَـيبِ وَالشّـهادةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كُـلِّ شَـيءٍ وَمَليـكَه، أَشْهـدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي، وَمِن شَـرِّ الشَّيْـطانِ وَشِـرْكِه، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم . | ¹ مره واحدة
❀ اللّهُـمَّ أَسْـلَمْتُ نَفْـسي إِلَـيْكَ، وَفَوَّضْـتُ أَمْـري إِلَـيْكَ، وَوَجَّـهْتُ وَجْـهي إِلَـيْكَ، وَأَلْـجَـاْتُ ظَهـري إِلَـيْكَ، رَغْبَـةً وَرَهْـبَةً إِلَـيْكَ، لا مَلْجَـأَ وَلا مَنْـجـا مِنْـكَ إِلاّ إِلَـيْكَ، آمَنْـتُ بِكِتـابِكَ الّـذي أَنْزَلْـتَ وَبِنَبِـيِّـكَ الّـذي أَرْسَلْـت. | ¹ مره واحدة
❀ سُبْحَانَ اللَّهِ. | ³³ مره
❀ الْحَمْدُ لِلَّهِ. | ³³ مره
❀ اللَّهُ أَكْبَرُ. | ³³ مره


▪ يجمع كفيه ثم ينفث فيهما والقراءة فيهما‏:‏ ‏{‏قل هو الله أحد‏}‏ و‏{‏قل أعوذ برب الفلق‏}‏ و‏{‏قل أعوذ برب الناس‏}‏ ومسح ما استطاع من الجسد يبدأ بهما على رأسه ووجه وما أقبل من جسده. | ³ مرات
▪ سورة البقرة: أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ. [البقرة 285 - 286] | ¹ مره واحدة
▪ آية الكرسى: أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [البقرة 255] | ¹ مره واحدة
`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_4', async (ctx) => {

        let id = ctx.chat.id;
        let adhkar_json = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/adhkar.json'));
        let random = adhkar_json[Math.floor(Math.random() * adhkar_json.length)]
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('🔄', 'adhkar_4')];
        let but_2 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1, but_2]);
        let message = `${random.category} \n\n\n`
        message += `${random.zekr}`
        message += `${random.description !== '' ? `\n\n ${random.description}`: ''}`
        message += `${random.count !== '' ? `\n\nعدد التكرار: ${random.count}` : ''}`
        message += `${random.reference !== '' ?`\n\n ${random.reference}`: ''}`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_5', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أدعية نبوية 🤲


▪ اللَّهُمَّ أنَْتَ رَبيِّ لَا إلِهََ إلَِّا أنَتَ، خَلَقْتنَيِ وَأنََا عَبدُْكَ، وَأنََا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.

▪ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّك أَنْتَ الْغَفُورُ الرَّحِيمُ.

▪ رَبِّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي وَإِسْرَافِي فِي أَمْرِي كُلِّهِ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، اللَّهُمَّ اغْفِرْ لِي خَطَايَايَ وَعَمْدِي وَجَهْلِي وَهَزْلِي، وَكُلُّ ذَلِكَ عِنْدِي، اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ وَأَنْتَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.

▪ اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ.

▪ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.

▪ اللَّهُمَّ إنِِّي أَعُوذُ بكَِ مِنَ الْبُخْلِ، وَأَعُوذُ بكَِ مِنَ الْجُبْنِ، وَأَعُوذُ بكَِ أَنْ أُرَدَّ إلَِى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ.

▪ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ. 

▪ اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ، وَاجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ.

▪ اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى.

▪ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ.

▪ اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ.

▪ اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.

▪ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ.

▪ اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_6', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار عند سماع الآذان 📢


▪ ما يقال عند سماع الأذان
يَقُولُ مِثْلَ مَا يَقُولُ الـمُؤَذِّنُ إلاَّ فِي "حَيَّ عَلَى الصَّلاةِ وَحَيَّ عَلَى الفَلاَحِ" فَيَقُولُ: "لاَ حَوْلَ وَلا قُوَّةَ إلاَّ باللَّهِ".

▪ عنْ سَعْدِ بْن أَبي وقَّاصٍ رضِيَ اللَّه عنْهُ عَن النبي صَلّى اللهُ عَلَيْهِ وسَلَّم أَنَّهُ قَالَ: "مَنْ قَال حِينَ يسْمعُ المُؤذِّنَ : أَشْهَد أَنْ لا إِله إِلاَّ اللَّه وحْدهُ لا شَريك لهُ ، وَأَنَّ مُحمَّداً عبْدُهُ وَرسُولُهُ ، رضِيتُ بِاللَّهِ ربًّا ، وبمُحَمَّدٍ رَسُولاً ، وبالإِسْلامِ دِينًا ، غُفِر لَهُ ذَنْبُهُ". رواه مسلم .

▪ عَنْ عبْدِ اللَّهِ بْنِ عَمرِو بْنِ العاصِ رضِيَ اللَّه عنْهُما أَنه سَمِع رسُولَ اللَّهِ صَلّى اللهُ عَلَيْهِ وسَلَّم يقُولُ : "إِذا سمِعْتُمُ النِّداءَ فَقُولُوا مِثْلَ ما يَقُولُ ، ثُمَّ صَلُّوا علَيَّ ، فَإِنَّهُ مَنْ صَلَّى علَيَّ صَلاةً صَلَّى اللَّه عَلَيْهِ بِهَا عشْراً ، ثُمَّ سلُوا اللَّه لي الْوسِيلَةَ ، فَإِنَّهَا مَنزِلَةٌ في الجنَّةِ لا تَنْبَغِي إِلاَّ لعَبْدٍ منْ عِباد اللَّه وَأَرْجُو أَنْ أَكُونَ أَنَا هُو ، فَمنْ سَأَل ليَ الْوسِيلَة حَلَّتْ لَهُ الشَّفاعَةُ". رواه مسلم . 

▪ عَنْ جابرٍ بن عبد الله رضَي اللَّه عنهما‏ أَنَّ رَسُولَ اللَّهِ صَلّى اللهُ عَلَيْهِ وسَلَّم قَالَ : "من قَال حِين يسْمعُ النِّداءَ : اللَّهُمَّ رَبَّ هذِهِ الدَّعوةِ التَّامَّةِ ، والصَّلاةِ الْقَائِمةِ، آت مُحَمَّداً الْوسِيلَةَ ، والْفَضَيِلَة، وابْعثْهُ مقَامًا محْمُوداً الَّذي وعَدْتَه ، حلَّتْ لَهُ شَفَاعتي يوْم الْقِيامِة" .رواه البخاري .

▪ ما يقال بعد سماع الأذان
اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ.
اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، والصَّلاةِ القَائِمَةِ، آتِ مُـحَمَّداً الوَسِيْلَةَ والفَضِيْلَةَ، وابْعَثْهُ مَقَاماً مَـحْمُوداً الَّذِي وَعَدْتَهُ، إنَّكَ لا تُخْلِفُ الـمِيْعَادِ.

▪ ما يقال بين الأذان والإقامة
ما بين الأذان والإقامة فالدعاء عندئذٍ مرغّب فيه ومستحب.
قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: "الدُّعَاءُ لَا يُرَدُّ بَيْنَ الْأَذَانِ وَالْإِقَامَةِ".
قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: "إِنَّ الدُّعَاءَ لَا يُرَدُّ بَيْنَ الْأَذَانِ وَالْإِقَامَةِ فَادْعُوا".

▪ نص صيغة الأذان
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
أشْهَدُ أنَّ لا إلَهَ إلاَّ اللهُ
أشْهَدُ أنَّ لا إلَهَ إلاَّ اللهُ
أشْهَدُ أنَّ مُحَمَّداً رَسُولُ اللهِ
أشْهَدُ أنَّ مُحَمَّداً رَسُولُ اللهِ
حَيَّ عَلَى الصَّلاةِ
حَيَّ عَلَى الصَّلاةِ
حَيَّ عَلَى الفَلاحِ
حَيَّ عَلَى الفَلاحِ
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
لاَ إلَهَ إلاَّ اللهُ 

▪ نص صيغة أذان الفجر
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
أشْهَدُ أنَّ لا إلَهَ إلاَّ اللهُ
أشْهَدُ أنَّ لا إلَهَ إلاَّ اللهُ
أشْهَدُ أنَّ مُحَمَّداً رَسُولُ اللهِ
أشْهَدُ أنَّ مُحَمَّداً رَسُولُ اللهِ
حَيَّ عَلَى الصَّلاةِ
حَيَّ عَلَى الصَّلاةِ
حَيَّ عَلَى الفَلاحِ
حَيَّ عَلَى الفَلاحِ
الصلاةُ خيرٌ مِنَ النوم
الصلاةُ خيرٌ من النوم
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
لاَ إلَهَ إلاَّ اللهُ 

▪ نص صيغة الإقامة
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
أشْهَدُ أنَّ لا إلَهَ إلاَّ اللهُ
أشْهَدُ أنَّ مُحَمَّداً رَسُولُ اللهِ
حَيَّ عَلَى الصَّلاةِ
حَيَّ عَلَى الفَلاحِ
قد قامت الصلاةُ
قد قامت الصلاةُ
اللهُ أكْبَرُ ، اللهُ أكْبَرُ
لاَ إلَهَ إلاَّ اللهُ`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_7', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار المسجد 🕌


▪ دُعَاءُ الذَّهَابِ إلَى المَسْجِدِ
اللّهُـمَّ اجْعَـلْ في قَلْبـي نورا ، وَفي لِسـاني نورا، وَاجْعَـلْ في سَمْعي نورا، وَاجْعَـلْ في بَصَري نورا، وَاجْعَـلْ مِنْ خَلْفي نورا، وَمِنْ أَمامـي نورا، وَاجْعَـلْ مِنْ فَوْقـي نورا ، وَمِن تَحْتـي نورا .اللّهُـمَّ أَعْطِنـي نورا.

▪ دُعَاءُ دُخُولِ المَسْجِدِ
يَبْدَأُ بِرِجْلِهِ اليُمْنَى، وَيَقُولُ:
أَعوذُ باللهِ العَظيـم وَبِوَجْهِـهِ الكَرِيـم وَسُلْطـانِه القَديـم مِنَ الشّيْـطانِ الرَّجـيم، بِسْمِ اللَّهِ، وَالصَّلاةُ وَالسَّلامُ عَلَى رَسُولِ الله، اللّهُـمَّ افْتَـحْ لي أَبْوابَ رَحْمَتـِك. 

▪ دُعَاءُ الخُرُوجِ مِنَ المَسْجِدِ
يَبْدَأُ بِرِجْلِهِ الْيُسْرَى، وَيَقُولُ:
بِسْـمِ اللَّـهِ وَالصَّلاةُ وَالسَّلامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيم.`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_8', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار الوضوء 💦


▪ الذكر قبل الوضوء
قبل الوضوء: "بِسْمِ ٱللّٰهِ".

▪ الذكر بعد الوضوء
"أشْهَدُ أن لا إله إلا الله وحْدَهُ لا شريكَ لهُ ، وأشْهَدُ أنَّ محمداً عَبدُهُ ورسُولُه".
"اللَّهُمَّ اجْعَلْني مِنَ التَّوَّابينَ واجْعَلْنِي من المُتَطَهِّرِينَ".
"سُبْحَانَكَ اللَّهُمَّ وبَحَمْدكَ أشْهدُ أنْ لا إلهَ إلا أنْتَ أَسْتَغْفِرُكَ وأتُوبُ إِلَيْكَ".`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_9', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار دخول وخروج المنزل 🏠


▪ أذكار الدخول إلى المنزل
بِسْـمِ اللهِ وَلَجْنـا، وَبِسْـمِ اللهِ خَـرَجْنـا، وَعَلـى رَبِّنـا تَوَكّلْـنا.

▪ أذكار الخروج من المنزل
بِسْمِ اللهِ ، تَوَكَّلْـتُ عَلى اللهِ وَلا حَوْلَ وَلا قُـوَّةَ إِلاّ بِالله.
اللّهُـمَّ إِنِّـي أَعـوذُ بِكَ أَنْ أَضِـلَّ أَوْ أُضَـل ، أَوْ أَزِلَّ أَوْ أُزَل ، أَوْ أَظْلِـمَ أَوْ أَُظْلَـم ، أَوْ أَجْهَلَ أَوْ يُـجْهَلَ عَلَـيّ.`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_10', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار الخلاء 🚻


▪ الذكر عند الخلاء
(بِسْمِ الله) اللّهُـمَّ إِنِّـي أَعـوذُ بِـكَ مِـنَ الْخُـبْثِ وَالْخَبائِث.

▪ الذكر بعد الخروج من الخلاء
غُفْـرانَك.`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_11', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ أذكار الطعام 🥣


▪ الذكر عند الطعام والشراب
بِسْمِ اللهِ.
فإنْ نسي في أَوَّلِهِ، فَليَقُلْ:
بِسْمِ اللَّه أَوَّلَهُ وَآخِرَهُ. 

▪ الذكر عند شرب اللبن
اَللَّهُمَّ بَارِكْ لَنَا فِيهِ, وَزِدْنَا مِنْهُ. 

▪ الذكر عند الفراغ من الطعام والشراب
الْحَمْدُ للهِ الَّذِي أَطْعَمَنِي هَذَا, وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِّنِّي وَلاَ قُوَّةٍ.
الْحَمْدُ لِلَّهِ كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا.

▪ أذكار الضيف
أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ ، وَأَكَلَ طَعَامَكُمُ الأَبْرَارُ ، وَصَلَّتْ عَلَيْكُمُ الْمَلائِكَةُ. `
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });

    bot.action('adhkar_12', async (ctx) => {

        let id = ctx.chat.id;
        let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : ''
        let but_1 = [Markup.button.callback('الرجوع للقائمة السابقة', 'adhkar')];
        let button = Markup.inlineKeyboard([but_1]);
        let message =
            `﻿❀ دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ 📖

اللَّهُمَّ ارْحَمْنِي بالقُرْءَانِ وَاجْعَلهُ لِي إِمَاماً وَنُوراً وَهُدًى وَرَحْمَةً .

اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَانَسِيتُ وَعَلِّمْنِي مِنْهُ مَاجَهِلْتُ وَارْزُقْنِي تِلاَوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ وَاجْعَلْهُ لِي حُجَّةً يَارَبَّ العَالَمِينَ .

اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي، وَاجْعَلِ الحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ وَاجْعَلِ المَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ .

اللَّهُمَّ اجْعَلْ خَيْرَ عُمْرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ فِيهِ .

اللَّهُمَّ إِنِّي أَسْأَلُكَ عِيشَةً هَنِيَّةً وَمِيتَةً سَوِيَّةً وَمَرَدًّا غَيْرَ مُخْزٍ وَلاَ فَاضِحٍ .

اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ المَسْأَلةِ وَخَيْرَ الدُّعَاءِ وَخَيْرَ النَّجَاحِ وَخَيْرَ العِلْمِ وَخَيْرَ العَمَلِ وَخَيْرَ الثَّوَابِ وَخَيْرَ الحَيَاةِ وَخيْرَ المَمَاتِ وَثَبِّتْنِي وَثَقِّلْ مَوَازِينِي وَحَقِّقْ إِيمَانِي وَارْفَعْ دَرَجَتِي وَتَقَبَّلْ صَلاَتِي وَاغْفِرْ خَطِيئَاتِي وَأَسْأَلُكَ العُلَا مِنَ الجَنَّةِ .

اللَّهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ وَعَزَائِمِ مَغْفِرَتِكَ وَالسَّلاَمَةَ مِنْ كُلِّ إِثْمٍ وَالغَنِيمَةَ مِنْ كُلِّ بِرٍّ وَالفَوْزَ بِالجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ .

اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الأُمُورِ كُلِّهَا، وَأجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الآخِرَةِ .

اللَّهُمَّ اقْسِمْ لَنَا مِنْ خَشْيَتِكَ مَاتَحُولُ بِهِ بَيْنَنَا وَبَيْنَ مَعْصِيَتِكَ وَمِنْ طَاعَتِكَ مَاتُبَلِّغُنَا بِهَا جَنَّتَكَ وَمِنَ اليَقِينِ مَاتُهَوِّنُ بِهِ عَلَيْنَا مَصَائِبَ الدُّنْيَا وَمَتِّعْنَا بِأَسْمَاعِنَا وَأَبْصَارِنَا وَقُوَّتِنَا مَاأَحْيَيْتَنَا وَاجْعَلْهُ الوَارِثَ مِنَّا وَاجْعَلْ ثَأْرَنَا عَلَى مَنْ ظَلَمَنَا وَانْصُرْنَا عَلَى مَنْ عَادَانَا وَلاَ تجْعَلْ مُصِيبَتَنَا فِي دِينِنَا وَلاَ تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا وَلَا مَبْلَغَ عِلْمِنَا وَلاَ تُسَلِّطْ عَلَيْنَا مَنْ لَا يَرْحَمُنَا .

اللَّهُمَّ لَا تَدَعْ لَنَا ذَنْبًا إِلَّا غَفَرْتَهُ وَلَا هَمَّا إِلَّا فَرَّجْتَهُ وَلَا دَيْنًا إِلَّا قَضَيْتَهُ وَلَا حَاجَةً مِنْ حَوَائِجِ الدُّنْيَا وَالآخِرَةِ إِلَّا قَضَيْتَهَا يَاأَرْحَمَ الرَّاحِمِينَ .

رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ وَصَلَّى اللهُ عَلَى سَيِّدِنَا وَنَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ الأَخْيَارِ وَسَلَّمَ تَسْلِيمًا كَثِيراً.`
        let { message_id } = await ctx.reply(message, button)
        json[id].message_id = message_id
        fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
        


    });
    
}