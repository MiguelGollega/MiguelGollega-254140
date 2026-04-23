const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 10000;

const routes = require("./routes/routes");
app.use("/api", routes);

var mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://Miguel254140:254140@cluster0.1gaae9p.mongodb.net/?appName=Cluster0",
);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("connected", () => {
  console.log("Database Connected");
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
