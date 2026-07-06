"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    let user = { userName: "", email: "" };
    req.user = user;
    next();
};
exports.isAuthenticated = isAuthenticated;
