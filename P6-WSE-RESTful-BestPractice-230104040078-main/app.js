const express = require("express");
const morgan = require("morgan");

const productRoutes = require("./src/routes/products.routes");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/products", productRoutes);

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// error handler (WAJIB PALING BAWAH)
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
