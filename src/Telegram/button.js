const Quran = require('./button/Quran.js');
const hisn_almuslim = require('./button/hisn_almuslim.js');
const adhkar = require('./button/adhkar.js');
const albitaqat = require('./button/albitaqat.js');
const video = require('./button/video.js');
const photo = require('./button/photo.js');
const Lectures = require('./button/Lectures.js');
const Names_Of_Allah = require('./button/Names_Of_Allah.js');
const start = require('./button/start.js');
const Idris_Abkar = require('./button/Quran/Idris_Abkar.js');
const Maher_Almaikulai = require('./button/Quran/Maher_Almaikulai.js');
const Badr_Al_Turki = require('./button/Quran/Badr_Al_Turki.js');
const Ali_Jaber = require('./button/Quran/Ali_Jaber.js');
const Abdullrahman_Alsudais = require('./button/Quran/Abdullrahman_Alsudais.js');
const Khalid_Galilee = require('./button/Quran/Khalid_Galilee.js');
const Bandar_Balila = require('./button/Quran/Bandar_Balila.js');
const Mohamed_Ayoub = require('./button/Quran/Mohamed_Ayoub.js');
const Ahmed_Al_Suwailem = require('./button/Quran/Ahmed_Al_Suwailem.js');
const Musa_Bilal = require('./button/Quran/Musa_Bilal.js');

module.exports = async function button(bot, Path_appDate, Markup, Path_Local) {

    Quran(bot, Path_appDate, Markup);
    adhkar(bot, Path_appDate, Markup, Path_Local);
    albitaqat(bot, Path_appDate, Markup);
    video(bot, Path_appDate, Markup, Path_Local);
    photo(bot, Path_appDate, Markup, Path_Local);
    start(bot, Path_appDate, Markup);
    Idris_Abkar(bot, Path_appDate, Markup);
    Maher_Almaikulai(bot, Path_appDate, Markup);
    Badr_Al_Turki(bot, Path_appDate, Markup);
    Ali_Jaber(bot, Path_appDate, Markup);
    Abdullrahman_Alsudais(bot, Path_appDate, Markup);
    Khalid_Galilee(bot, Path_appDate, Markup);
    Bandar_Balila(bot, Path_appDate, Markup);
    Mohamed_Ayoub(bot, Path_appDate, Markup);
    Ahmed_Al_Suwailem(bot, Path_appDate, Markup);
    Musa_Bilal(bot, Path_appDate, Markup);
    hisn_almuslim(bot, Path_appDate, Markup, Path_Local);
    hisn_almuslim(bot, Path_appDate, Markup, Path_Local);
    Names_Of_Allah(bot, Path_appDate, Markup, Path_Local);
    Lectures(bot, Path_appDate, Markup, Path_Local);
    
}