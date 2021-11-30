const TokenKey = "tk";

export function getToken() {
    return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
    return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return sessionStorage.remove(TokenKey)
}
export function setStorage(key, value) {
    return localStorage.setItem(key, value)
}
export function getStorage(key) {
    return localStorage.getItem(key)
}
export function removeStorage(key) {
    return localStorage.remove(key)
}