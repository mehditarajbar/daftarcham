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
    return await axiosClient.post('/api/auth', data)
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

export function getNotes({commit}, { url = null } = {}) {
    url = url || '/api/notes';
    commit('setNotesLoading',true)
    return axiosClient
        .get(url)
        .then((response)=>{
            commit('setNotesLoading',false)
            commit('setNotes',response.data);
        })
}

export function createNote({ commit }, data) {
    return axiosClient
        .post('/api/notes', data)
        .then(({ data }) => {
            return data
        })
        .catch(error => {
            throw new error
        })
}

export function getNote({commit},id){
    commit('setNoteLoading',true)
    return axiosClient
    .get(`/api/notes/${id}`)
    .then((res)=>{
        commit('setNoteLoading',false)
        commit('setNote',res.data)
        
        return res;
    })
}

export function createCategory({commit},data){
    return axiosClient
    .post('/api/categories',data)
    .then(({data})=>{
        return data
    })
    .catch(error=>{
        throw new error
    })
}
export function updateCategory({commit},data){
    return axiosClient
    .put(`/api/categories/${data.id}`,data)
    .then(({data})=>{
        return data
    })
    .catch(error=>{
        throw new error
    })
}

export function getCategories({ commit }, { url = null } = {}) {
    url = url || '/api/categories';
    commit('setCategoriesLoading',true)
    return axiosClient
        .get(url)
        .then((response)=>{
            commit('setCategoriesLoading',false)
            commit('setCategories',response.data);
        })

}

export function getCategory({commit},id){
    commit('setCategoryLoading',true)
    return axiosClient
    .get(`/api/categories/${id}`)
    .then((res)=>{
        commit('setCategoryLoading',false)
        commit('setCategory',res.data)
        
        return res;
    })
}