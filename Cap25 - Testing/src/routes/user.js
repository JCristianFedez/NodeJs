import express from "express";

const router = express.Router();


//EJ:
// http://localhost:9000/cristian
// http://localhost:9000/pedro
// http://localhost:9000/david
// http://localhost:9000/antonio
// Las rutas paremetrizables se deben de poner siempre debajo
router.get("/:user", (req,res,next) => {
    console.log("Variable user= ", req.params.user);
    res.render("user", {
        title: "OpenWebinars - User",
        message: `Bienvenido usuario ${req.params.user}`
    });
});

router.get("/:user/bio", (req,res,next) => {
    console.log("Debemos mostrar la bio del usuario: ", req.params.user);
    
});

export default router;
