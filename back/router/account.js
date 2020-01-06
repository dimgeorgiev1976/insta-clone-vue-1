import KoaRouter from 'koa-router'
import database from '../database'

const router = new KoaRouter

router.post("/signin", async (ctx, next) => {
    const { login = "", password = "" } = ctx.request.body
    const user = database.get('users').find(user => user.login === login)

    if (user && user.password === password) {
        await ctx.login(user)
        ctx.body = "Authenticated success."
    }

    else {
        ctx.body = "Login & password pair doesn't exsist."
    }
})

router.post("/continue", async (ctx, next) => {
    if (ctx.isAuthenticated()) {
        ctx.body = 'Continue session success.'
    }

    else {
        ctx.body = "Not continue session."
    }
})

router.post("/signout", async (ctx, next) => {
	if (ctx.isAuthenticated()) {
		ctx.logout()
	}
})

export default router