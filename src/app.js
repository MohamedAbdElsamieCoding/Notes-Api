import express from "express";
import { requestLogger } from "./middlewares/requestLogger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import notesRouter from "./routes/notes.route.js";
import usersRouter from "./routes/users.route.js";

import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());
app.use(requestLogger);

app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);

app.use(errorHandler);

export default app;
