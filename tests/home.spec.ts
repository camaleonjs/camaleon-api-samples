import * as supertest from "supertest";
import { expect } from "chai";
import { ApiStartup } from "camaleon-api";
import { HomeController } from "../src/controllers/home.controller";


describe("Startup server", () => {

  let request = undefined;

  const startup = new ApiStartup({
    port: 3000,
    controllers: [new HomeController()],
    afterConfigure: (server) => {
      request = supertest(server);
    }
  });

  startup.Run();

  it("Sever", () => {
    expect(request).to.not.undefined;
  });

  it("GET/ Home", (done) => {

    request.get("/")
      .expect(200)
      .end(done);
  });

});



