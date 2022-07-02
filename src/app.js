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

app.get("/home", (req, res) => {
  res.render('home.html');
});

app.get("/citaslist", (req, res) => {
  res.render('citas-list.html');
});

app.get("/citasnew", (req, res) => {
  res.render('citas-new.html');
});

app.get("/citassearch", (req, res) => {
  res.render('citas-search.html');
});

app.get("/citasupdate", (req, res) => {
  res.render('citas-update.html');
});

app.get("/pacientelist", (req, res) => {
  res.render('paciente-list.html');
});

app.get("/pacientenew", (req, res) => {
  res.render('paciente-new.html');
});

app.get("/pacientesearch", (req, res) => {
  res.render('paciente-search.html');
});

app.get("/pacienteupdate", (req, res) => {
  res.render('paciente-update.html');
});

app.get("/userlist", (req, res) => {
  res.render('user-list.html');
});

app.get("/usernew", (req, res) => {
  res.render('user-new.html');
});

app.get("/usersearch", (req, res) => {
  res.render('user-search.html');
});

app.get("/userupdate", (req, res) => {
  res.render('user-update.html');
});

// Routes
//app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;
