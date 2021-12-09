import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';

export const quran_alli = {

  async exec({ pushname, body, ctx, from, Markup }) {

    switch (body) {

      case 'الفاتحة':
      case '1':
      
      
      await  ctx.replyWithAudio({url:'http://bot.rn0x.com/media/quran_mp3/quran_alli/001.mp3'}).catch((erro) => console.log(erro));
      
      break;
      case 'البقرة':
      case '2':

      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/002.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'آل عمران':
      case '3':  

      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/003.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'النساء':
      case '4':
                
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/004.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'المائدة':
      case '5':  

      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/005.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الأنعام':
      case '6':  

      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/006.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الأعراف':
      case '7': 
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/007.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الأنفال':
      case '8': 
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/008.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'التوبة':
      case '9': 
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/009.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'يونس':
      case '10': 
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/010.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'هود':
      case '11':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/011.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'يوسف':
      case '12':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/012.mp3'}).catch((erro) => console.log(erro));         
      break;
      case 'الرعد':
      case '13':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/013.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'إبراهيم':
      case '14':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/014.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الحجر':
      case '15':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/015.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'النحل':
      case '16':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/016.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الإسراء':
      case '17':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/017.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الكهف':
      case '18':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/018.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'مريم':
      case '19':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/019.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'طه':
      case '20':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/020.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الأنبياء':
      case '21':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/021.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الحج':
      case '22':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/022.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'المؤمنون':
      case '23':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/023.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'النور':
      case '24':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/024.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الفرقان':
      case '25':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/025.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الشعراء':
      case '26':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/026.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'النمل':
      case '27':
      
     
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/027.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'القصص':
      case '28':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/028.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'العنكبوت':
      case '29':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/029.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الروم':
      case '30':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/030.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'لقمان':
      case '31':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/031.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'السجدة':
      case '32':

      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/032.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الأحزاب':
      case '33':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/033.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'سبأ':
      case '34':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/034.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'فاطر':
      case '35':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/035.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'يس':
      case '36':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/036.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'الصافات':
      case '37':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/037.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'ص':
      case '38':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/038.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'الزمر':
      case '39':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/039.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'غافر':
      case '40':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/040.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'فصلت':
      case '41':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/041.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الشورى':
      case '42':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/042.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الزخرف':
      case '43':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/043.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الدخان':
      case '44':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/044.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الجاثية':
      case '45':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/045.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الأحقاف':
      case '46':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/046.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'محمد':
      case '47':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/047.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الفتح':
      case '48':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/048.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الحجرات':
      case '49':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/049.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'ق':
      case '50':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/050.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الذاريات':
      case '51':
      
      
      await ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/051.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'الطور':
      case '52':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/052.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'النجم':
      case '53':

      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/053.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'القمر':
      case '54':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/054.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'الرحمن':
      case '55':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/055.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الواقعة':
      case '56':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/056.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الحديد':
      case '57':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/057.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'المجادلة':
      case '58':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/058.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'الحشر':
      case '59':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/059.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'الممتحنة':
      case '60':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/060.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'الصف':
      case '61':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/061.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الجمعة':
      case '62':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/062.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'المنافقون':
      case '63':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/063.mp3'}).catch((erro) => console.log(erro));     
      break;
      case 'التغابن':
      case '64':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/064.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الطلاق':
      case '65':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/065.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'التحريم':
      case '66':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/066.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الملك':
      case '67':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/067.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'القلم':
      case '68':
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/068.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الحاقة':
      case '69':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/069.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'المعارج':
      case '70':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/070.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'نوح':
      case '71':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/071.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الجن':
      case '72':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/072.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'المزمل':
      case '73':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/073.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'المدثر':
      case '74':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/074.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'القيامة':
      case '75':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/075.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'الإنسان':
      case '76':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/076.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'المرسلات':
      case '77':
   
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/077.mp3'}).catch((erro) => console.log(erro));  
      break;
      case 'النبأ':
      case '78':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/078.mp3'}).catch((erro) => console.log(erro));  
      break;
      case 'النازعات':
      case '79':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/079.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'عبس':
      case '80':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/080.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'التكوير':
      case '81':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/081.mp3'}).catch((erro) => console.log(erro));  
      break;
      case 'الانفطار':
      case '82':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/082.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'المطففين':
      case '83':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/083.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الانشقاق':
      case '84':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/084.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'البروج':
      case '85':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/085.mp3'}).catch((erro) => console.log(erro));  
      break;
      case 'الطارق':
      case '86':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/086.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الأعلى':
      case '87':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/087.mp3'}).catch((erro) => console.log(erro));  
      break;
      case 'الغاشية':
      case '88':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/088.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الفجر':
      case '89':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/089.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'البلد':
      case '90':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/090.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الشمس':
      case '91':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/091.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'الليل':
      case '92':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/092.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'الضحى':
      case '93':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/093.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'الشرح':
      case '94':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/094.mp3'}).catch((erro) => console.log(erro));   
      break;
      case 'التين':
      case '95':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/095.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'العلق':
      case '96':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/096.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'القدر':
      case '97':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/097.mp3'}).catch((erro) => console.log(erro));    
      break;
      case 'البينة':
      case '98':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/098.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'الزلزلة':
      case '99':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/099.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'العاديات':
      case '100':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/100.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'القارعة':
      case '101':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/101.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'التكاثر':
      case '102':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/102.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'العصر':
      case '103':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/103.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'الهمزة':
      case '104':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/104.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'الفيل':
      case '105':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/105.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'قريش':
      case '106':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/106.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'الماعون':
      case '107':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/107.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'الكوثر':
      case '108':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/108.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'الكافرون':
      case '109':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/109.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'النصر':
      case '110':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/110.mp3'}).catch((erro) => console.log(erro));
      break;
      case 'المسد':
      case '111':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/111.mp3'}).catch((erro) => console.log(erro)); 
      break;
      case 'الإخلاص':
      case '112':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/112.mp3'}).catch((erro) => console.log(erro));  
      break;
      case 'الفلق':
      case '113':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/113.mp3'}).catch((erro) => console.log(erro));  
      break;
      case 'الناس':
      case '114':
      
      
      await  ctx.replyWithAudio({url: 'http://bot.rn0x.com/media/quran_mp3/quran_alli/114.mp3'}).catch((erro) => console.log(erro));
      break;
       
        
    }

    if (body === "*"){

      MenuNmber(from,1)

      let but_1 = [Markup.button.callback('أدريس أبكر', 'idris'),Markup.button.callback('ماهر المعيقلي', 'mahar')];
      let but_2 = [Markup.button.callback('عبد الله الموسى', 'almosa'),Markup.button.callback('علي جابر', 'alli')];
      let but_3 = [Markup.button.callback('عبدالرحمن السديس', 'Alsudais'),Markup.button.callback('خالد الجليل', 'Galilee')];
      let but_4 = [Markup.button.callback('رجوع', 'start')]
      let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
      let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
      quran_menu += '1- أدريس أبكر \n'
      quran_menu += '2- ماهر المعيقلي \n'
      quran_menu += '3- عبدالله الموسى \n'
      quran_menu += '4- علي جابر \n'
      quran_menu += '5- عبدالرحمن السديس \n'
      quran_menu += '6- خالد الجليل \n\n\n'
      quran_menu += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'
  
      await ctx.reply(quran_menu, button).catch((err) => console.log(err));

    }

    else if ( body === 'خدمة' || body === 'خدمه' || body === '#'){

      MenuNmber(from,0)

      let but_1 = [Markup.button.callback('قرآن كريم 📖', 'quran'), Markup.button.callback('أذكار 📿', 'adhkar')];
      let but_2 = [Markup.button.callback('فيديو 🎥', 'video'), Markup.button.callback('صور 🖼️', 'photo'), Markup.button.callback('ملصق 🪧', 'sticker')];
      let but_3 = [Markup.button.callback('سؤال ⁉️', 'question'), Markup.button.callback('محاضرات 🌾', 'Lectures'), Markup.button.callback('بطاقات 🎴', 'albitaqat')];
      let button = Markup.inlineKeyboard([but_1, but_2, but_3]);
      let user = fs.readJsonSync('./db/user.json');
      let channel = []
      let supergroup = []

      for (let lop of Object.keys(user)) {

        if (user[lop].Type === 'channel') {

          channel.push(lop)

        }

        else if (user[lop].Type === 'supergroup') {

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

    }

  }
};
