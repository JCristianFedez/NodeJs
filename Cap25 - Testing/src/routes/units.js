import express from "express";

const router = express.Router();


router.get("/", (req, res, next) => {
    res.render("temario", {
        title: "Soy temario",
        message: "Temario del curso de NodeJs"
    });

});

export default router;
