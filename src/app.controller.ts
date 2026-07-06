import express from "express";
import {autRouter} from "./modules";

export function bootstrap() {
const app = express();
    const port = 3000;
    app.use(express.json());
    app.use("/auth",autRouter)
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)})

}