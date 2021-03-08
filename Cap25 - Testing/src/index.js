import path from "path";
import express from "express";
import morgan from "morgan";
import bodyParse from "body-parser";

import router from "./router";

let _server;
const server = {
    start() {

        const app = express();
        app.disable("x-powered-by");

        app.set("env", "development");

        // Usando middleware morgan
        app.use(morgan("combined"));

        // Usando middlware bodyParse
        app.use(bodyParse.json());
        app.use(bodyParse.urlencoded({ extended: false }));


        // Usando pug
        app.set("views", path.join(__dirname, "views"));
        app.set("view engine", "pug");


        //Rutas
        router(app);

        // Usar ficheros estaticos del directorio public(En este ejemplo los css y js)
        app.use("/static", express.static(path.join(__dirname, "public")));


        app.use((req, res, next) => {
            res.render("404", {
                title: "Error 404",
                message: "La ruta no existe"
            });
        });

        _server = app.listen("9000", () => {
            console.log("Servidor arrancado en http://localhost:9000");
        });

    },
    close() {
        _server.close();
    }
}

export default server;

if(!module.main){
    server.start();
}