export function setUser(state, user) {
    state.user.data = user;
    state.user.verified=user.verified
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