import { Context } from 'hono';
import { usersService } from './user.service';
const users=[

    {
        id:1,
        name:'John Doe',
        email:"john@gmail.com"
    },
    {
        id:2,
        name:'Jane Doe',
        email:"jane@gmail.com"
    
    }
    
]

export const listUsers=async (c:Context)=>{
    const data= await usersService();
   if (data.length > 0 || data.length === null){
    return c.text("User not found",404);
   }
    return  c.json({users});

}
export const getUser=async (c:Context)=>{
    const id=Number(c.req.param("id"));
    const user = users.find((user)=>user.id ===id);
    if (!user){
        return c.text("User not found",404);
    }
    return c.json({user}); 
}

export const createUser=async (c:Context)=>{
    const user= await c.req.json();
  console.log(user);
  if (!user || !user.name || !user.email ){
      return c.text("Invalid user data");
  }
  users.push(user);
  return c.json(user);
}

export const updateUser=async (c:Context)=>{
    const id = Number(c.req.param("id"));
    const user = await c.req.json();
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return c.text("User not found", 404);
    }
    users[index] = user;
    return c.json(user, 200);
}