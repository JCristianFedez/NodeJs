"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _server;

const server = {
    start() {
        const app = (0, _express2.default)();

        (0, _config2.default)(app);

        _server = app.listen("9000", () => {
            if (process.env.NODE_ENV !== "test") {
                console.log("Servidor abierto en http://localhost:9000");
            }
        });
    },
    close() {
        _server.close();
    }
};

exports.default = server;


if (!module.main) {
    server.start();
}
