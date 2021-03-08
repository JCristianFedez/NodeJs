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
app.get("/", (req, res, next) => {
    res.render("home", {
        title: "Soy Home",
        message: "Cap20 - Layouts"
    });

});

app.get("/temario", (req, res, next) => {
    res.render("temario", {
        title: "Soy temario",
        message: "Temario del curso de NodeJs"
    });

})


//EJ:
// http://localhost:9000/cristian
// http://localhost:9000/pedro
// http://localhost:9000/david
// http://localhost:9000/antonio
// Las rutas paremetrizables se deben de poner siempre debajo
app.get("/:user", (req,res,next) => {
    console.log("Variable user= ", req.params.user);
    res.render("user", {
        title: "OpenWebinars - User",
        message: `Bienvenido usuario ${req.params.user}`
    })
});

// Usar ficheros estaticos del directorio public(En este ejemplo los css y js)
app.use("/static" , express.static(path.join(__dirname, "public")));

app.listen("9000", () => {
    console.log("Servidor arrancado en http://localhost:9000");
});
