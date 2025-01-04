import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import usersRouter from "./routes/users";
import projectsRouter from "./routes/projects";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

export default app;
