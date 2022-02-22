import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';
import Error from "../menu/error.js";

export const quran_menu = {

    async exec({ from, body, ctx }) {

        if (body === '1') {

            MenuNmber(from, 2)
            let quran_idr = fs.readFileSync('./media/text/quran_1.txt', { encoding: 'utf8', flag: 'r' })
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((error) => {
                Error(error);
                console.log(error);
            });

        }

        else if (body === '2') {

            MenuNmber(from, 3)

            let quran_idr = fs.readFileSync('./media/text/quran_2.txt', { encoding: 'utf8', flag: 'r' })
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((error) => {
                Error(error);
                console.log(error);
            });

        }

        else if (body === '3') {

            MenuNmber(from, 4)

            let quran_idr = fs.readFileSync('./media/text/quran_3.txt', { encoding: 'utf8', flag: 'r' })
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((error) => {
                Error(error);
                console.log(error);
            });

        }

        else if (body === '4') {

            MenuNmber(from, 5)

            let quran_idr = fs.readFileSync('./media/text/quran_4.txt', { encoding: 'utf8', flag: 'r' })
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((error) => {
                Error(error);
                console.log(error);
            });

        }

        else if (body === '5') {

            MenuNmber(from, 7)

            let quran_idr = fs.readFileSync('./media/text/quran_5.txt', { encoding: 'utf8', flag: 'r' })
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((error) => {
                Error(error);
                console.log(error);
            });

        }

        else if (body === '6') {

            MenuNmber(from, 8)

            let quran_idr = fs.readFileSync('./media/text/quran_6.txt', { encoding: 'utf8', flag: 'r' })
            let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
            home += '【 للرجوع للخلف أرسل * 】'
            await ctx.reply(`${quran_idr}\n ${home}`).catch((error) => {
                Error(error);
                console.log(error);
            });

        }
    }

}