import Koa from "koa"
import CatRouter from "./API"

const app = new Koa();
app.use(CatRouter.routes())

app.listen(3000);
console.log("App is running")