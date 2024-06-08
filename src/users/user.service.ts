import db from "../drizzle/db";
export const usersService=async () =>{

    return await db.query.userTable.findMany();
}