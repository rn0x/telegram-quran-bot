import pkg from "telegraf";
import fs from 'fs-extra';
import moment from 'moment-timezone';
import figlet from 'figlet';
import input from "input";
import { menu_number } from './lib/menu_number.js';
import { video } from './menu/video.js';
import { photo } from './menu/photo.js';
import { sticker } from './menu/sticker.js';
import broadcast from './lib/broadcast.js';
import getMenu from './lib/getMenu.js';
import MenuNmber from './lib/MenuNmber.js';

const { Telegraf, Markup, Extra } = pkg;

console.log(figlet.textSync('Bot Adhkar'));
console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'))
console.log("               Telegram @BinAttia ")


if (fs.existsSync('./token.json') === false) {

    let token = await input.text("Please enter your token: ");
    fs.writeJsonSync('./token.json', { token: token });

}

if (fs.existsSync('./db') === false) {

    fs.mkdirSync('./db', { recursive: true });

}

if (fs.existsSync('./db/user.json') === false) {

    fs.writeJsonSync('./db/user.json', {});

}

if (fs.existsSync('./db/Menu.json') === false) {

    fs.writeJsonSync('./db/Menu.json', {});

}

if (fs.existsSync('./db/admin.json') === false) {

    fs.writeJsonSync('./db/admin.json', []);

}

const tokenjson = await fs.readJson('./token.json').catch((error) => console.log(error));
const options = { channelMode: true, polling: true }
const client = new Telegraf(tokenjson.token, options);



client.start(async(ctx) => {


    let from = ctx.chat.id
    MenuNmber(from, 0)
    await getMenu(from);
    let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'), Markup.button.callback('أذكار 📿', 'adhkar')];
    let but_2 = [Markup.button.callback('فيديو 🎥', 'video'), Markup.button.callback('صور 🖼️', 'photo'), Markup.button.callback('ملصق 🪧', 'sticker')];
    let but_3 = [Markup.button.callback('سؤال ⁉️', 'question'), Markup.button.callback('محاضرات 🌾', 'Lectures'), Markup.button.callback('بطاقات 🎴', 'albitaqat')];
    let button = Markup.inlineKeyboard([but_1, but_2, but_3]);
    let pushname = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : '';
    let user = fs.readJsonSync('./db/user.json');
    let channel = []
    let supergroup = []

    for (let lop of Object.keys(user)) {

        if (user[lop].Type === 'channel') {

            channel.push(lop)

        } else if (user[lop].Type === 'supergroup') {

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
    mesg += '8- بطاقات القرآن 🎴 \n\n\n\n'
    mesg += 'إحصائيات البوت \n'
    mesg += `عدد المحادثات : ${Object.keys(user).length}\n`
    mesg += `عدد المجموعات : ${supergroup.length}\n`
    mesg += `عدد القنوات : ${channel.length}\n\n`
    mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
    mesg += 'يمكنك متابعة البوت على واتساب عبر الرقم 966502054247 🤖'

    await ctx.reply(mesg, button).catch((erro) => console.log(erro));

});

client.command('bt', async(ctx) => {

    let admin = fs.readJsonSync('./db/admin.json');

    if (ctx.message.chat.id === 1061237219 || admin.some(fx => ctx.message.chat.id.toString().includes(fx))) {

        let user = fs.readJsonSync('./db/user.json');
        let msg = ctx.message.text.slice(3) ? ctx.message.text.slice(3) : undefined

        if (msg === undefined) {

            await ctx.reply("من فضلك أكتب الامر /bt ثم الرسالة التي تريد نشرها ")
        } else if (msg !== undefined) {

            for (let lop of Object.keys(user)) {

                await client.telegram.sendMessage(lop, msg)
                    .catch((err) => console.log(err));
            }
        }


    } else { await ctx.reply("لايمكن بث الرسائل الى جميع المشتركين إلا من قبل مشرفي البوت"); }

});

client.command('addadmin', async(ctx) => {

    let admin = fs.readJsonSync('./db/admin.json');

    if (ctx.message.chat.id === 1061237219 || admin.some(fx => ctx.message.chat.id.toString().includes(fx))) {

        let admin = fs.readJsonSync('./db/admin.json');
        let id = ctx.message.text.slice(10) ? ctx.message.text.slice(10) : undefined

        if (id === undefined) {

            await ctx.reply("من فضلك أكتب الامر /addadmin ثم الآي دي الذي تريد تعيينة كمشرف للبوت ")
        } else if (!admin.includes(id) && id !== undefined) {

            admin.push(id)
            fs.writeJsonSync('./db/admin.json', admin, { spaces: '\t' })
            await ctx.reply(`تم تعيين ${id} الى مشرف`)
        }


    } else { await ctx.reply("لايمكن إستعمال الأمر إلا من قبل مشرفي البوت"); }

});

client.on("my_chat_member", async(ctx) => {

    let from = ctx.chat.id;
    let username = ctx.chat.username ? ctx.chat.username : null;
    let name = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : null;
    let type = ctx.chat.type
    let user = fs.readJsonSync('./db/user.json');
    let info = {

        [from]: {

            "id": from,
            "Username": username,
            "Name": name,
            "Type": type
        }

    }

    if (ctx.update.my_chat_member.new_chat_member.status === 'left' || ctx.update.my_chat_member.new_chat_member.status === 'kicked') {

        if (Object.keys(user).includes(from.toString())) {

            delete user[from]
            fs.writeJsonSync('./db/user.json', user, { spaces: '\t' })
            console.log(`Remove Id ${from}`)
        }
    } else if (ctx.update.my_chat_member.new_chat_member.status === 'member' || ctx.update.my_chat_member.new_chat_member.status === 'administrator') {

        let msg = ctx.chat.username ? `مرحباً بك @${username} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي` : `مرحباً بك ${name} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي`;

        if (!Object.keys(user).includes(from.toString())) {
            MenuNmber(from, 0)
            fs.writeJsonSync('./db/user.json', Object.assign({}, user, info), { spaces: '\t' });
            ctx.update.my_chat_member.new_chat_member.can_post_messages === true || type === 'private' ? await ctx.reply(msg)
                .then(async(data) => {

                    ctx.update.my_chat_member.new_chat_member.can_delete_messages === true ? setTimeout(async() => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)), 20000) : ''
                })
                .catch((err) => console.log(err)) : ''
            console.log(`Add Id ${from}`)
        }

    }


});

