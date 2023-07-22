import axiosClient from "../axios";

export async function csrf() {
    await axiosClient.get('/api/csrf-cookie')
}

export async function logout({ commit }) {
    csrf()
    await axiosClient.post('/api/logout')
        .then((res) => {
            commit('logout')
            return res;
        })
}

export async function login({ commit }, data) {
   return  await axiosClient.post('/api/auth', data)
        .then(({ data }) => {
            commit('setVerify', data.step_verify)
            return data;
        })
}

export async function authentication({ commit }, data) {
    await axiosClient
        .post('/api/verify-code', data)
        .then(({ data }) => {
            commit('setToken', data.token);
            return data;
        })
}

export async function setUser({ commit }) {
    csrf()
    await axiosClient
        .get('/api/user')
        .then(({ data }) => {
            commit('setUser', data.user)
            return data;
        }).catch(error => {
            commit('setToken', null)
            commit('setUser', {})
        })
}

export async function createNote({ commit }, data) {
    return axiosClient
        .post('/api/notes', data)
        .then(({data}) => {
            return data
        })
        .catch(error => {
            throw new error
        })
}