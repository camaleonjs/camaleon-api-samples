import { ApiStartup } from "camaleon-api";
import { HomeController } from "./controllers/home.controller";

const startup = new ApiStartup({
  port: 3000,
  controllers: [new HomeController()]
});

startup.Run();