import http from "../http-common";

class AuthService {

    signUp(data) {
        return http.post("/users", data);
    }
}

export default new AuthService();   