const { ipcRenderer } = require('electron');
const home_app = require('./src/home_app.js');

window.addEventListener('DOMContentLoaded', async (e) => {

    e.preventDefault();

    home_app();

    document.getElementById('min-button').addEventListener("click", event => {
        ipcRenderer.send('minimize') // شريط العنوان زر الإغلاق والتصغير / تصغير
    });

    document.getElementById('close-button').addEventListener("click", event => {
        ipcRenderer.send('close') // شريط العنوان زر الإغلاق والتصغير / إغلاق
    });


});