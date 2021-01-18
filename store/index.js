const cookieparser = process.server ? require('cookieparser') : undefined
// 函数  防止数据冲突
export const state = () => {
    return {
        user: null
    }
}

export const getters = {}
export const mutations = {
    setUser(state, payload) {
        state.user= payload
    }
}
export const actions = {
    // 服务端渲染时自动调用，用于初始化数据，传递给客户端使用
    nuxtServerInit ({ commit }, { req }) {
        let user = null
        if(req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (error) {
                
            }
        }
        commit('setUser', user)
    }
}