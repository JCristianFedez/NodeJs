import path from "path";
import express from "express";
import morgan from "morgan";
import bodyParse from "body-parser";


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


// Rutas
app.get("/", (req, res) => {
    res.write(`
        <h1>Pagina inicial</h1>
        <a href='/temario'>Temario</a>
        <a href='/temario/noexisto'>Ruta inexistente</a>
    `);
    res.end();
});

app.get("/temario", (req, res) => {
    res.write(`
        <h1>Estas en temario</h1>
        <a href='/'>Volver a inicio</a>
    `);
    res.end();
})

app.listen("9000", () => {
    console.log("Servidor arrancado en http://localhost:9000");
});