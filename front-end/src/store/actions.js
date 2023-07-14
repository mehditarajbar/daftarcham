import axiosClient from "../axios";

export async function csrf(){
    await axiosClient.get('/sanctum/csrf-cookie')
}

export async function logout({commit}){
    csrf()
    await axiosClient.post('/api/logout')
    .then((res)=>{
        commit('logout')
        return res;
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
     await axiosClient
    .post('/api/verify-code',data)
    .then(({data})=>{    
        commit('setToken', data.token);
        return data;
    })
}

export async function setUser({commit}){
    return await axiosClient
    .get('/api/user')
    .then(({data})=>{
        commit('setUser',data.user)
        return data;
    })
}