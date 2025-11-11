import logger from "./src/config/logger.js";

import connectDb from "./src/config/db.js";
import app from "./src/app.js";

import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connectDb();
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
    logger.info(`Environment : ${process.env.NODE_ENV}`);
  });
};

startServer();
