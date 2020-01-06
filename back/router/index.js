import KoaRouter from 'koa-router'

import account from './account'
import comment from './comment'
import post from './post'

const router = new KoaRouter

router.use('/account', account.routes(), account.allowedMethods())
router.use('/comment', comment.routes(), comment.allowedMethods())
router.use('/post', post.routes(), post.allowedMethods())

export default router