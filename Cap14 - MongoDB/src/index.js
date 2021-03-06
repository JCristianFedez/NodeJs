import mongoose, { mongo } from 'mongoose';

const host = 'mongodb://127.0.0.1:27017/films';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection(
    host,
    {
        poolSize: 200
    }
);

conn.on("error", err => {
    console.log("Error: ", err);
    return process.exit();
});

conn.on("connected", () => console.log("Conectado a mongo"));

const filmSchema = new mongoose.Schema(
    {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, trim: true, required: true },
    poster: { type: String, trim: true, required: true }
    },
    {
        strict: false
    }
);

const Film = conn.model("Film", filmSchema);

const newDocument = new Film({
    _id: new mongoose.Types.ObjectId(),
    title: "Star Wars The Last Jedi",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
});

newDocument.save(err => {
    if(err){
        conn.close();
        throw err;
    }

    console.log("Almacenado");
    conn.close();
});