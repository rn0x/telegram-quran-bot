import pkg from "telegraf";
import fs from 'fs-extra';
import moment from 'moment-timezone';
import execSh  from 'exec-sh';
import figlet from 'figlet';
import input from "input";
import { menu_number } from './lib/menu_number.js';
import { db_menu } from './lib/db_menu.js';
import { video } from './menu/video.js';
import { photo } from './menu/photo.js';
import { sticker } from './menu/sticker.js';
import broadcast from './lib/broadcast.js';

const { Telegraf, Markup, Extra } = pkg;

console.log(figlet.textSync('Bot Adhkar'));
console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'))
console.log("               Telegram @BinAttia ")


if (fs.existsSync('./token.json') === false ){

    let token = await input.text("Please enter your token: ");
    fs.writeJsonSync('./token.json', {token: token});
  
}

else if (fs.existsSync('./db') === false ){

    fs.mkdirSync('./db', { recursive: true });
    fs.writeJsonSync('./db/user.json', []);
  
}

const tokenjson = await fs.readJson('./token.json').catch((error) => console.log(error));
const options = { channelMode: true, polling: true}
const client = new Telegraf(tokenjson.token, options);


      
client.start(async (ctx) => {

    
    let from = ctx.chat.id
    getMenu({ from: from });
    let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'),Markup.button.callback('أذكار 📿', 'adhkar')];
    let but_2 = [Markup.button.callback('فيديو 🎥', 'video'),Markup.button.callback('صور 🖼️', 'photo'),Markup.button.callback('ملصق 🪧', 'sticker')];
    let but_3 = [Markup.button.callback('سؤال ⁉️', 'question')];
    let button = Markup.inlineKeyboard([but_1, but_2, but_3]);
    let pushname = ctx.from.username ? ctx.from.username : ctx.from.first_name;

    let mesg = `مرحباً بك  @${pushname} 👋 \n`
    mesg += 'من فضلك قم بكتابة (رقم) الخدمة ✉️ \n\n\n'
    mesg += '1- قائمة القرآن الكريم 📖 \n'
    mesg += '2- قائمة الأذكار 📿 \n'
    mesg += '3- فيديو عشوائي 🎥 \n'
    mesg += '4- صورة عشوائية 🖼️ \n'
    mesg += '5- ملصق عشوائي 🪧 \n'
    mesg += '6- سؤال عشوائي ⁉️ \n\n\n'
    
    await ctx.reply(mesg, button).catch((erro) => console.log(erro));

});

client.command('bt', async (ctx) => {

    if (ctx.message.chat.id === 1061237219){

        let user = fs.readJsonSync('./db/user.json');
        let msg = ctx.message.text.slice(3) ? ctx.message.text.slice(3) : undefined

        if (msg === undefined){

            await ctx.reply("من فضلك أكتب الامر /bt ثم الرسالة التي تريد نشرها ")
        }

        else if (msg !== undefined){

            for (let lop of user) {

                await client.telegram.sendMessage(lop, msg)
                .catch((err) => console.log(err));
            }
        }
        
        
    }
  
    else { await ctx.reply("لايمكن بث الرسائل الى جميع المشتركين إلا من قبل مشرفي البوت"); }
  
});

