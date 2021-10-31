import { db_menu } from '../lib/db_menu.js';
import { video } from './video.js';
import { photo } from './photo.js';
import { sticker } from './sticker.js';
import fs from 'fs-extra';

export const menu = {

  async exec({ pushname, body, ctx, from, Markup, client }) {

    if ( body === 'خدمة' || body === 'خدمه' || body === '#'){

      let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'),Markup.button.callback('أذكار 📿', 'adhkar')];
      let but_2 = [Markup.button.callback('فيديو 🎥', 'video'),Markup.button.callback('صور 🖼️', 'photo'),Markup.button.callback('ملصق 🪧', 'sticker')];
      let but_3 = [Markup.button.callback('سؤال ⁉️', 'question')];
      let button = Markup.inlineKeyboard([but_1, but_2, but_3]);

      let mesg = `مرحباً بك  @${pushname} 👋 \n`
      mesg += 'من فضلك قم بكتابة (رقم) الخدمة ✉️ \n\n\n'
      mesg += '1- قائمة القرآن الكريم 📖 \n'
      mesg += '2- قائمة الأذكار 📿 \n'
      mesg += '3- فيديو عشوائي 🎥 \n'
      mesg += '4- صورة عشوائية 🖼️ \n'
      mesg += '5- ملصق عشوائي 🪧 \n'
      mesg += '6- سؤال عشوائي ⁉️ \n\n\n'

      await ctx.reply(mesg, button).catch((erro) => console.log(erro));

    }

    else if (body === '1'){

      db_menu[from].menu_name = 1;

      let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
      quran_menu += '1- أدريس أبكر \n'
      quran_menu += '2- ماهر المعيقلي \n'
      quran_menu += '3- عبدالله الموسى \n'
      quran_menu += '4- علي جابر \n\n\n'
      quran_menu += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'
      
      await ctx.reply(quran_menu).catch((erro) => console.log(erro));

    }

    else if (body === '2'){

      db_menu[from].menu_name = 6;

      let adhkar_menu = '1- أذكار الصباح ☀️ \n'
      adhkar_menu += '2- أذكار المساء 🌑 \n'
      adhkar_menu += '3- أذكار النوم 😴 \n'
      adhkar_menu += '4- أذكار عشوائية 🔄 \n'
      adhkar_menu += '5- أدعية نبوية 🤲 \n'
      adhkar_menu += '6- أذكار عند سماع الآذان 📢 \n'
      adhkar_menu += '7- أذكار المسجد 🕌 \n'
      adhkar_menu += '8- أذكار الوضوء 💦 \n'
      adhkar_menu += '9- أذكار دخول وخروج المنزل 🏠\n'
      adhkar_menu += '10- أذكار الخلاء 🚻 \n'
      adhkar_menu += '11- أذكار الطعام 🥣 \n'
      adhkar_menu += '12- دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ 📖 \n\n\n'
      adhkar_menu += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'
     
      await ctx.reply(adhkar_menu).catch((erro) => console.log(erro));

    }

    else if (body === '3'){

      let listvideo = video[Math.floor(Math.random() * video.length)]
      await ctx.replyWithVideo({url: listvideo})
      .catch((erro) => console.log(erro));

    }

    else if (body === '4'){

      let listphoto = photo[Math.floor(Math.random() * photo.length)]
      await ctx.replyWithPhoto({url: listphoto})
      .catch((erro) => console.log(erro));

    }
    
    else if (body === '5'){

      let liststicker = sticker[Math.floor(Math.random() * sticker.length)]
      await ctx.replyWithSticker({url: liststicker})
      .catch((erro) => console.log(erro));

    }

    else if (body === '6'){

      let question = await fs.readJson('./question.json').catch((error) => console.log(error));
      let number = Array.from(question.keys())
      let list = number[Math.floor(Math.random() * number.length)]
      let but_1 = Markup.button.callback(question[list].answer.asr, question[list].answer.id);
      let but_2 = Markup.button.callback(question[list].answer1.asr, question[list].answer1.id);
      let but_3 = Markup.button.callback(question[list].answer2.asr, question[list].answer2.id);
      let but = [[[but_1], [but_2], [but_3]],[[but_2], [but_1], [but_3]],[[but_3], [but_1], [but_2]],[[but_2], [but_3], [but_1]],[[but_1], [but_3], [but_2]]]
      let random = but[Math.floor(Math.random() * but.length)]
      let button = Markup.inlineKeyboard(random);

      await ctx.reply(question[list].question, button)
      .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 120000))
      .catch((error) => console.log(error));

      client.action(question[list].answer.id, async (ctx) => {

        await ctx.reply("إجابة صحيحة ✔️")
        .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 10000))
        .catch((error) => console.log(error));

      });

      client.action(question[list].answer1.id, async (ctx) => {

        await ctx.reply("إجابة خاطئة ❌")
        .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 10000))
        .catch((error) => console.log(error));

      });

      client.action(question[list].answer2.id, async (ctx) => {

        await ctx.reply("إجابة خاطئة ❌")
        .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 10000))
        .catch((error) => console.log(error));

      });

    }
     
  }

};