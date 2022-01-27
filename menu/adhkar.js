import { adhkar_all } from '../menu/adhkar_all.js';
import fs from 'fs-extra';


export const adhkar = {


    async exec({ body, ctx }) {

        if (body === '1') {

            let adhkar_sbh = fs.readFileSync('./media/text/adhkar_sbh.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_sbh).catch((erro) => console.log(erro));
        }

        else if (body === '2') {

            let adhkar_msa = fs.readFileSync('./media/text/adhkar_msa.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_msa).catch((erro) => console.log(erro));

        }

        else if (body === '3') {

            let adhkar_nom = fs.readFileSync('./media/text/adhkar_nom.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_nom).catch((erro) => console.log(erro));

        }

        else if (body === '4') {

            let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
            await ctx.reply(listadk).catch((erro) => console.log(erro));

        }

        else if (body === '5') {

            let ad3yh_nboyh = fs.readFileSync('./media/text/ad3yh_nboyh.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(ad3yh_nboyh).catch((erro) => console.log(erro));

        }

        else if (body === '6') {

            let adhkar_al2dan = fs.readFileSync('./media/text/adhkar_al2dan.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_al2dan).catch((erro) => console.log(erro));

        }

        else if (body === '7') {

            let adhkar_almsgd = fs.readFileSync('./media/text/adhkar_almsgd.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_almsgd).catch((erro) => console.log(erro));

        }

        else if (body === '8') {

            let adhkar_alwdo2 = fs.readFileSync('./media/text/adhkar_alwdo2.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_alwdo2).catch((erro) => console.log(erro));

        }

        else if (body === '9') {

            let adhkar_home = fs.readFileSync('./media/text/adhkar_home.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_home).catch((erro) => console.log(erro));

        }

        else if (body === '10') {

            let adhkar_al5la = fs.readFileSync('./media/text/adhkar_al5la.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_al5la).catch((erro) => console.log(erro));

        }

        else if (body === '11') {

            let adhkar_food = fs.readFileSync('./media/text/adhkar_food.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhkar_food).catch((erro) => console.log(erro));

        }

        else if (body === '12') {

            let adhka_5tm = fs.readFileSync('./media/text/adhka_5tm.txt', { encoding: 'utf8', flag: 'r' })
            await ctx.reply(adhka_5tm).catch((erro) => console.log(erro));

        }
    }


}