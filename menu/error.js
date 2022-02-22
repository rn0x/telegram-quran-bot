import fs from 'fs-extra';

export default function error(error) {

    let json = fs.readJsonSync('./db/user.json');

    if (error.response.description === "Bad Request: group chat was upgraded to a supergroup chat") {

        let id_new = error.response.parameters.migrate_to_chat_id
        let id_old = error.on.payload.chat_id

        delete Object.assign(json, {
            [id_new]: json[id_old]
        })[id_old]
        json[id_new].id = id_new
        fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });

        console.log(`ID has changed \n\n id old: ${id_old}\n id new: ${id_new}`);
    } else if (error.response.description === "Forbidden: user is deactivated") {

        let id_user = error.on.payload.chat_id

        delete json[id_user]
        fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });
        console.log(`Remove Id ${id_user}`);
    } else if (error.response.description === "Bad Request: need administrator rights in the channel chat") {

        let id_user = error.on.payload.chat_id

        delete json[id_user]
        fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });
        console.log(`Remove Id ${id_user}`);
    } else if (error.response.description === "Forbidden: bot was blocked by the user") {

        let id_user = error.on.payload.chat_id

        delete json[id_user]
        fs.writeJsonSync('./db/user.json', json, { spaces: '\t' });
        console.log(`Remove Id ${id_user}`);
    }
    
}