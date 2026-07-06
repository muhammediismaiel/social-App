"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = bootstrap;
const express_1 = require("express");
const modules_1 = require("./modules");
function bootstrap() {
    const app = (0, express_1.default)();
    const port = 3000;
    app.use(express_1.default.json());
    app.use("/auth", modules_1.autRouter);
    app.use((error, _req, res, _next) => {
        return res
            .status(error.cause || 500)
            .json({ message: error.message, success: false });
    });
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
