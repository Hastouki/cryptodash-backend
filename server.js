const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/db");

app.use(cors({
  origin: "*"
}));
app.use(express.json());

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
