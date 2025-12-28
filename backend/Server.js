const express = require("express");

const app = express();

// test route
app.get("/", (req, res) => {
  res.send("EduBridge Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});