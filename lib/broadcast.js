import { video } from '../menu/video.js';
import { photo } from '../menu/photo.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import { quran_mp3 } from '../menu/quran_mp3.js';
import fs from 'fs-extra';
import moment from 'moment-timezone';

export default function broadcast({ client, Markup }) {

    setInterval(async function(){ 


        const time = moment.tz("Asia/Riyadh").format('LT');
        const time_adhkar_all = ["3:00 PM","12:00 AM"];
        const time_video = ["6:00 AM","6:00 PM"];
        const time_photo = ["12:00 PM","3:00 AM"];
        const time_mp3 = ["9:00 PM","9:00 AM"];
        const time_question = ["7:00 PM","10:00 AM","4:00 PM","8:00 AM","11:00 PM","5:00 AM","4:00 PM","11:00 AM"];
        
        if (time_adhkar_all.includes(time)){

            let user = fs.readJsonSync('./db/user.json');

            for (let lop2 of user){
                let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                await client.telegram.sendMessage(lop2, listadk)
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_video.includes(time)){

            let user = fs.readJsonSync('./db/user.json')

            for (let lop2 of user){

                let listvideo = video[Math.floor(Math.random() * video.length)]
                await client.telegram.sendVideo(lop2, { url: listvideo })
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_photo.includes(time)){

            let user = fs.readJsonSync('./db/user.json')

            for (let lop2 of user){

                let listphoto = photo[Math.floor(Math.random() * photo.length)]
                await client.telegram.sendPhoto(lop2, { url: listphoto })
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_mp3.includes(time)){

            let user = fs.readJsonSync('./db/user.json')

            for (let lop2 of user){

                let listquran_mp3 = quran_mp3[Math.floor(Math.random() * quran_mp3.length)]
                await client.telegram.sendAudio(lop2, { url: listquran_mp3 })
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_question.includes(time)){

            let user = fs.readJsonSync('./db/user.json');

            for (let lop2 of user){

                let question = await fs.readJson('./question.json').catch((error) => console.log(error));
                let number = Array.from(question.keys())
                let list = number[Math.floor(Math.random() * number.length)]
                let but_1 = Markup.button.callback(question[list].answer.asr, question[list].answer.id);
                let but_2 = Markup.button.callback(question[list].answer1.asr, question[list].answer1.id);
                let but_3 = Markup.button.callback(question[list].answer2.asr, question[list].answer2.id);
                let but = [[but_1, but_2, but_3],[but_2, but_1, but_3],[but_3, but_1, but_2],[but_2, but_3, but_1],[but_1, but_3, but_2]]
                let random = but[Math.floor(Math.random() * but.length)]
                let button = Markup.inlineKeyboard([random]);
      
                await client.telegram.sendMessage(lop2,question[list].question, button)
                .then(async (data) => setTimeout(async () => client.telegram.deleteMessage(lop2, data.message_id).catch((error) => console.log(error)) , 15000))
                .catch((error) => console.log(error));
      
                client.action(question[list].answer.id, async (ctx) => {
      
                    await client.telegram.sendMessage(lop2, "إجابة صحيحة ✔️")
                    .then(async (data) => setTimeout(async () => client.telegram.deleteMessage(lop2, data.message_id).catch((error) => console.log(error)) , 10000))
                    .catch((error) => console.log(error));
            
                });
      
                client.action(question[list].answer1.id, async (ctx) => {
      
                    await client.telegram.sendMessage(lop2, "إجابة خاطئة ❌")
                    .then(async (data) => setTimeout(async () => client.telegram.deleteMessage(lop2, data.message_id).catch((error) => console.log(error)) , 10000))
                    .catch((error) => console.log(error));
            
                });
            
                client.action(question[list].answer2.id, async (ctx) => {
            
                    await client.telegram.sendMessage(lop2, "إجابة خاطئة ❌")
                    .then(async (data) => setTimeout(async () => client.telegram.deleteMessage(lop2, data.message_id).catch((error) => console.log(error)) , 10000))
                    .catch((error) => console.log(error));
            
                });
            
            }        
      
          }

    } , 60000);
}