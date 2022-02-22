import fs from 'fs-extra';
import MenuNmber from '../lib/MenuNmber.js';
import Error from "../menu/error.js";

export default async function Hi({ body, ctx, pushname, from, Markup }) {

  try {


    if (body === 'خدمة' || body === 'خدمه' || body === '#') {

      MenuNmber(from, 0)

      let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'), Markup.button.callback('أذكار 📿', 'adhkar'), Markup.button.callback('حصن المسلم 🏰', 'hisn_almuslim')];
      let but_2 = [Markup.button.callback('فيديو 🎥', 'video'), Markup.button.callback('صور 🖼️', 'photo'), Markup.button.callback('ملصق 🪧', 'sticker')];
      let but_3 = [Markup.button.callback('سؤال ⁉️', 'question'), Markup.button.callback('محاضرات 🌾', 'Lectures'), Markup.button.callback('بطاقات 🎴', 'albitaqat')];
      let button = Markup.inlineKeyboard([but_1, but_2, but_3]);
      let user = fs.readJsonSync('./db/user.json');
      let channel = []
      let supergroup = []

      for (let lop of Object.keys(user)) {

        if (user[lop].Type === 'channel') {

          channel.push(lop)

        }

        else if (user[lop].Type === 'supergroup') {

          supergroup.push(lop)

        }

      }
      let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
      mesg += 'من فضلك قم بإرسال رقم الخدمة ✉️ \n\n\n'
      mesg += '1- قائمة القرآن الكريم 📖 \n'
      mesg += '2- قائمة الأذكار 📿 \n'
      mesg += '3- فيديوهات قرآن عشوائية 🎥 \n'
      mesg += '4- صورة عشوائية 🖼️ \n'
      mesg += '5- ملصق عشوائي 🪧 \n'
      mesg += '6- سؤال عشوائي ⁉️ \n'
      mesg += '7- محاضرات عشوائية 🌾 \n'
      mesg += '8- بطاقات القرآن 🎴 \n'
      mesg += '9- حصن المسلم 🏰 \n\n\n\n'
      mesg += 'إحصائيات البوت \n'
      mesg += `عدد المحادثات : ${Object.keys(user).length}\n`
      mesg += `عدد المجموعات : ${supergroup.length}\n`
      mesg += `عدد القنوات : ${channel.length}\n\n`
      mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
      mesg += 'يمكنك متابعة البوت على واتساب عبر الرقم 966502054247 🤖'

      await ctx.reply(mesg, button).catch((error) => {
        Error(error);
        console.log(error);
      });

    }

  } catch (error) {

    Error(error);
    console.log(error);

  }

}