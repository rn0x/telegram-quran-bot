import fs from 'fs-extra';

export default function MenuNmber(from, number) {

    let db_menu = fs.readJsonSync('./db/Menu.json');

    fs.writeJsonSync('./db/Menu.json', Object.assign({}, db_menu, {[from]:{"menu_name":number}}));

}