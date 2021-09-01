const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const config = require("./lib/config");
const routes = require("./src/routes/index");

const app = express();

//headers
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

//rutas
app.use("/", routes);

//errores
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// Listening
app.listen(config.port, function () {
  console.log(`App is listening on port ${config.port}`);
});
