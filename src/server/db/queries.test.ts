import {it, expect, mock, beforeEach} from "bun:test"
import { insertSubscriber } from "./queries"
import type { D1Database } from "@cloudflare/workers-types"
import type { NewSubscriber } from "./schema"
import { getTestDB } from "../../../test/get-test-db"

//replace getDb function in db.ts with getTestDB function within the test folder
mock.module("./db.ts", () => {
    return {
        getDB: () => getTestDB()
    }
})

it("insert a new subscriber", async () => {

    //create a subscriber
    const newSub: NewSubscriber = {
        email: 'test@test.com'
    }

    const subscriber = await insertSubscriber({} as D1Database, newSub )

    expect(subscriber.email).toBe(newSub.email)
    expect(subscriber.id).toBeDefined()
    expect(subscriber.createdAt).toBeDefined()

    console.log(subscriber)

})