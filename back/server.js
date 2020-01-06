import bodyParser from 'koa-bodyparser'
import session from 'koa-session'
import cors from '@koa/cors'
import config from 'config'
import Koa from 'koa'

import passport from './passport'
import router from './router'

const app = new Koa

app.keys = ['secret']

app
    .use(cors())
    .use(bodyParser())
    .use(session({}, app))
    .use(passport.initialize())
    .use(passport.session())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(config.get('port'), () => {
        console.log(`Server started (port: ${config.get('port')})`, new Date)
        console.log('process.env.NODE_ENV =', process.env.NODE_ENV)
    })

export default app