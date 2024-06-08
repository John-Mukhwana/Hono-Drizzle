import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import {logger} from 'hono/logger'
import  {csrf}  from 'hono/csrf'
import {trimTrailingSlash} from 'hono/trailing-slash'
import { userRouter } from './users/user.router'

const app = new Hono()

//inbuild middleware
app.use(logger())
app.use(csrf()) //prevent csrf attack by checking csrf token in header
app.use(trimTrailingSlash()) //remove trailing slash from url
//default route
app.get('/ok', (c) => {
  return c.text('The server is running  🥵🥵🥵')
})

//custom route

app.route("/api",userRouter)

console.log(`Server is running on port ${process.env.PORT}`);

// app.route("/", userRouter);// /users



serve({
  fetch: app.fetch,
  port:Number(process.env.PORT)
});
