const express = require("express"); // commonjs ew 🤢
const app = express();

app.get("/", (req, res) => res.send("Hello express"));
app.get("/web", (req, res) => res.send("<h1>Hello, web</h1>"));

function handleMyRequest(req, res) {
  res.send(`<h1>${JSON.stringify(req.query)}</h1>`);
}

app.get("/my-request", handleMyRequest);

app.listen(3030);
console.log("Server is running");
