export default {
    namespaced: true,

    state: {
        isAuthenticated: false,
        user: {
            id: null,
            name: null
        }
    },

    mutations: {
        signin (state, user) {
            state.isAuthenticated = true

            Object.assign(state.user, user)
        },

        signout (state) {
            state.isAuthenticated = false

            Object.assign(state.user, {
                id: null,
                name: null
            })
        }
    },

    actions: {
        async signin ({ dispatch, state }, data) {
            // Уже авторизован
            if (state.isAuthenticated) {
                return true
            }

            const response = await fetch("/account/signin", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: data.login,
                    password: data.password
                })
            })

            const answer = await response.json()

            if (answer.isAuthenticated) {
                dispatch('signin', answer.user)
                return true
            }

            return false
        },

        async continue ({ state, dispatch }) {
            // Уже авторизован
            if (state.isAuthenticated) {
                return true
            }

            const response = await fetch("/account/continue", {
                method: 'POST'
            })

            const answer = await response.json()

            if (answer.isAuthenticated) {
                dispatch('signin', answer.user)
                return true
            }

            return false
        },

        async signout ({ state, dispatch }) {
            if (!state.isAuthenticated) {
                return true
            }

            fetch("/account/signout", {
                method: 'POST'
            })

            dispatch('signout')

            return true
        }
    }
}


// let result = null

// result = await fetch('http://localhost:3000/account/signin', {
//     method: "POST",
//     headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         login: "test1",
//         password: "test1"
//     })
// }).then(x => x.text())

// console.log(result)

// result = await fetch('http://localhost:3000/account/continue', {
//     method: "POST"
// }).then(x => x.text())

// console.log(result)