// import dotenv from "dotenv";
// import fs from "fs";

/*if (fs.existsSync(".env")) {
    logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
} else {
    logger.debug("Using .env.example file to supply config environment variables");
    dotenv.config({ path: ".env.example" });  // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env["SESSION_SECRET"];
export const DB_HOST = prod ? process.env["DB_HOST"] : process.env["DB_HOST_LOCAL"];
export const DB_PORT = Number.parseInt(prod ? process.env["DB_PORT"] : process.env["DB_PORT_LOCAL"]);
export const DB_USER = prod ? process.env["DB_USER"] : process.env["DB_USER_LOCAL"];
export const DB_PASSWORD = prod ? process.env["DB_PASSWORD"] : process.env["DB_PASSWORD_LOCAL"];
export const DB_NAME = prod ? process.env["DB_NAME"] : process.env["DB_NAME_LOCAL"];


if (!SESSION_SECRET) {
    logger.error("No client secret. Set SESSION_SECRET environment variable.");
    process.exit(1);
}

if (!DB_HOST) {
    if (prod) {
        logger.error("No data base connection host. Set DB_HOST environment variable.");
    } else {
        logger.error("No data base connection host. Set DB_HOST_LOCAL environment variable.");
    }
    process.exit(1);
}

if (!DB_PORT) {
    if (prod) {
        logger.error("No data base connection port. Set DB_PORT environment variable.");
    } else {
        logger.error("No data base connection port. Set DB_PORT_LOCAL environment variable.");
    }
    process.exit(1);
}

if (!DB_USER) {
    if (prod) {
        logger.error("No data base connection db_user. Set DB_USER environment variable.");
    } else {
        logger.error("No data base connection db_user. Set DB_USER_LOCAL environment variable.");
    }
    process.exit(1);
}

if (!DB_PASSWORD) {
    if (prod) {
        logger.error("No data base connection password. Set DB_URI environment variable.");
    } else {
        logger.error("No data base connection password. Set DB_URI_LOCAL environment variable.");
    }
    process.exit(1);
}

if (!DB_NAME) {
    if (prod) {
        logger.error("No data base connection name. Set DB_PASSWORD environment variable.");
    } else {
        logger.error("No data base connection name. Set DB_PASSWORD_LOCAL environment variable.");
    }
    process.exit(1);
}*/
