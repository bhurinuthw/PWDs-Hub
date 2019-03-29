export function getToken() {
    let token = localStorage.getItem('user');
    token = JSON.parse(token).token;
    return token;
}