const copy = x => JSON.parse(JSON.stringify(x))
const fGet = x => fetch(x, { method: 'GET' }).then(x => x.json())

export default {
    namespaced: true,

    state: {
        posts: []
    },

    mutations: {
        addPost (state, newPost) {
            for (const post of state.posts) {
                if (post.id === newPost.id) {
                    return Object.assign(post, newPost)
                }
            }

            state.posts.push(copy(newPost))
        }
    },

    actions: {
        async loadWall ({ commit }) {
            const postIds = await fGet('/api/wall')
            const posts = await Promise.all(postIds.map(x => fGet(`/api/post/${x}`)))
            
            for (const post of posts) {
                commit('addPost', post)
            }
        },

        async loadPost ({ commit }, postId) {
            const post = await fGet(`/api/post/${postId}`)

            commit('addPost', post)

            return post
        },

        getPostById ({ state }, postId) {
            for (const post of state.posts) {
                if (post.id === postId) {
                    return post
                }
            }

            return false
        }
    }
}