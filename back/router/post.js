import KoaRouter from 'koa-router'
import database from '../database'

const router = new KoaRouter

router.get('/:postId', async (ctx, next) => {
    const users = database.get('users')
    const posts = database.get('posts')
    const comments = database.get('comments')

    const postId = parseInt(ctx.params.postId)
    const post = posts.find(x => x.id === postId)

    const { login, password, ...author } = users.find(x => x.id === post.authorId)
    post.user = author
    
    const ownComments = comments.filter(x => x.postId === post.id)
    ownComments.forEach(x => {
        const { login, password, ...author } = users.find(y => y.id === x.authorId)
        x.user = author
    })
    post.comments = ownComments

    ctx.body = post
})

export default router