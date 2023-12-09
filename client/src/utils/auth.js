import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }
    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now()/1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken, username) {
        localStorage.setItem('id_token', idToken);
        localStorage.setItem('username', username)
        window.location.assign('/players');
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('username')
        window.location.assign('/');
    }
}

export default new AuthService();