client.on("my_chat_member", async (ctx) => {

    if (ctx.chat.type === 'supergroup' && ctx.update.my_chat_member.new_chat_member.status === 'left'){

        let from = ctx.chat.id
        let user = fs.readJsonSync('./db/user.json');

        if (user.includes(from)) {

            let del = user.indexOf(from);
            user.splice(del, 1)
            fs.writeJsonSync('./db/user.json', user)
            console.log(`Remove Id ${from}`)
        }
    }

    else if (ctx.chat.type === 'private' && ctx.update.my_chat_member.new_chat_member.status === 'kicked'){

        let from = ctx.chat.id
        let user = fs.readJsonSync('./db/user.json');

        if (user.includes(from)) {

            let del = user.indexOf(from);
            user.splice(del, 1)
            fs.writeJsonSync('./db/user.json', user)
            console.log(`Remove Id ${from}`)
        }
    }

    else if (ctx.chat.type === 'channel' && ctx.update.my_chat_member.new_chat_member.status === 'kicked'){

        let from = ctx.chat.id
        let user = fs.readJsonSync('./db/user.json');

        if (user.includes(from)) {

            let del = user.indexOf(from);
            user.splice(del, 1)
            fs.writeJsonSync('./db/user.json', user)
            console.log(`Remove Id ${from}`)
        }
    }

    else if (ctx.chat.type === 'supergroup' && ctx.update.my_chat_member.new_chat_member.status === 'member'){

        let from = ctx.chat.id
        let pushname = ctx.chat.username ? ctx.chat.username : ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.title ;
        let user = fs.readJsonSync('./db/user.json');
        let msg = ctx.chat.username ? `مرحباً بك @${pushname} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي \n\n لعرض مزيد من الخدمات أرسل كلمة /start`: `مرحباً بك ${pushname} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي \n\n لعرض مزيد من الخدمات أرسل كلمة /start`;

        if (!user.includes(from)) {

            user.push(from)
            fs.writeJsonSync('./db/user.json', user)
            await ctx.reply(msg)
            .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 60000))
            .catch((err) => console.log(err));
            console.log(`Add Id ${from}`)
        }
    }

    else if (ctx.chat.type === 'private' && ctx.update.my_chat_member.new_chat_member.status === 'member'){

        let from = ctx.chat.id
        let pushname = ctx.chat.username ? ctx.chat.username : ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.title ;
        let user = fs.readJsonSync('./db/user.json');
        let msg = ctx.chat.username ? `مرحباً بك @${pushname} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي \n\n لعرض مزيد من الخدمات أرسل كلمة /start`: `مرحباً بك ${pushname} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي \n\n لعرض مزيد من الخدمات أرسل كلمة /start`;

        if (!user.includes(from)) {

            user.push(from)
            fs.writeJsonSync('./db/user.json', user)
            await ctx.reply(msg)
            .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 60000))
            .catch((err) => console.log(err));
            console.log(`Add Id ${from}`)
        }
    }

    else if (ctx.chat.type === 'channel' && ctx.update.my_chat_member.new_chat_member.status === 'member'){

        let from = ctx.chat.id
        let pushname = ctx.chat.username ? ctx.chat.username : ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.title ;
        let user = fs.readJsonSync('./db/user.json');
        let msg = ctx.chat.username ? `مرحباً بك @${pushname} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي \n\n لعرض مزيد من الخدمات أرسل كلمة /start`: `مرحباً بك ${pushname} لقد تم تفعيل خدمة إرسال الأذكار بشكل تلقائي \n\n لعرض مزيد من الخدمات أرسل كلمة /start`;

        if (!user.includes(from)) {

            user.push(from)
            fs.writeJsonSync('./db/user.json', user)
            await ctx.reply(msg)
            .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 60000))
            .catch((err) => console.log(err));
            console.log(`Add Id ${from}`)
        }
    }
    

});

client.on("new_chat_members", async (ctx) => {

    let me = ctx.botInfo
    let admin = await ctx.getChatAdministrators().catch((error) => console.log(error));
    let members = ctx.update.message.new_chat_members[0];
    let u_f_i = members.username ? members.username : members.first_name ? members.first_name : members.id ? members.id : '';        

    for (let lop of admin){

        if (lop.user.id === me.id){
            
            let url = await ctx.exportChatInviteLink()
            let but_1 = [Markup.button.url('رابط المجموعة', url)]
            let button = Markup.inlineKeyboard([but_1]);
            let msg = members.username ? `مرحباً بك @${u_f_i} 👋` : `مرحباً بك ${u_f_i} 👋`;
 
            await ctx.deleteMessage().catch(async (err) => console.log(err));
            await ctx.reply(msg, button)
            .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 60000))
            .catch((error) => console.log(error));
            
        }
    }

});

client.on("left_chat_member", async (ctx) => {

    if (ctx.message.left_chat_member.is_bot === false){

        let me = ctx.botInfo
        let admin = await ctx.getChatAdministrators().catch((error) => console.log(error));
        let members = ctx.message.left_chat_member;
        let u_f_i = members.username ? members.username : members.first_name ? members.first_name : members.id ? members.id : '';

       for (let lop of admin){

            if (lop.user.id === me.id){

                let msg = members.username ? `مع السلامة @${u_f_i} 👋` : `مع السلامة ${u_f_i} 👋`;

                await ctx.deleteMessage().catch(async (err) => console.log(err));
                await ctx.reply(msg)
                .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 60000))
                .catch((error) => console.log(error));

            }
        }
    }
    

});

client.on("message",async (ctx) => {

    let message_id = ctx.message.message_id;
    let body = ctx.message.text ? ctx.message.text : ctx.message.caption;
    let from = ctx.chat.id;
    let pushname = ctx.from.username ? ctx.from.username : ctx.from.first_name;
    let Menufrom = getMenu({ from: from });

    menu_number[Menufrom].menu_name.exec({

        from: from,
        body: body,
        pushname: pushname,
        id: message_id,
        Markup: Markup,
        ctx: ctx, 
        client: client,
         
    }); 
    

});

