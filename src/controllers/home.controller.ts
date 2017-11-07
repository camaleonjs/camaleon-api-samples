import * as restify from "restify";
import { IController } from "camaleon-api";

export class HomeController implements IController {
    register(server: restify.Server): void {
        server.get("/", async (req, res, next) => {
            res.send(200, {});
        });
    }

}