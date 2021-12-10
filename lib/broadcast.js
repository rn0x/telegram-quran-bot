import { video } from '../menu/video.js';
import { photo } from '../menu/photo.js';
import { adhkar_all } from '../menu/adhkar_all.js';
import fs from 'fs-extra';
import moment from 'moment-timezone';


export default function broadcast({ client, Markup }) {

    setInterval(async function(){ 


        const time = moment.tz("Asia/Riyadh").format('LT');
        const time_adhkar_all = ["3:00 PM","12:00 AM"];
        const time_video = ["6:00 AM","6:00 PM"];
        const time_photo = ["12:00 PM","3:00 AM"];
        const time_mp3 = ["9:00 PM","9:00 AM"];
        const time_lectures = ["11:00 PM","7:00 AM"];
        const LecturesJson = fs.readJsonSync('./menu/Lectures.json');
        const QuranJson = fs.readJsonSync('./menu/Quran.json');
        const json = fs.readJsonSync('./db/user.json');
        const user = Object.keys(json);
        
        if (time_adhkar_all.includes(time)){

            for (let lop2 of user){
                let listadk = adhkar_all[Math.floor(Math.random() * adhkar_all.length)]
                await client.telegram.sendMessage(lop2, listadk)
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_video.includes(time)){

            for (let lop2 of user){

                let listvideo = video[Math.floor(Math.random() * video.length)]
                await client.telegram.sendVideo(lop2, { url: listvideo })
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_photo.includes(time)){

            for (let lop2 of user){

                let listphoto = photo[Math.floor(Math.random() * photo.length)]
                await client.telegram.sendPhoto(lop2, { url: listphoto })
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_mp3.includes(time)){

            for (let lop2 of user){

                let listquran = QuranJson[Math.floor(Math.random() * QuranJson.length)]
                let msg = `*سورة:* ${listquran.Surah} 📖\n*القارئ:* ${listquran.Author} 🔊`
                await client.telegram.sendAudio(lop2, { url: listquran_mp3 })
                .catch((err) => console.log(err));
                await client.telegram.sendMessage(lop2, msg)
                .catch((err) => console.log(err));
            
            }
    
        }

        else if (time_lectures.includes(time)){

            for (let lop2 of user){

                let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
                let msg = `✽\n\n${listlectures.Lectures}\n\n`
                msg += `الشيخ: ${listlectures.Author} 🔊 `
                await client.telegram.sendVideo(lop2, { url: listlectures.FilePath }, { caption: msg })
                .catch((err) => console.log(err));
            
            }
    
        }

    } , 60000);
}