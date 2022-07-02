import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import pkg from "../package.json";

//import productRoutes from "./routes/products.routes";
import usersRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

import { createGroupAction, createPermissionAction, createPermission, createProfile, createProfilePermission, createUserinitial, createUsersProfile } from "./libs/initialSetup";

const path= require('path');

const app = express();
createGroupAction()
createPermissionAction()
createPermission()
createProfile()
createProfilePermission()
createUserinitial()
createUsersProfile()
/* createRoles();
createAdmin(); */

// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));

//Middlewares
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

// Middlewares
const corsOptions = {
  // origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Welcome Routes
app.get("/", (req, res) => {
  res.render('index.html');
});

// Routes
//app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;
