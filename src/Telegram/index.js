const { Telegraf, Markup } = require('telegraf');
const fs = require('fs-extra');
const path = require('path');
const Save_db = require('./Save_db.js');
const button = require('./button.js');
const broadcast = require('./broadcast.js');
const Error = require('./Error.js');

module.exports = async function islam_bot(Path_appDate, Path_Local) {

    let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Settings.json'));
    let options = { channelMode: true, polling: true }
    let bot = new Telegraf(Settings.token, options)

    bot.start(async (ctx) => {

        let id = ctx.chat.id;
        let username = ctx.chat.username ? ctx.chat.username : null;
        let first_name = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : null;
        let type = ctx.chat.type
        let json_true = fs.existsSync(path.join(Path_appDate, '/islam_bot/Users.json'));
        let json = json_true ? fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json')) : undefined;
        json_true && json[id].message_id !== undefined ? ctx.deleteMessage(json[id].message_id) : '';
        let name_bot = ctx.botInfo.first_name
        let channel = []
        let supergroup = []

        for (let lop of Object.keys(json)) {
            if (json[lop].type === 'channel') {
                channel.push(lop)
            } else if (json[lop].type === 'supergroup') {
                supergroup.push(lop)
            }
        }

        let message_start = ` مرحباً بك ${first_name !== null ? first_name : `@${username}`} في بوت ${name_bot} 👋 \n\n`
        message_start += 'يقدم هذا البوت العديد من الخدمات \n\n'
        message_start += '1- القرآن الكريم 📖 \n'
        message_start += '2- الأذكار 📿 \n'
        message_start += '3- فيديوهات قرآن عشوائية 🎥 \n'
        message_start += '4- صورة عشوائية 🖼️ \n'
        message_start += '5- أسماء الله الحسنى ✨ \n'
        message_start += '6- بطاقات القرآن 🎴 \n'
        message_start += '7- حصن المسلم 🏰 \n'
        message_start += '8- محاضرات 🌾 \n\n\n'
        message_start += 'إحصائيات البوت \n\n'
        message_start += `عدد المحادثات : ${Object.keys(json).length}\n`
        message_start += `عدد المجموعات : ${supergroup.length}\n`
        message_start += `عدد القنوات : ${channel.length}\n\n\n`
        message_start += 'قم بالتنقل بين الخدمات  بالضغط على الازرار التي بالأسفل 🔘'
        let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'), Markup.button.callback('حصن المسلم 🏰', 'hisn_almuslim')];
        let but_2 = [Markup.button.callback('أذكار 📿', 'adhkar'), Markup.button.callback('بطاقات 🎴', 'albitaqat')];
        let but_3 = [Markup.button.callback('فيديو 🎥', 'video'), Markup.button.callback('صور 🖼️', 'photo')];
        let but_4 = [Markup.button.callback('محاضرات 🌾', 'Lectures'), Markup.button.callback('أسماء الله الحسنى ✨', 'Names_Of_Allah')];
        let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
        let { message_id } = await ctx.reply(message_start, button);

        if (json_true) {

            json[id].message_id = message_id
            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);

        }

        await Save_db(id, username, first_name, type, Path_appDate);

    });

    bot.on("my_chat_member", async (ctx) => {

        if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Users.json')) === false) {

            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), {});


        }

        else if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Users.json'))) {

            let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));
            let id = ctx.chat.id;
            let username = ctx.chat.username ? ctx.chat.username : null;
            let first_name = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : null;
            let type = ctx.chat.type

            if (ctx.update.my_chat_member.new_chat_member.status === 'member' || ctx.update.my_chat_member.new_chat_member.status === 'administrator') {

                await Save_db(id, username, first_name, type, Path_appDate);

                let message = ctx.chat.username ?
                    `مرحبا @${username} لقد تم تفعيل خدمة إرسال الرسائل بشكل تلقائي \nلتعطيل الخدمة أرسل كلمة تعطيل` :
                    `مرحبا ${first_name} لقد تم تفعيل خدمة إرسال الرسائل بشكل تلقائي \nلتعطيل الخدمة أرسل كلمة تعطيل`;


                if (ctx.update.my_chat_member.new_chat_member.can_post_messages === true || type === 'private') {

                    await ctx.reply(message)

                }

            }

            else if (ctx.update.my_chat_member.new_chat_member.status === 'left' || ctx.update.my_chat_member.new_chat_member.status === 'kicked') {

                if (Object.keys(json).includes(id.toString())) {

                    delete json[id]
                    fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
                }
            }


        }

    });

    bot.on("new_chat_members", async (ctx) => {

        let botinfo = ctx.botInfo
        let admin = await ctx.getChatAdministrators()
        let members = ctx.update.message.new_chat_members[0];
        let u_f_i = members.username ? members.username : members.first_name ? members.first_name : members.id ? members.id : '';

        for (let lop of admin) {

            if (lop.user.id === botinfo.id) {

                let msg = members.username ?
                    `مرحباً بك @${u_f_i} 👋\nفي مجموعة ${ctx.message.chat.title}` :
                    `مرحباً بك ${u_f_i} 👋\nفي مجموعة ${ctx.message.chat.title}`;

                if (lop.can_delete_messages === true) {

                    await ctx.deleteMessage();
                    await ctx.reply(msg)
                        .then(async e => {

                            setTimeout(async () => {

                                await ctx.deleteMessage(e.message_id)

                            }, 20000);

                        })

                }

            }
        }

    });

    bot.on("left_chat_member", async (ctx) => {

        if (ctx.message.left_chat_member.is_bot === false) {

            let botinfo = ctx.botInfo;
            let admin = await ctx.getChatAdministrators();

            for (let lop of admin) {

                if (lop.user.id === botinfo.id) {

                    if (lop.can_delete_messages === true) {

                        await ctx.deleteMessage();

                    }

                }
            }
        }
    });

    bot.on("message", async (ctx) => {

        let body = ctx.message.text ? ctx.message.text : ctx.message.caption ? ctx.message.caption : ''
        let id = ctx.chat.id;
        let username = ctx.chat.username ? ctx.chat.username : null;
        let first_name = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : null;
        let type = ctx.chat.type

        if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Users.json'))) {

            let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));

            if (body === 'تعطيل') {

                if (json[id].broadcast !== false) {

                    let message = 'لقد تم تعطيل الخدمة \nلإعادة التفعيل ارسل كلمة تفعيل'
                    json[id].broadcast = false
                    fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
                    await ctx.reply(message);

                }

                else if (json[id].broadcast === false) {

                    let message = 'الخدمة معطلة بالفعل !'
                    await ctx.reply(message);

                }


            }

            else if (body === 'تفعيل') {


                if (json[id].broadcast === false) {

                    let message = 'لقد تم تفعيل خدمة إرسال الرسائل بشكل تلقائي'
                    json[id].broadcast = undefined
                    fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json);
                    await ctx.reply(message);

                }

                else if (json[id].broadcast == undefined) {

                    let message = 'الخدمة مفعلة بالفعل !'
                    await ctx.reply(message);

                }


            }

        }

        await Save_db(id, username, first_name, type, Path_appDate);


    });

    bot.on("channel_post", async (ctx) => {

        let id = ctx.chat.id;
        let username = ctx.chat.username ? ctx.chat.username : null;
        let first_name = ctx.chat.title;
        let type = ctx.chat.type
        await Save_db(id, username, first_name, type, Path_appDate);

    });


    button(bot, Path_appDate, Markup, Path_Local);
    broadcast(bot, Path_appDate, Path_Local);

    setInterval(async () => {

        if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Settings.json')) === false) {
            bot.stop()
        }

        else if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Settings.json'))) {

            let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Settings.json'));

            if (Settings.start === true && Settings.off_on === 'off') {
                bot.stop()

            }
        }

    }, 1000);


    bot.launch()

    bot.catch(async (error) => {

        Error(error, Path_appDate);

    });

}