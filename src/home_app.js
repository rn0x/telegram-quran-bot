const { ipcRenderer } = require('electron');
const path = require('path');
const fs = require('fs-extra');

module.exports = async function home_app() {

    let Path_appDate = await ipcRenderer.invoke('Path_appDate');

    if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json'))) {

        let user_json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
        let user_key = Object.keys(user_json);
        let private = [];
        let channel = [];
        let supergroup = [];


        for (let lop of user_key) {
            if (user_json[lop].type === 'channel') {

                channel.push(lop)
            } else if (user_json[lop].type === 'supergroup') {

                supergroup.push(lop)
            } else if (user_json[lop].type === 'private') {

                private.push(lop)
            }
        }

        document.getElementById('number_private').innerHTML = private.length
        document.getElementById('number_supergroup').innerHTML = supergroup.length
        document.getElementById('number_channel').innerHTML = channel.length
        document.getElementById('token').style = 'display: none;'
        document.getElementById('bot_start').style = 'display: block;'
        document.getElementById('Status').style = 'background-color: #f8f8f8;'


    }

    else if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json')) === false) {

        document.getElementById('token').style = 'display: block;'
        document.getElementById('error').style = 'display: none;'
        document.getElementById('bot_start').style = 'display: none;'


    }

    setInterval(async () => {

        if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json'))) {

            let user_json = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'));
            let user_key = Object.keys(user_json);
            let private = [];
            let channel = [];
            let supergroup = [];


            for (let lop of user_key) {
                if (user_json[lop].type === 'channel') {

                    channel.push(lop)
                } else if (user_json[lop].type === 'supergroup') {

                    supergroup.push(lop)
                } else if (user_json[lop].type === 'private') {

                    private.push(lop)
                }
            }

            document.getElementById('number_private').innerHTML = private.length
            document.getElementById('number_supergroup').innerHTML = supergroup.length
            document.getElementById('number_channel').innerHTML = channel.length
            document.getElementById('token').style = 'display: none;'
            document.getElementById('bot_start').style = 'display: block;'
            let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Settings.json'));
            document.getElementById('span_Status').innerHTML = Settings.off_on === 'on' ? 'متصل' : 'غير متصل'
            document.getElementById('span_Status').style = Settings.off_on === 'on' ? 'color: #48d81d;' : 'color: #ff4747;'
            document.getElementById('Status').style = Settings.off_on === 'on' ? 'background-color: #d5ffdc;' : 'background-color: #fff1f1;'

            private = null;
            channel = null;
            supergroup = null;

        }

        else if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json')) === false) {

            document.getElementById('token').style = 'display: block;'
            document.getElementById('bot_start').style = 'display: none;'
            document.getElementById('error').style = 'display: none;'

        }

    }, 1000);

    document.getElementById('but_token').addEventListener("click", (e) => {

        e.preventDefault();

        let token_value = document.getElementById('input_token').value

        if (token_value !== '') {

            if (fs.existsSync(path.join(Path_appDate, '/islam-bot')) === false) {

                fs.mkdirSync(path.join(Path_appDate, '/islam-bot'), { recursive: true });

            }

            else if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json')) === false) {

                let data = {
                    token: token_value,
                    start: false,
                    off_on: 'on'
                }

                fs.writeJSONSync(path.join(Path_appDate, '/islam-bot/Settings.json'), data, { spaces: '\t' });
                fs.writeJSONSync(path.join(Path_appDate, '/islam-bot/Users.json'), {}, { spaces: '\t' });

            }

        }

        else {
            document.getElementById('error').style = 'display: block;'

            setTimeout(() => {

                document.getElementById('error').style = 'display: none;'

            }, 3000);
        }

    });

    document.getElementById('on').addEventListener("click", (e) => {

        if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json'))) {

            let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Settings.json'));

            if (Settings.start === true && Settings.off_on === "off" || Settings.start === false && Settings.off_on === "off") {

                let data = Object.assign({}, Settings, { start: false, off_on: "on" })
                fs.writeJSONSync(path.join(Path_appDate, '/islam-bot/Settings.json'), data, { spaces: '\t' });
            }

        }

    });

    document.getElementById('off').addEventListener("click", (e) => {

        if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json'))) {

            let Settings = fs.readJSONSync(path.join(Path_appDate, '/islam-bot/Settings.json'));

            if (Settings.start === true && Settings.off_on === "on" || Settings.start === false && Settings.off_on === "on") {

                let data = Object.assign({}, Settings, { start: true, off_on: "off" })
                fs.writeJSONSync(path.join(Path_appDate, '/islam-bot/Settings.json'), data, { spaces: '\t' });
            }

        }

    });

    document.getElementById('delete').addEventListener("click", (e) => {

        if (fs.existsSync(path.join(Path_appDate, '/islam-bot/Settings.json'))) {

            fs.unlinkSync(path.join(Path_appDate, '/islam-bot/Settings.json'));
            fs.unlinkSync(path.join(Path_appDate, '/islam-bot/Users.json'));

        }

    });

}