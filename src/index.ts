import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression"; // compresses requests
import bodyParser from "body-parser";
import logger from "./utils/logger";
import dotenv from "dotenv";
import morgan from "morgan";
import fs from "fs";
import router from "./routes";

// dotenv configuration
fs.existsSync(".env")
    ? dotenv.config({ path: ".env" })
    : logger.error(
        ".env file not found. Please rename env.eample and set variables"
    );

// Create Express server
const app = express();
// Express configuration
app.set("port", process.env.PORT || 5000);
app.disable("x-powered-by");

// apply middlewares
app.use(
    compression(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
    helmet(),
    morgan("dev")
);

app.use("/api", router);
/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log(
        "App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default app;
