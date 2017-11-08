"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var supertest = require("supertest");
var chai_1 = require("chai");
var camaleon_api_1 = require("camaleon-api");
var home_controller_1 = require("../src/controllers/home.controller");
describe("Startup server", function () {
    var request = undefined;
    var startup = new camaleon_api_1.ApiStartup({
        port: 3000,
        controllers: [new home_controller_1.HomeController()],
        afterConfigure: function (server) {
            request = supertest(server);
        }
    });
    startup.Run();
    it("Sever", function () {
        chai_1.expect(request).to.not.undefined;
    });
    it("GET/ Home", function (done) {
        request.get("/")
            .expect(200)
            .end(done);
    });
});
