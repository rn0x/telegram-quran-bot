import { video } from '../menu/video.js';
import { photo } from '../menu/photo.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import fs from 'fs-extra';
import moment from 'moment-timezone';


export default function broadcast({ client, Markup }) {

    try {

        setInterval(async function() {


            const time = moment.tz("Asia/Riyadh").format('LT');
            const time_adhkar_all = ["3:00 PM"];
            const time_video = ["8:00 AM"];
            const time_photo = ["12:00 PM"];
            const time_mp3 = ["9:00 PM"];
            const time_lectures = ["11:00 PM"];
            const time_am = ["6:00 AM"];
            const time_pm = ["6:00 PM"];
            const time_hisn_almuslim = ["2:00 AM"];
            const LecturesJson = fs.readJsonSync('./menu/Lectures.json');
            const QuranJson = fs.readJsonSync('./menu/Quran.json');
            const json = fs.readJsonSync('./db/user.json');
            const user = Object.keys(json);


            if (time_adhkar_all.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                        await client.telegram.sendMessage(lop2, listadk);

                    }

                }

            } else if (time_video.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let listvideo = video[Math.floor(Math.random() * video.length)]
                        await client.telegram.sendVideo(lop2, { url: listvideo });
                    }

                }

            } else if (time_photo.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let listphoto = photo[Math.floor(Math.random() * photo.length)]
                        await client.telegram.sendPhoto(lop2, { url: listphoto });
                    }
                }

            } else if (time_mp3.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let listquran = QuranJson[Math.floor(Math.random() * QuranJson.length)]
                        let msg = `سورة: ${listquran.Surah} 📖\nالقارئ: ${listquran.Author} 🔊`
                        await client.telegram.sendAudio(lop2, { url: listquran.FilePath }, { caption: msg });
                    }
                }

            } else if (time_lectures.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
                        let msg = `✽\n\n${listlectures.Lectures}\n\n`
                        msg += `الشيخ: ${listlectures.Author} 🔊 `
                        await client.telegram.sendVideo(lop2, { url: listlectures.FilePath }, { caption: msg });

                    }
                }

            } else if (time_am.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let URL_MP3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_sbh.mp3'
                        let msg = `أذكار الصباح ☀️\nبصوت إدريس أبكر 🔊`
                        await client.telegram.sendAudio(lop2, { url: URL_MP3 }, { caption: msg });

                    }
                }

            } else if (time_pm.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let URL_MP3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_msa.mp3'
                        let msg = `أذكار المساء 🌑\nبصوت فيصل بن جذيان 🔊`
                        await client.telegram.sendAudio(lop2, { url: URL_MP3 }, { caption: msg })

                    }
                }

            } else if (time_hisn_almuslim.includes(time)) {

                for (let lop2 of user) {

                    let info_admin_supergroup = json[lop2].Type === 'supergroup' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let info_admin_channel = json[lop2].Type === 'channel' ? await client.telegram.getChatAdministrators(lop2) : undefined;
                    let type_private = json[lop2].Type === 'private';
                    let type_supergroup = json[lop2].Type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === client.botInfo.id && fl.status === 'administrator') : false;
                    let type_channel = json[lop2].Type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === client.botInfo.id && fl.can_post_messages === true) : false;

                    if (type_private || type_supergroup || type_channel) {

                        let hisn_almuslim_json = fs.readJsonSync('./menu/hisn_almuslim.json');
                        let key = Object.keys(hisn_almuslim_json);
                        let list_hisn_almuslim = key[Math.floor(Math.random() * key.length)]
                        let msg = `<b>✽ ${list_hisn_almuslim}</b>\n\n`

                        for (let lop of hisn_almuslim_json[list_hisn_almuslim].text) {

                            msg += `<b>${lop}</b>\n`
        
                        }
        
                        msg += '\n\n\n\n________\n\n'
        
                        for (let lop2 of hisn_almuslim_json[list_hisn_almuslim].footnote) {
        
                            msg += `${lop2}\n`
        
                        }
                        await client.telegram.sendMessage(lop2, msg, { parse_mode: 'HTML' })

                    }
                }

            }

        }, 60000);

    } catch (error) {

        if (error.response.description === "Bad Request: group chat was upgraded to a supergroup chat") {

            let id_new = error.response.parameters.migrate_to_chat_id
            let id_old = error.on.payload.chat_id

            delete Object.assign(json, {
                [id_new]: json[id_old]
            })[id_old]
            json[id_new].id = id_new
            fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });

            console.log(`ID has changed \n\n id old: ${id_old}\n id new: ${id_new}`);
        } else if (error.response.description === "Forbidden: user is deactivated") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });
            console.log(`Remove Id ${id_user}`);
        } else if (error.response.description === "Bad Request: need administrator rights in the channel chat") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });
            console.log(`Remove Id ${id_user}`);
        } else if (error.response.description === "Forbidden: bot was blocked by the user") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });
            console.log(`Remove Id ${id_user}`);
        }

        console.log(error);

    }
}