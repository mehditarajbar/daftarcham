import axiosClient from "../axios";

export async function csrf(){
    await axiosClient.get('/sanctum/csrf-cookie')
}


export function register({ commit }, user) {
    return axiosClient
        .post('/register', user)
        .then(({ data }) => {
            commit('setUser', data.user);
            commit('setToken', data.token);
            return data
        })
}

export async function login({ commit }, data) {
    csrf()
    await axiosClient.post('/api/auth', data)
        .then(({ data }) => {
            commit('setVerify',data.verify)
            return data;
        })
}

export async function authentication({commit},data){
    csrf()
    return await axiosClient
    .post('/api/verify-code',data)
    .then(({data})=>{
        // commit('setUser', data.user);
        commit('setToken', data.token);
        return data;
    })
}

export async function setUser({commit}){
    return await axiosClient
    .get('/api/user',data)
    .then(({data})=>{
        commit('setUser',data.user)
        return data;
    })
}