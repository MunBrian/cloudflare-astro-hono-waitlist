import {Database} from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';


export const getTestDB = () => {
    //conect to the test database
    const sqlite = new Database('test.sqlite')

    return drizzle(sqlite)


}