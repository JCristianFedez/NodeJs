import express from "express";

let _server;

const server = {
    start(){
        const app = express();

        _server = app.listen("9000", () => {
            if(process.env.NODE_ENV !== "test"){
                console.log("Servidor abierto en http://localhost:9000");
            }
        })
    },
    close(){
        _server.close();
    }
}

export default server;

if(!module.main){
    server.start();
}