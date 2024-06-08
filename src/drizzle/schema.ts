

import {pgTable,serial,text,varchar, integer} from "drizzle-orm/pg-core";

export const userTable=pgTable( "user",{

    id:serial("id").primaryKey(),
    fullName: text("full_name"),
    phone: varchar("phone", { length: 100}),
    address: varchar("address ", { length: 100}),
    score: integer("score"),
})