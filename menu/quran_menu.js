import { db_menu } from '../lib/db_menu.js';
import fs from 'fs-extra';

export const quran_menu = {

    async exec({ pushname, body, ctx, from, Markup }) {

        if (body === '1'){

            db_menu[from].menu_name = 2;
            let quran_idr = fs.readFileSync('./media/text/quran_1.txt',{encoding:'utf8', flag:'r'})
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((erro) => console.log(erro));
            
        }

        else if (body === '2'){

            db_menu[from].menu_name = 3;

            let quran_idr = fs.readFileSync('./media/text/quran_2.txt',{encoding:'utf8', flag:'r'})
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((erro) => console.log(erro));

        }

        else if (body === '3'){

            db_menu[from].menu_name = 4;

            let quran_idr = fs.readFileSync('./media/text/quran_3.txt',{encoding:'utf8', flag:'r'})
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((erro) => console.log(erro));
            
        }

        else if (body === '4'){ 
            
            db_menu[from].menu_name = 5;

            let quran_idr = fs.readFileSync('./media/text/quran_4.txt',{encoding:'utf8', flag:'r'})
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((erro) => console.log(erro));  
            
        }

        else if ( body === 'خدمة' || body === 'خدمه' || body === '#'){

            db_menu[from].menu_name = 0;

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

    }

}