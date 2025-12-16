import {Database} from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import {migrate} from 'drizzle-orm/bun-sqlite/migrator'

const createTestDb = async() => {

    //Always create a fresh test.sqlite file

    //check if test sqlite file exists
    const testDb = Bun.file('test.sqlite');

    //check if file exists
    if(await testDb.exists()){
        //delete the file
        await Bun.file('test.sqlite').delete()
    }

    const sqlite = new Database('test.sqlite');

    //connect db to drizzle
    const db = drizzle(sqlite)

    migrate(db, {
        migrationsFolder: "./src/server/db/migrations"
    })

    console.log('Test database created and migrated')
}


createTestDb()