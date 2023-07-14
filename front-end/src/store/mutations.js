export function setUser(state, user) {
    state.user.data = user;

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
    state.user.data.verify = verifyStatus
}

export function logout(state) {
    state.user.data = {};
    state.user.token = null;
    sessionStorage.removeItem('TOKEN');
}