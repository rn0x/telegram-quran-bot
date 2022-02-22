import fs from 'fs-extra';
import Error from "../menu/error.js";


export const hisn_almuslim = {

    async exec({ ctx, body }) {

        try {


            let hisn_almuslim_json = fs.readJsonSync('./menu/hisn_almuslim.json');
            let key = Object.keys(hisn_almuslim_json);

            if (body === '1') {

                let msg = `<b>✽ ${key[0]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[0]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[0]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '2') {

                let msg = `<b>✽ ${key[1]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[1]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[1]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '3') {

                let msg = `<b>✽ ${key[2]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[2]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[2]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '4') {

                let msg = `<b>✽ ${key[3]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[3]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[3]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '5') {

                let msg = `<b>✽ ${key[4]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[4]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[4]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '6') {

                let msg = `<b>✽ ${key[5]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[5]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[5]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '7') {

                let msg = `<b>✽ ${key[6]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[6]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[6]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '8') {

                let msg = `<b>✽ ${key[7]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[7]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[7]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '9') {

                let msg = `<b>✽ ${key[8]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[8]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[8]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '10') {

                let msg = `<b>✽ ${key[9]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[9]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[9]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '11') {

                let msg = `<b>✽ ${key[10]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[10]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[10]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '12') {

                let msg = `<b>✽ ${key[11]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[11]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[11]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '13') {

                let msg = `<b>✽ ${key[12]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[12]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[12]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '14') {

                let msg = `<b>✽ ${key[13]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[13]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[13]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '15') {

                let msg = `<b>✽ ${key[14]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[14]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[14]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '16') {

                let msg = `<b>✽ ${key[15]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[15]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[15]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '17') {

                let msg = `<b>✽ ${key[16]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[16]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[16]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '18') {

                let msg = `<b>✽ ${key[17]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[17]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[17]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '19') {

                let msg = `<b>✽ ${key[18]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[18]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[18]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '20') {

                let msg = `<b>✽ ${key[19]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[19]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[19]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '21') {

                let msg = `<b>✽ ${key[20]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[20]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[20]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '22') {

                let msg = `<b>✽ ${key[21]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[21]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[21]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '23') {

                let msg = `<b>✽ ${key[22]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[22]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[22]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '24') {

                let msg = `<b>✽ ${key[23]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[23]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[23]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '25') {

                let msg = `<b>✽ ${key[24]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[24]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[24]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '26') {

                let msg = `<b>✽ ${key[25]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[25]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[25]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '27') {

                let msg = `<b>✽ ${key[26]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[26]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[26]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '28') {

                let msg = `<b>✽ ${key[27]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[27]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[27]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '29') {

                let msg = `<b>✽ ${key[28]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[28]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[28]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '30') {

                let msg = `<b>✽ ${key[29]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[29]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[29]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '31') {

                let msg = `<b>✽ ${key[30]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[30]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[30]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '32') {

                let msg = `<b>✽ ${key[31]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[31]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[31]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '33') {

                let msg = `<b>✽ ${key[32]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[32]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[32]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '34') {

                let msg = `<b>✽ ${key[33]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[33]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[33]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '35') {

                let msg = `<b>✽ ${key[34]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[34]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[34]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '36') {

                let msg = `<b>✽ ${key[35]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[35]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[35]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '37') {

                let msg = `<b>✽ ${key[36]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[36]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[36]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '38') {

                let msg = `<b>✽ ${key[37]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[37]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[37]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '39') {

                let msg = `<b>✽ ${key[38]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[38]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[38]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '40') {

                let msg = `<b>✽ ${key[39]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[39]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[39]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '41') {

                let msg = `<b>✽ ${key[40]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[40]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[40]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '42') {

                let msg = `<b>✽ ${key[41]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[41]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[41]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '43') {

                let msg = `<b>✽ ${key[42]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[42]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[42]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '44') {

                let msg = `<b>✽ ${key[43]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[43]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[43]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '45') {

                let msg = `<b>✽ ${key[44]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[44]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[44]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '46') {

                let msg = `<b>✽ ${key[45]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[45]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[45]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '47') {

                let msg = `<b>✽ ${key[46]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[46]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[46]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '48') {

                let msg = `<b>✽ ${key[47]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[47]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[47]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '49') {

                let msg = `<b>✽ ${key[48]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[48]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[48]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '50') {

                let msg = `<b>✽ ${key[49]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[49]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[49]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '51') {

                let msg = `<b>✽ ${key[50]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[50]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[50]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '52') {

                let msg = `<b>✽ ${key[51]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[51]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[51]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '53') {

                let msg = `<b>✽ ${key[52]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[52]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[52]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '54') {

                let msg = `<b>✽ ${key[53]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[53]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[53]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '55') {

                let msg = `<b>✽ ${key[54]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[54]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[54]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '56') {

                let msg = `<b>✽ ${key[55]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[55]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[55]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '57') {

                let msg = `<b>✽ ${key[56]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[56]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[56]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '58') {

                let msg = `<b>✽ ${key[57]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[57]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[57]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '59') {

                let msg = `<b>✽ ${key[58]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[58]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[58]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '60') {

                let msg = `<b>✽ ${key[59]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[59]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[59]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '61') {

                let msg = `<b>✽ ${key[60]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[60]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[60]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '62') {

                let msg = `<b>✽ ${key[61]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[61]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[61]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '63') {

                let msg = `<b>✽ ${key[62]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[62]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[62]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '64') {

                let msg = `<b>✽ ${key[63]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[63]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[63]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '65') {

                let msg = `<b>✽ ${key[64]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[64]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[64]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '66') {

                let msg = `<b>✽ ${key[65]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[65]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[65]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '67') {

                let msg = `<b>✽ ${key[66]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[66]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[66]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '68') {

                let msg = `<b>✽ ${key[67]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[67]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[67]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '69') {

                let msg = `<b>✽ ${key[68]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[68]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[68]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '70') {

                let msg = `<b>✽ ${key[69]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[69]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[69]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '71') {

                let msg = `<b>✽ ${key[70]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[70]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[70]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '72') {

                let msg = `<b>✽ ${key[71]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[71]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[71]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '73') {

                let msg = `<b>✽ ${key[72]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[72]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[72]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '74') {

                let msg = `<b>✽ ${key[73]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[73]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[73]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '75') {

                let msg = `<b>✽ ${key[74]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[74]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[74]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '76') {

                let msg = `<b>✽ ${key[75]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[75]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[75]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '77') {

                let msg = `<b>✽ ${key[76]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[76]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[76]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '78') {

                let msg = `<b>✽ ${key[77]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[77]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[77]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '79') {

                let msg = `<b>✽ ${key[78]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[78]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[78]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '80') {

                let msg = `<b>✽ ${key[79]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[79]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[79]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '81') {

                let msg = `<b>✽ ${key[80]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[80]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[80]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '82') {

                let msg = `<b>✽ ${key[81]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[81]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[81]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '83') {

                let msg = `<b>✽ ${key[82]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[82]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[82]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '84') {

                let msg = `<b>✽ ${key[83]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[83]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[83]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '85') {

                let msg = `<b>✽ ${key[84]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[84]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[84]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '86') {

                let msg = `<b>✽ ${key[85]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[85]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[85]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '87') {

                let msg = `<b>✽ ${key[86]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[86]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[86]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '88') {

                let msg = `<b>✽ ${key[87]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[87]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[87]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '89') {

                let msg = `<b>✽ ${key[88]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[88]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[88]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '90') {

                let msg = `<b>✽ ${key[89]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[89]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[89]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '91') {

                let msg = `<b>✽ ${key[90]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[90]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[90]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '92') {

                let msg = `<b>✽ ${key[91]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[91]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[91]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '93') {

                let msg = `<b>✽ ${key[92]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[92]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[92]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '94') {

                let msg = `<b>✽ ${key[93]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[93]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[93]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '95') {

                let msg = `<b>✽ ${key[94]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[94]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[94]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '96') {

                let msg = `<b>✽ ${key[95]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[95]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[95]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '97') {

                let msg = `<b>✽ ${key[96]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[96]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[96]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '98') {

                let msg = `<b>✽ ${key[97]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[97]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[97]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '99') {

                let msg = `<b>✽ ${key[98]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[98]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[98]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '100') {

                let msg = `<b>✽ ${key[99]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[99]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[99]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '101') {

                let msg = `<b>✽ ${key[100]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[100]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[100]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '102') {

                let msg = `<b>✽ ${key[101]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[101]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[101]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '103') {

                let msg = `<b>✽ ${key[102]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[102]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[102]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '104') {

                let msg = `<b>✽ ${key[103]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[103]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[103]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '105') {

                let msg = `<b>✽ ${key[104]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[104]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[104]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '106') {

                let msg = `<b>✽ ${key[105]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[105]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[105]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '107') {

                let msg = `<b>✽ ${key[106]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[106]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[106]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '108') {

                let msg = `<b>✽ ${key[107]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[107]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[107]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '109') {

                let msg = `<b>✽ ${key[108]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[108]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[108]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '110') {

                let msg = `<b>✽ ${key[109]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[109]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[109]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '111') {

                let msg = `<b>✽ ${key[110]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[110]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[110]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '112') {

                let msg = `<b>✽ ${key[111]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[111]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[111]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '113') {

                let msg = `<b>✽ ${key[112]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[112]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[112]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '114') {

                let msg = `<b>✽ ${key[113]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[113]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[113]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '115') {

                let msg = `<b>✽ ${key[114]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[114]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[114]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '116') {

                let msg = `<b>✽ ${key[115]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[115]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[115]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '117') {

                let msg = `<b>✽ ${key[116]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[116]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[116]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '118') {

                let msg = `<b>✽ ${key[117]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[117]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[117]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '119') {

                let msg = `<b>✽ ${key[118]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[118]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[118]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '120') {

                let msg = `<b>✽ ${key[119]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[119]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[119]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '121') {

                let msg = `<b>✽ ${key[120]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[120]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[120]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '122') {

                let msg = `<b>✽ ${key[121]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[121]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[121]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '123') {

                let msg = `<b>✽ ${key[122]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[122]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[122]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '124') {

                let msg = `<b>✽ ${key[123]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[123]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[123]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '125') {

                let msg = `<b>✽ ${key[124]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[124]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[124]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '126') {

                let msg = `<b>✽ ${key[125]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[125]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[125]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '127') {

                let msg = `<b>✽ ${key[126]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[126]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[126]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '128') {

                let msg = `<b>✽ ${key[127]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[127]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[127]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '129') {

                let msg = `<b>✽ ${key[128]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[128]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[128]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '130') {

                let msg = `<b>✽ ${key[129]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[129]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[129]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '131') {

                let msg = `<b>✽ ${key[130]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[130]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[130]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '132') {

                let msg = `<b>✽ ${key[131]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[131]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[131]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '133') {

                let msg = `<b>✽ ${key[132]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[132]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[132]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


            else if (body === '134') {

                let msg = `<b>✽ ${key[133]}</b>\n\n`

                for (let lop of hisn_almuslim_json[key[133]].text) {

                    msg += `<b>${lop}</b>\n`

                }

                msg += '\n\n\n\n________\n\n'

                for (let lop2 of hisn_almuslim_json[key[133]].footnote) {

                    msg += `${lop2}\n`

                }

                await ctx.reply(msg, { parse_mode: 'HTML' }).catch((error) => {
                    Error(error);
                    console.log(error);
                });
            }


        } catch (error) {

            console.log(error);

        }

    }
}