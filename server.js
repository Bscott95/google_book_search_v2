require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Book', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log('WORKS!'))
.catch(() => console.log('BAD!'));
// .catch(e => console.log(e));

const PORT = process.env.PORT || 3001;
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get("*", function (_req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!!!`);
});
