import {it, expect, mock, beforeEach} from "bun:test"
import { insertSubscriber } from "./queries"
import type { D1Database } from "@cloudflare/workers-types"
import type {NewSubscriber } from "./schema"
import * as schema from "./schema"
import { getTestDB } from "../../../test/get-test-db"
import {reset} from "drizzle-seed"
//replace getDb function in db.ts with getTestDB function within the test folder
mock.module("./db.ts", () => {
    return {
        getDB: () => getTestDB()
    }
})

//clear data in the test db before running the tests
beforeEach(async() => {
    const db = getTestDB();

    //reset db
    await reset(db, schema)
})

it("insert a new subscriber", async () => {

    //create a subscriber
    const newSub: NewSubscriber = {
        email: 'test@test.com'
    }

    const subscriber = await insertSubscriber({} as D1Database, newSub )

     console.log(subscriber)

    expect(subscriber.email).toBe(newSub.email)
    expect(subscriber.id).toBeDefined()
    expect(subscriber.createdAt).toBeDefined()


})


it("throws an error when inserting duplicate emails to db", async() => {
    //create a subscriber
    const newSub: NewSubscriber = {
        email: 'test@test.com' 
    }

    await insertSubscriber({} as D1Database, newSub )

    expect(insertSubscriber({} as D1Database, newSub )).rejects.toThrow()
})