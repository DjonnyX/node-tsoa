import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";
import { requestLoggerMiddleware } from "./middlewares/requestLoggerMiddleware";
import { RegisterRoutes } from "./routes";
import * as swaggerUI from "swagger-ui-express";

const app = express();
app.use(cors());
app.use(bodyparser());

app.use(requestLoggerMiddleware);
RegisterRoutes(app);

try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const swaggerDocument = require("../swagger.json");
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
} catch (err) {
    console.error("Unable to read swagger.json", err);
}

export { app };