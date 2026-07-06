"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthService {
    constructor() { }
    checkUser() { }
    signup(data) {
        data.email;
        data.password;
        data.phoneNumber;
        data.userName;
    }
    login(data) {
        data.email;
        data.password;
    }
    forgetPassword(data) {
        data.email;
    }
    sendOTP() { }
    verifyAccount() { }
}
exports.default = AuthService;
