import passport from 'koa-passport'
import LocalStrategy from 'passport-local'

import database from './database'

passport.use(new LocalStrategy((username, password, done) => {
    const user = database.get('users').find(user => user.login === username)

    if (user.password === password) {
        return done(null, user)
    }

    return done(null, false)

    // User.findOne({ username: username }, (err, user) => {
    //     if (err) {
    //         return done(err)
    //     }

    //     if (!user) {
    //         return done(null, false)
    //     }

    //     if (!user.verifyPassword(password)) {
    //         return done(null, false)
    //     }

    //     return done(null, user)
    // })
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    id = parseInt(id)
console.log('deserialize', id)
    const user = database.get('users').find(user => user.id === id)

    if (user) {
        done(null, user)
    }

    else {
        done(`User (with id=${id}) don't fined.`)
    }
})

export default passport