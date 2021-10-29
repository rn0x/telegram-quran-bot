import { db_menu } from '../lib/db_menu.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import fs from 'fs-extra';


export const adhkar = {
    

    async exec({ pushname, body, ctx, from, Markup }) {

        if (body === '1'){

            let adhkar_sbh = fs.readFileSync('./media/text/adhkar_sbh.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_sbh).catch((erro) => console.log(erro));
        }

        else if (body === '2'){

            let adhkar_msa = fs.readFileSync('./media/text/adhkar_msa.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_msa).catch((erro) => console.log(erro));
            
        }

        else if (body === '3'){

            let adhkar_nom = fs.readFileSync('./media/text/adhkar_nom.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_nom).catch((erro) => console.log(erro));
            
        }

        else if (body === '4'){

            let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
            await ctx.reply(listadk).catch((erro) => console.log(erro));
            
        }

        else if (body === '5'){

            let ad3yh_nboyh = fs.readFileSync('./media/text/ad3yh_nboyh.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(ad3yh_nboyh).catch((erro) => console.log(erro));
            
        }

        else if (body === '6'){

            let adhkar_al2dan = fs.readFileSync('./media/text/adhkar_al2dan.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_al2dan).catch((erro) => console.log(erro));
            
        }

        else if (body === '7'){

            let adhkar_almsgd = fs.readFileSync('./media/text/adhkar_almsgd.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_almsgd).catch((erro) => console.log(erro));
            
        }

        else if (body === '8'){

            let adhkar_alwdo2 = fs.readFileSync('./media/text/adhkar_alwdo2.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_alwdo2).catch((erro) => console.log(erro));
            
        }

        else if (body === '9'){

            let adhkar_home = fs.readFileSync('./media/text/adhkar_home.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_home).catch((erro) => console.log(erro));
            
        }

        else if (body === '10'){

            let adhkar_al5la = fs.readFileSync('./media/text/adhkar_al5la.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_al5la).catch((erro) => console.log(erro));
            
        }

        else if (body === '11'){

            let adhkar_food = fs.readFileSync('./media/text/adhkar_food.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhkar_food).catch((erro) => console.log(erro));
            
        }

        else if (body === '12'){

            let adhka_5tm = fs.readFileSync('./media/text/adhka_5tm.txt',{encoding:'utf8', flag:'r'})
            await ctx.reply(adhka_5tm).catch((erro) => console.log(erro));
            
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