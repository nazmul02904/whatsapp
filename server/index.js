import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import helmet from "helmet";
import authRouter from "./routers/authRouter.js"
import connectDb from "./config/db.js";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "https://3000-nazmul02904-whatsapp-zvbi069ezfn.ws-us88.gitpod.io",
    credentials: true,
  },
});


app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: "https://3000-nazmul02904-whatsapp-zvbi069ezfn.ws-us90.gitpod.io",
  credentials: true
}))
connectDb();
app.use(cookieParser())

app.use("/auth", authRouter)

io.on("connection", (socket) => {
  console.log(socket.id);
});

httpServer.listen(3001, () => console.log("Server is running"));
