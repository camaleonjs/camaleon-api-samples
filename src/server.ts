import { ApiStartup } from "camaleon-api";
import { HomeController } from "./controllers/home.controller";

const port =  process.env.PORT ? parseInt(process.env.PORT) : 3000;

const startup = new ApiStartup({
  port: port,
  controllers: [new HomeController()]
});

startup.Run();