"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camaleon_api_1 = require("camaleon-api");
var home_controller_1 = require("./controllers/home.controller");
var port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
var startup = new camaleon_api_1.ApiStartup({
    port: port,
    controllers: [new home_controller_1.HomeController()]
});
startup.Run();
