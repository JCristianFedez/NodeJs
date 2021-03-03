import http from "http";
import fs from "fs";
import path from "path";


const server = http.createServer((request, response) => {

    let filePath = request.url;

    // Si se accede por localhost:8000/
    if (filePath === "/") {
        filePath = "index.html";
    }


    filePath = `./src/${filePath}`;

    // Cojemos la extension del archivo
    const extName = path.extname(filePath);

    // Segun el archivo tendremos un contentype o otro
    let contentType;
    switch (extName) {
        case ".css":
            contentType = "text/css";
            break;
        case ".html":
            contentType = "text/html";
            break;
    }

    // Establecemos la cabezera
    response.writeHead(200, {"content-Type": `${contentType}; charset-UTF-8`});


    // Leemos el archivo
    fs.readFile(filePath, (err ,content) => {
        if(err){
            return console.log("Error: ",err);
        }

        // Escribimos el contenido del archivo en la respuesta
        response.write(content);
        response.end();
    });

});

server.listen(8000, "localhost", err => {
    if (err) {
        return console.log("Error: ", err);
    }

    console.log("Server abierto en http://localhost:8000");
});