client.on("new_chat_members", async(ctx) => {

    let me = ctx.botInfo
    let admin = await ctx.getChatAdministrators().catch((error) => console.log(error));
    let members = ctx.update.message.new_chat_members[0];
    let u_f_i = members.username ? members.username : members.first_name ? members.first_name : members.id ? members.id : '';

    for (let lop of admin) {

        if (lop.user.id === me.id) {

            // let url = await ctx.exportChatInviteLink()
            // let but_1 = [Markup.button.url('رابط المجموعة', url)]
            // let button = Markup.inlineKeyboard([but_1]);
            let msg = members.username ? `مرحباً بك @${u_f_i} 👋\nفي مجموعة ${ctx.message.chat.title}` : `مرحباً بك ${u_f_i} 👋\nفي مجموعة ${ctx.message.chat.title}`;

            lop.can_delete_messages === true ? await ctx.deleteMessage().catch(async(err) => console.log(err)) : '';
            lop.can_delete_messages === true ? await ctx.reply(msg)
                .then(async(data) => {

                    setTimeout(async() => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)), 20000)
                }) : ''

        }
    }

});

client.on("left_chat_member", async(ctx) => {

    if (ctx.message.left_chat_member.is_bot === false) {

        let me = ctx.botInfo
        let admin = await ctx.getChatAdministrators().catch((error) => console.log(error));
        let members = ctx.message.left_chat_member;
        let u_f_i = members.username ? members.username : members.first_name ? members.first_name : members.id ? members.id : '';

        for (let lop of admin) {

            if (lop.user.id === me.id) {

                let msg = members.username ? `مع السلامة @${u_f_i} 👋` : `مع السلامة ${u_f_i} 👋`;

                lop.can_delete_messages === true ? await ctx.deleteMessage().catch(async(err) => console.log(err)) : '';
                lop.can_delete_messages === true ? await ctx.reply(msg)
                    .then(async(data) => {

                        setTimeout(async() => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)), 20000)
                    }) : ''

            }
        }
    }


});

client.on("message", async(ctx) => {

    let Menu = fs.readJsonSync('./db/Menu.json');
    if (!Object.keys(Menu).includes(ctx.chat.id.toString())) {

        MenuNmber(ctx.chat.id, 0);
    }

    let message_id = ctx.message.message_id;
    let body = ctx.message.text ? ctx.message.text : ctx.message.caption ? ctx.message.caption : ''
    let from = ctx.chat.id;
    let username = ctx.from.username ? ctx.from.username : null;
    let name = ctx.from.first_name ? ctx.from.first_name : ctx.from.last_name ? ctx.from.last_name : ctx.from.title ? ctx.from.title : null;
    let Menufrom = await getMenu(from);
    let user = fs.readJsonSync('./db/user.json');
    let type = ctx.chat.type
    let admin = fs.readJsonSync('./db/admin.json');
    let body_no = ["hi", "Hi", "#", "خدمة", "*", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ]
    let info = {

        [from]: {

            "id": from,
            "Username": username,
            "Name": name,
            "Type": type
        }

    }

    menu_number[Menufrom].menu_name.exec({

        from: from,
        body: body,
        pushname: name,
        id: message_id,
        Markup: Markup,
        ctx: ctx,
        client: client,

    });

    if (!Object.keys(user).includes(from.toString())) {
        fs.writeJsonSync('./db/user.json', Object.assign({}, user, info), { spaces: '\t' });
        console.log(`Add Id ${from}`)
    } else if (type === 'private' && !body_no.some(fx => body.includes(fx)) && from !== 1061237219) {

        for (let lop of admin) {

            await ctx.forwardMessage(lop)
                .catch((error) => console.log(error));

        }

    } else if (ctx.message.reply_to_message && ctx.message.reply_to_message.forward_from !== undefined && admin.some(fx => from.toString().includes(fx))) {

        let from = await ctx.message.reply_to_message.forward_from.id
        let message_id = await ctx.message.reply_to_message.message_id
        let text = await ctx.message.text

        await client.telegram.sendMessage(from, text, { reply_to_message_id: message_id })
            .catch(async(er) => {
                await client.telegram.sendMessage(er.on.payload.chat_id, er.on.payload.text)
            });


    }

});


