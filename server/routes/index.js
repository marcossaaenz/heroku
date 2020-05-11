const express = require("express");
const router = express.Router();

const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

const nosotrosControllers = require("../controllers/nosotrosControllers");
const homeControllers = require("../controllers/homeControllers");
const viajesControllers = require("../controllers/viajesControllers");
const testimonialesControllers = require("../controllers/testimonialesControllers");

module.exports = function () {
  const app = express();

  router.get("/", homeControllers.consultasHomepage);
  router.get("/nosotros", nosotrosControllers.infoNosotros);
  router.get("/viajes", viajesControllers.mostrarViajes);
  router.get("/viajes/:id", viajesControllers.mostrarViaje);

  router.get("/testimoniales", testimonialesControllers.mostrarTestimoniales);
  //cuando se llena el fomrulario o los testimoniales
  router.post("/testimoniales", testimonialesControllers.agregarTestimonial);

  return router;
};
