"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = bootstrap;
const express = require("express");
const modules_1 = require("./modules");
function bootstrap() {
    const app = express();
    const port = 3000;
    app.use(express.json());
    app.use("/auth", modules_1.autRouter);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