client.action('quran', async(ctx) => {

    let but_1 = [Markup.button.callback('أدريس أبكر', 'idris'), Markup.button.callback('ماهر المعيقلي', 'mahar')];
    let but_2 = [Markup.button.callback('عبد الله الموسى', 'almosa'), Markup.button.callback('علي جابر', 'alli')];
    let but_3 = [Markup.button.callback('عبدالرحمن السديس', 'Alsudais'), Markup.button.callback('خالد الجليل', 'Galilee')];
    let but_4 = [Markup.button.callback('رجوع', 'start')]
    let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 1);
    let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
    quran_menu += '1- أدريس أبكر \n'
    quran_menu += '2- ماهر المعيقلي \n'
    quran_menu += '3- عبدالله الموسى \n'
    quran_menu += '4- علي جابر \n'
    quran_menu += '5- عبدالرحمن السديس \n'
    quran_menu += '6- خالد الجليل \n\n\n'
    quran_menu += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'

    await ctx.reply(quran_menu, button).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('idris', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 2);
    let quran_idr = fs.readFileSync('./media/text/quran_1.txt', { encoding: 'utf8', flag: 'r' })
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('mahar', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 3);
    let quran_idr = fs.readFileSync('./media/text/quran_2.txt', { encoding: 'utf8', flag: 'r' })
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('alli', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 5);
    let quran_idr = fs.readFileSync('./media/text/quran_4.txt', { encoding: 'utf8', flag: 'r' })
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('almosa', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 4);
    let quran_idr = fs.readFileSync('./media/text/quran_3.txt', { encoding: 'utf8', flag: 'r' })
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('Alsudais', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 7);
    let quran_idr = fs.readFileSync('./media/text/quran_5.txt', { encoding: 'utf8', flag: 'r' })
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('Galilee', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 8);
    let quran_idr = fs.readFileSync('./media/text/quran_6.txt', { encoding: 'utf8', flag: 'r' })
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('start', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 0);
    let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'), Markup.button.callback('أذكار 📿', 'adhkar')];
    let but_2 = [Markup.button.callback('فيديو 🎥', 'video'), Markup.button.callback('صور 🖼️', 'photo'), Markup.button.callback('ملصق 🪧', 'sticker')];
    let but_3 = [Markup.button.callback('سؤال ⁉️', 'question'), Markup.button.callback('محاضرات 🌾', 'Lectures'), Markup.button.callback('بطاقات 🎴', 'albitaqat')];
    let button = Markup.inlineKeyboard([but_1, but_2, but_3]);
    let pushname = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : '';
    let user = fs.readJsonSync('./db/user.json');
    let channel = []
    let supergroup = []

    for (let lop of Object.keys(user)) {

        if (user[lop].Type === 'channel') {

            channel.push(lop)

        } else if (user[lop].Type === 'supergroup') {

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
    mesg += '8- بطاقات القرآن 🎴 \n\n\n\n'
    mesg += 'إحصائيات البوت \n'
    mesg += `عدد المحادثات : ${Object.keys(user).length}\n`
    mesg += `عدد المجموعات : ${supergroup.length}\n`
    mesg += `عدد القنوات : ${channel.length}\n\n`
    mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
    mesg += 'يمكنك متابعة البوت على واتساب عبر الرقم 966502054247 🤖'

    await ctx.reply(mesg, button).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('adhkar', async(ctx) => {

    let from = ctx.chat.id
    await getMenu(from);
    MenuNmber(from, 6);
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

    await ctx.reply(adhkar_menu).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('photo', async(ctx) => {

    let but_1 = [Markup.button.callback('التالي', 'photo'), Markup.button.callback('رجوع', 'start')];
    let button = Markup.inlineKeyboard([but_1]);
    let listphoto = photo[Math.floor(Math.random() * photo.length)]
    await ctx.replyWithPhoto({ url: listphoto }, button)
        .catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('video', async(ctx) => {

    let but_1 = [Markup.button.callback('التالي', 'video'), Markup.button.callback('رجوع', 'start')];
    let button = Markup.inlineKeyboard([but_1]);
    let listvideo = video[Math.floor(Math.random() * video.length)]
    await ctx.replyWithVideo({ url: listvideo }, button)
        .catch((erro) => console.log(erro));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('sticker', async(ctx) => {

    let but_1 = [Markup.button.callback('التالي', 'sticker'), Markup.button.callback('رجوع', 'start')];
    let button = Markup.inlineKeyboard([but_1]);
    let liststicker = sticker[Math.floor(Math.random() * sticker.length)]
    await ctx.replyWithSticker({ url: liststicker }, button)
        .catch((erro) => console.log(erro));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('albitaqat', async(ctx) => {

    let from = ctx.chat.id;
    getMenu(from);
    MenuNmber(from, 9);
    let but_1 = [Markup.button.callback('رجوع', 'start')];
    let button = Markup.inlineKeyboard([but_1]);
    let msg = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مقروؤاً ومرئياً \n\n'
    msg += 'محتوياتُ (البِطَاقَات):\n\n'
    msg += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
    msg += '1- آيَـــــــــــــــاتُـــــها \n'
    msg += '2- مَعــــــنَـى اسْـــــــمِها \n'
    msg += '3- سَبَبُ تَسْمِيَتِها \n'
    msg += '4- أَسْـــــمَاؤُهـا \n'
    msg += '5- مَقْصِدُها العَامُّ \n'
    msg += '6- سَبَبُ نُزُولِهَا \n'
    msg += '7- فَضْــــــلُها \n'
    msg += '8- مُنَــاسَــبَاتُــها \n\n'
    msg += '⚠️ لإرسال البطاقة صورة وصوت قم بإرسال رقم السورة او إسم السورة \n\n\n'
    msg += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'

    await ctx.reply(msg, button).catch((erro) => console.log(erro));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('Lectures', async(ctx) => {

    let but_1 = [
        [Markup.button.callback('التالي', 'Lectures'), Markup.button.callback('رجوع', 'start')]
    ];
    let LecturesJson = fs.readJsonSync('./menu/Lectures.json');
    let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
    let msg = `✽\n\n${listlectures.Lectures}\n\n`
    msg += `الشيخ: ${listlectures.Author} 🔊`
    await ctx.replyWithVideo({ url: listlectures.FilePath }, { caption: msg, reply_markup: { inline_keyboard: but_1 } })
        .catch((erro) => console.log(erro));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('question', async(ctx) => {

    let question = await fs.readJson('./question.json').catch((error) => console.log(error));
    let number = Array.from(question.keys())
    let list = number[Math.floor(Math.random() * number.length)]
    let but_1 = Markup.button.callback(question[list].answer.asr, question[list].answer.id);
    let but_2 = Markup.button.callback(question[list].answer1.asr, question[list].answer1.id);
    let but_3 = Markup.button.callback(question[list].answer2.asr, question[list].answer2.id);
    let but_4 = [Markup.button.callback('التالي', 'question'), Markup.button.callback('رجوع', 'start')];
    let but = [
        [
            [but_1],
            [but_2],
            [but_3], but_4
        ],
        [
            [but_2],
            [but_1],
            [but_3], but_4
        ],
        [
            [but_3],
            [but_1],
            [but_2], but_4
        ],
        [
            [but_2],
            [but_3],
            [but_1], but_4
        ],
        [
            [but_1],
            [but_3],
            [but_2], but_4
        ]
    ]
    let random = but[Math.floor(Math.random() * but.length)]
    let button = Markup.inlineKeyboard(random);

    await ctx.reply(question[list].question, button)
        .catch((error) => console.log(error));

    client.action(question[list].answer.id, async(ctx) => {

        await ctx.reply("إجابة صحيحة ✔️")
            .then(async(data) => setTimeout(async() => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)), 10000))
            .catch((error) => console.log(error));

    });

    client.action(question[list].answer1.id, async(ctx) => {

        await ctx.reply("إجابة خاطئة ❌")
            .then(async(data) => setTimeout(async() => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)), 10000))
            .catch((error) => console.log(error));

    });

    client.action(question[list].answer2.id, async(ctx) => {

        await ctx.reply("إجابة خاطئة ❌")
            .then(async(data) => setTimeout(async() => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)), 10000))
            .catch((error) => console.log(error));

    });

    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.catch(async(err) => {

    console.log(err);

});


broadcast({ client: client, Markup: Markup });

client.launch();