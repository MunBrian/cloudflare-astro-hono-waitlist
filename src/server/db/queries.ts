import { D1Database } from "@cloudflare/workers-types";
import { getDB } from "./db";
import type { NewSubsriber } from "./schema";
import * as schema from "./schema"


export const insertSubscriber = async(
    d1Database: D1Database,
    newSubscriber: NewSubsriber
) => {
    const db = getDB(d1Database)

    const result = await db.insert(schema.subscribers).values(newSubscriber).returning

    return result
}