import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("home", {
        title: "Soy Home",
        message: "Cap20 - Layouts"
    });

    res.end();
});

export default router;
