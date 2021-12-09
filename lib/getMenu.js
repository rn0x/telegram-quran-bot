
import fs from 'fs-extra';

export default async function getMenu(from) {

    let db_menu = fs.readJsonSync('./db/Menu.json');

    return db_menu[from].menu_name;

    
}