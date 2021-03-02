import fs from "fs";
import readline from "readline";

const file = process.argv[2];
let lines = 0;

const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
});

rl.on("line", line => {
    ++lines;
    console.log(`Numero total de caracteres en linea ${line.length}`);
});

rl.on("close", () => console.log(`Numero total de lineas: ${lines}`));