import http from "http";
import fs from "fs";

const file = "index.html";

const server = http.createServer((request, response) => {

    // Ejemplo devolviendo archivo html
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});

    fs.readFile(file, (err, content) => {
        if(err){
            return console.log(err);
        }

        response.write(content);
        return response.end();
    });


    // Ejemplo devolviendo JSON
    // response.writeHead(200, { "Content-Type": "application/json" });
    // response.write(JSON.stringify({ "key": "valor" }));
    // response.end();

});

server.listen(8000, "localhost", err => {
    if (err) {
        return console.log("Error: ", err);
    }
    console.log("Server abierto en http://localhost:8000");
});