import bodyParser from "body-parser";
import logger from "morgan";
import cors from "cors";
import { config } from "datenv";

const SETTINGS = config();
console.log("SETTINGS",SETTINGS);

export default app => {
    app.disable("x-powered-by");

    app.set("env", SETTINGS.parsed.env);
    app.set("config",SETTINGS.parsed);
    app.local.env = app.get("env");
    app.local.config = app.get("config");

    console.log("config",app.local.config)
    
    if(process.env.NODE_ENV !== "test"){
        app.use(logger("combined"));
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extends: false}));
    
    app.use(cors());
}