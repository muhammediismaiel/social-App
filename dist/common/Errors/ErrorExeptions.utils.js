"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.conflictError = exports.BadRequestError = exports.UnauthorizedError = exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor(message) {
        super(message, { cause: 404 });
        this.name = "NotFoundError";
    }
}
exports.NotFoundError = NotFoundError;
class UnauthorizedError extends Error {
    constructor(message) {
        super(message, { cause: 401 });
        this.name = "UnauthorizedError";
    }
}
exports.UnauthorizedError = UnauthorizedError;
class BadRequestError extends Error {
    constructor(message) {
        super(message, { cause: 400 });
        this.name = "BadRequestError";
    }
}
exports.BadRequestError = BadRequestError;
class conflictError extends Error {
    constructor(message) {
        super(message, { cause: 409 });
        this.name = "conflictError";
    }
}
exports.conflictError = conflictError;
class InternalServerError extends Error {
    constructor(message) {
        super(message, { cause: 500 });
        this.name = "InternalServerError";
    }
}
exports.InternalServerError = InternalServerError;
