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
        if (decode.exp < Date.now()) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    getToken() {
        return localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }
    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new AuthService();