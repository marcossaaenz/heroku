//iimportar express
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");

const configs = require("./config");

// db.authenticate()
//   .then(() => console.log("DB conectada"))
//   .catch((error) => console.log(error));

//configurar express
const app = express();

//habilitar pug
app.set("view engine", "pug");

//añadir las vistas
app.set("views", path.join(__dirname, "./views"));

//añadir carpeta estatica llamada public
app.use(express.static("public"));

//validar si es desarrollo o produccito
const config = configs[app.get("env")];

//crear variable para sitio web
app.locals.titulo = config.nombresitio;

//muestra el año actua y genera la ruta
app.use((req, res, next) => {
  //crear una nueva fecha
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path;
  return next();
});

//ejecutamos body parser
app.use(bodyParser.urlencoded({ extended: true }));

//cargar las rutas
app.use("/", routes());

/* Puerto y host para la app */
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log("El servidor esta funcionando");
});