client.action('quran', async (ctx) => {

    let but_1 = [Markup.button.callback('أدريس أبكر', 'idris'),Markup.button.callback('ماهر المعيقلي', 'mahar')];
    let but_2 = [Markup.button.callback('عبد الله الموسى', 'almosa'),Markup.button.callback('علي جابر', 'alli')];
    let but_3 = [Markup.button.callback('رجوع', 'start')]
    let button = Markup.inlineKeyboard([but_1, but_2, but_3]);
    let from = ctx.chat.id
    getMenu({ from: from });

    db_menu[from].menu_name = 1;

    let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
    quran_menu += '1- أدريس أبكر \n'
    quran_menu += '2- ماهر المعيقلي \n'
    quran_menu += '3- عبدالله الموسى \n'
    quran_menu += '4- علي جابر \n\n\n'
    quran_menu += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'
  
    await ctx.reply(quran_menu, button).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('idris', async (ctx) => {

    let from = ctx.chat.id
    getMenu({ from: from });

    db_menu[from].menu_name = 2;
    let quran_idr = fs.readFileSync('./media/text/quran_1.txt',{encoding:'utf8', flag:'r'})
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('mahar', async (ctx) => {

    let from = ctx.chat.id
    getMenu({ from: from });

    db_menu[from].menu_name = 3;

    let quran_idr = fs.readFileSync('./media/text/quran_2.txt',{encoding:'utf8', flag:'r'})
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('alli', async (ctx) => {

    let from = ctx.chat.id
    getMenu({ from: from });

    db_menu[from].menu_name = 5;

    let quran_idr = fs.readFileSync('./media/text/quran_4.txt',{encoding:'utf8', flag:'r'})
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('almosa', async (ctx) => {

    let from = ctx.chat.id
    getMenu({ from: from });

    db_menu[from].menu_name = 4;

    let quran_idr = fs.readFileSync('./media/text/quran_3.txt',{encoding:'utf8', flag:'r'})
    let home = '【 للرجوع للقائمة الرئيسية أرسل #️ 】\n'
    home += '【 للرجوع للخلف أرسل * 】'
    await ctx.reply(`${quran_idr}\n ${home}`).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('start', async (ctx) => {

    let from = ctx.chat.id
    getMenu({ from: from });

    db_menu[from].menu_name = 0;

    let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'),Markup.button.callback('أذكار 📿', 'adhkar')];
    let but_2 = [Markup.button.callback('فيديو 🎥', 'video'),Markup.button.callback('صور 🖼️', 'photo'),Markup.button.callback('ملصق 🪧', 'sticker')];
    let but_3 = [Markup.button.callback('سؤال ⁉️', 'question')];
    let button = Markup.inlineKeyboard([but_1, but_2, but_3]);
    let pushname = ctx.from.username ? ctx.from.username : ctx.from.first_name;

    let mesg = `مرحباً بك  @${pushname} 👋 \n`
    mesg += 'من فضلك قم بكتابة (رقم) الخدمة ✉️ \n\n\n'
    mesg += '1- قائمة القرآن الكريم 📖 \n'
    mesg += '2- قائمة الأذكار 📿 \n'
    mesg += '3- فيديو عشوائي 🎥 \n'
    mesg += '4- صورة عشوائية 🖼️ \n'
    mesg += '5- ملصق عشوائي 🪧 \n'
    mesg += '6- سؤال عشوائي ⁉️ \n\n\n'
    
    await ctx.reply(mesg, button).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('adhkar', async (ctx) => {

    let from = ctx.chat.id
    getMenu({ from: from });

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
 
    await ctx.reply(adhkar_menu).catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('photo', async (ctx) => {

    let but_1 = [Markup.button.callback('التالي', 'photo'),Markup.button.callback('رجوع', 'start')];
    let button = Markup.inlineKeyboard([but_1]);
    let listphoto = photo[Math.floor(Math.random() * photo.length)]
    await ctx.replyWithPhoto({url: listphoto}, button)
    .catch((err) => console.log(err));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('video', async (ctx) => {

    let but_1 = [Markup.button.callback('التالي', 'video'),Markup.button.callback('رجوع', 'start')];
    let button = Markup.inlineKeyboard([but_1]);
    let listvideo = video[Math.floor(Math.random() * video.length)]
    await ctx.replyWithVideo({url: listvideo}, button)
    .catch((erro) => console.log(erro));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('sticker', async (ctx) => {

    let but_1 = [Markup.button.callback('التالي', 'sticker'),Markup.button.callback('رجوع', 'start')];
    let button = Markup.inlineKeyboard([but_1]);
    let liststicker = sticker[Math.floor(Math.random() * sticker.length)]
    await ctx.replyWithSticker({url: liststicker}, button)
    .catch((erro) => console.log(erro));
    await ctx.deleteMessage().catch((err) => console.log(err));

});

client.action('question', async (ctx) => {

    let question = await fs.readJson('./question.json').catch((error) => console.log(error));
    let number = Array.from(question.keys())
    let list = number[Math.floor(Math.random() * number.length)]
    let but_1 = Markup.button.callback(question[list].answer.asr, question[list].answer.id);
    let but_2 = Markup.button.callback(question[list].answer1.asr, question[list].answer1.id);
    let but_3 = Markup.button.callback(question[list].answer2.asr, question[list].answer2.id);
    let but = [[but_1, but_2, but_3],[but_2, but_1, but_3],[but_3, but_1, but_2],[but_2, but_3, but_1],[but_1, but_3, but_2]]
    let random = but[Math.floor(Math.random() * but.length)]
    let button = Markup.inlineKeyboard([random]);

    await ctx.reply(question[list].question, button)
    .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 15000))
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


});

client.catch(async (err) => {

    console.log(err.toString())
    execSh("npm start", { cwd: "./" });

});

function getMenu({ from }) {
    if (db_menu[from]) {
      return db_menu[from].menu_name;
    } else {
      db_menu[from] = { menu_name: 0,};
      return db_menu[from].menu_name;
    }
}

broadcast({client: client, Markup: Markup,});

client.launch();