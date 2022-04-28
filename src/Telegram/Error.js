const fs = require('fs-extra');
const path = require('path');

module.exports = async function Error(error, Path_appDate) {

    let json = fs.readJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'));

    if (error.response !== undefined) {

        if (error.response.description === "Bad Request: group chat was upgraded to a supergroup chat") {

            let id_new = error.response.parameters.migrate_to_chat_id
            let id_old = error.on.payload.chat_id

            delete Object.assign(json, {
                [id_new]: json[id_old]
            })[id_old]
            json[id_new].id = id_new
            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json, { spaces: '\t' });

        }

        else if (error.response.description === "Forbidden: user is deactivated") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json, { spaces: '\t' });

        }

        else if (error.response.description === "Bad Request: need administrator rights in the channel chat") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json, { spaces: '\t' });

        }

        else if (error.response.description === "Forbidden: bot was blocked by the user") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json, { spaces: '\t' });

        }

        else if (error.response.description === "Bad Request: chat not found") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync(path.join(Path_appDate, '/islam_bot/Users.json'), json, { spaces: '\t' });

        }

        else if (error.response.description === "Forbidden: bot was kicked from the supergroup chat") {

            let id_user = error.on.payload.chat_id

            delete json[id_user]
            fs.writeJsonSync(join(Path_appDate, '/islam_bot/Users.json'), json, { spaces: '\t' });

        }

    }

}