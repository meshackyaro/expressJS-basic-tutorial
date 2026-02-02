import express from "express";
import routes from "./routes/index.js";
import userRoutes from "./routes/user.router.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { requestLogger } from "./middlewares/logger.middleware.js";

export const app = express();

// built-in middleware to parse JSON bodies
app.use(express.json());

// custom middleware to log each request
app.use(requestLogger);

// routes: built-in middleware to parses URL-encoded bodies
app.use("/api", routes);
app.use("/api/users", userRoutes);

// error handling middleware (ALWAYS AT THE END)
app.use(errorHandler);