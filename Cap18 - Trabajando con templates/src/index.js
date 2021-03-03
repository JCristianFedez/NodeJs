import path from "path";
import express from "express";
import morgan from "morgan";
import bodyParse from "body-parser";

const app = express();
app.disable("x-powered-by");

app.set("env", "development");

// Usando middleware morgan
app.use(morgan("combined"));

// Usando middleware bodyParse
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));


// Usando pug
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "pug");


app.get("/", (req, res) => {
    // res.end("Hola Mundo Express");
    res.render("home");
});

app.listen("9000", () => {
    console.log("Servidor arrancado en http://localhost:9000");
});