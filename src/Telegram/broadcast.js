const moment = require('moment');
const fs = require('fs-extra');
const path = require('path');
const Error = require('./Error.js');

module.exports = async function broadcast(bot, Path_appDate, Path_Local) {

    setInterval(async function () {


        const time = moment().format('LT');
        const time_adhkar_all = ["3:00 PM"];
        const time_video = ["8:00 AM"];
        const time_photo = ["12:00 PM"];
        const time_mp3 = ["9:00 PM"];
        const time_lectures = ["11:00 PM"];
        const time_am = ["6:00 AM"];
        const time_pm = ["6:00 PM"];
        const time_hisn_almuslim = ["2:00 AM"];
        const LecturesJson = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Lectures.json'));
        const adhkar_all = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/adhkar.json'));
        const photo = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Photo_Json.json'));
        const video = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Video_json.json'));
        const QuranJson = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/Quran.json'));
        const json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        const user = Object.keys(json);


        if (time_adhkar_all.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let random = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                        let message = `${random.category} \n\n\n`
                        message += `${random.zekr}`
                        message += `${random.description !== '' ? `\n\n ${random.description}` : ''}`
                        message += `${random.count !== '' ? `\n\nعدد التكرار: ${random.count}` : ''}`
                        message += `${random.reference !== '' ? `\n\n ${random.reference}` : ''}`
                        await bot.telegram.sendMessage(lop2, message)
                        .catch(error => Error(error, Path_appDate));

                    }

                }

            }

        } else if (time_video.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let listvideo = video[Math.floor(Math.random() * video.length)]
                        await bot.telegram.sendVideo(lop2, { url: listvideo })
                        .catch(error => Error(error, Path_appDate));

                    }
                }

            }

        } else if (time_photo.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let listphoto = photo[Math.floor(Math.random() * photo.length)]
                        await bot.telegram.sendPhoto(lop2, { url: listphoto })
                        .catch(error => Error(error, Path_appDate));

                    }
                }
            }

        } else if (time_mp3.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let listquran = QuranJson[Math.floor(Math.random() * QuranJson.length)]
                        let caption = `<b>▪سورة: ${listquran.Surah} 📖</b>\nالقارئ: ${listquran.Author} 🔊`
                        await bot.telegram.sendAudio(lop2, { url: listquran.FilePath }, { caption: caption, parse_mode: 'HTML' })
                        .catch(error => Error(error, Path_appDate));
                    }
                }
            }

        } else if (time_lectures.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
                        let msg = `<b>▪${listlectures.Lectures}</b>\n\n`
                        msg += `الشيخ: ${listlectures.Author} 🔊 `
                        await bot.telegram.sendVideo(lop2, { url: listlectures.FilePath }, { caption: msg, parse_mode: 'HTML' })
                        .catch(error => Error(error, Path_appDate));
                    }

                }
            }

        } else if (time_am.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let URL_MP3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_sbh.mp3'
                        let msg = `<b>▪أذكار الصباح ☀️</b>\nبصوت إدريس أبكر 🔊`
                        await bot.telegram.sendAudio(lop2, { url: URL_MP3 }, { caption: msg, parse_mode: 'HTML' })
                        .catch(error => Error(error, Path_appDate));
                    }

                }
            }

        } else if (time_pm.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let URL_MP3 = 'http://bot.altaqwaa.org/media/adhkar_mp3/Adhkar_msa.mp3'
                        let msg = `<b>▪أذكار المساء 🌑</b>\nبصوت فيصل بن جذيان 🔊`
                        await bot.telegram.sendAudio(lop2, { url: URL_MP3 }, { caption: msg, parse_mode: 'HTML' })
                        .catch(error => Error(error, Path_appDate));
                    }

                }
            }

        } else if (time_hisn_almuslim.includes(time)) {

            for (let lop2 of user) {

                let info_admin_supergroup = json[lop2].type === 'supergroup' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let info_admin_channel = json[lop2].type === 'channel' ? await bot.telegram.getChatAdministrators(lop2) : undefined;
                let type_private = json[lop2].type === 'private';
                let type_supergroup = json[lop2].type === 'supergroup' && info_admin_supergroup !== undefined ? info_admin_supergroup.some(fl => fl.user.id === bot.botInfo.id && fl.status === 'administrator') : false;
                let type_channel = json[lop2].type === 'channel' && info_admin_channel !== undefined ? info_admin_channel.some(fl => fl.user.id === bot.botInfo.id && fl.can_post_messages === true) : false;

                if (type_private || type_supergroup || type_channel) {

                    if (json[lop2].broadcast !== false) {

                        let hisn_almuslim_json = fs.readJSONSync(path.join(Path_Local, '/src/Telegram/button/hisn_almuslim.json'));
                        let key = Object.keys(hisn_almuslim_json);
                        let list_hisn_almuslim = key[Math.floor(Math.random() * key.length)]
                        let msg = `<b>▪ ${list_hisn_almuslim}</b>\n\n`

                        for (let lop of hisn_almuslim_json[list_hisn_almuslim].text) {

                            msg += `<b>${lop}</b>\n`

                        }

                        msg += '\n\n\n\n________\n\n'

                        for (let lop2 of hisn_almuslim_json[list_hisn_almuslim].footnote) {

                            msg += `${lop2}\n`

                        }
                        await bot.telegram.sendMessage(lop2, msg, { parse_mode: 'HTML' })
                        .catch(error => Error(error, Path_appDate));

                    }
                }
            }

        }

    }, 60000);

}