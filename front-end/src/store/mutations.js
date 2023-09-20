export function setUser(state, user) {
    state.user.data = user;
    state.user.verified=user.verified
    state.user.permissions=user.ability.permissions,
    state.user.role=user.ability.role
    state.loading=true
}

export function setToken(state, token) {
    state.user.token = token;
    if (token) {
        sessionStorage.setItem('TOKEN', token);
    } else {
        sessionStorage.removeItem('TOKEN');
    }
}

export function setVerify(state, verifyStatus) {
    state.user.step_verify = verifyStatus
}

export function logout(state) {
    state.user.data = {};
    state.user.token = null;
    sessionStorage.removeItem('TOKEN');
}

export function setNotes(state,not){
    state.notes.data=not.data
}

export function setNotesLoading(state,loading){
    state.notes.loading=loading
}

export function setCategories(state,cat){
    state.categories.data=cat.data
}

export function setCategoriesLoading(state,loading){
    state.categories.loading=loading
}

export function setCategoryLoading(state,loading){
    state.category.loading=loading
}

export function setCategory(state,cat){
    state.category.data=cat
}