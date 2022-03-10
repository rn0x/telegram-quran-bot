const fs = require('fs-extra');
const path = require('path');

module.exports = async function Save_db(id, first_name, username, type, Path_appDate) {

    try {

        if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Users.json')) === false) {

            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), {});


        }

        else if (fs.existsSync(path.join(Path_appDate, '/islam_bot/Users.json'))) {

            let json = fs.readJSONSync(path.join(Path_appDate, '/islam_bot/Users.json'));

            if (Object.keys(json).includes(id.toString()) === false) {

                let db = {

                    [id]: {

                        id: id,
                        first_name: first_name,
                        username: username,
                        type: type,
                        broadcast: true

                    }
                }


                fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), Object.assign({}, json, db));

            }

        }


    } catch (error) {

        console.log(error);
    }

}