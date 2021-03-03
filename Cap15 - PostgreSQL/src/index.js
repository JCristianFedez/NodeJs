import Sequelize from "Sequelize";

const sequelize = new Sequelize("films", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const Film = sequelize.define(
    "Film",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            field: "id",
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            field: "title"
        },
        poster: {
            type: Sequelize.STRING,
            field: "poster"
        }
    },
    {
        freezeTableName: true
    }
);

Film.sync({ force: true })
    .then(() => Film.create({
        title: "Star Wars: The Last Jedi",
        poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
    }));