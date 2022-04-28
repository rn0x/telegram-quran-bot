const { app, BrowserWindow, ipcMain, Tray, Menu, Notification } = require('electron');
const path = require('path');
const fs = require('fs-extra');
const islam_bot = require('./src/Telegram/index.js');

let Path_Local = fs.existsSync(path.join(process.resourcesPath, '/index.js')) === true ? process.resourcesPath : __dirname
let Path_appDate = app.getPath("appData");
let mainWindow
let tray
let trayMenu

const createWindow = () => {

    mainWindow = new BrowserWindow({
        width: 550,
        height: 340,
        show: false,
        center: true,
        resizable: false, // قابل لتكبير والتصغير
        frame: false, // ايطار البرنامج
        title: 'islam_bot',
        icon: path.join(Path_Local, '/build/icons/icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('./src/index.html');
    mainWindow.removeMenu()

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('minimize', (event) => {
        event.preventDefault();
        mainWindow.hide();
    });

    mainWindow.on("show", (event) => {
        event.preventDefault();
    });

    mainWindow.on('closed', (event) => {
        event.preventDefault();


        if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Settings.json'))) {

            let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Settings.json'));
            if (Settings.start === true) {

                let data = Object.assign({}, Settings, { start: false })
                fs.writeJSONSync(path.join(Path_appDate, '/islam_bot/Settings.json'), data, { spaces: '\t' })

            }
        }
        tray = null
        trayMenu = null
        mainWindow = null
    });



    trayMenu = Menu.buildFromTemplate([
        {
            label: 'عرض التطبيق', click: function () {
                mainWindow.show();
            }
        },
        {
            label: 'إغلاق', click: function () {
                mainWindow.destroy();
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);
    tray = new Tray(path.join(Path_Local, '/build/icons/icon.png'));
    tray.setContextMenu(trayMenu);
    tray.setToolTip("islam_bot");
    tray.on('click', () => {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    });


}


app.whenReady().then(async () => {

    createWindow();

    if (process.argv.includes('--hidden')) {

        mainWindow.hide()

    }
    
    if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Settings.json'))) {

        let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Settings.json'));

        if (Settings.start === true && Settings.off_on === 'on') {

            islam_bot(app.getPath("appData"), Path_Local, Notification);

        }

    }

    setInterval(async () => {

        if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Settings.json'))) {

            let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Settings.json'));
            if (Settings.start === false && Settings.off_on === 'on') {

                islam_bot(app.getPath("appData"), Path_Local, Notification);
                let data = Object.assign({}, Settings, { start: true })
                fs.writeJSONSync(path.join(Path_appDate, '/islam_bot/Settings.json'), data, { spaces: '\t' });

            }
        }

    }, 1000);

});

app.on('ready', (e) => {

    e.preventDefault();
    app.setAppUserModelId("org.IslamBot.rn0x");

    ipcMain.on('minimize', () => {

        mainWindow.minimize()
    });

    ipcMain.on('close', () => {
        mainWindow.close()
    });

    ipcMain.handle('Path_appDate', async () => {
        return Path_appDate // Path Files
    });

});

app.on('before-quit', function () {
    tray.destroy();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.setLoginItemSettings({
  openAtLogin: true,
  path: path.join(process.resourcesPath, '../islam_bot.exe'),
  args: ['--hidden']
})