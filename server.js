const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("Hello India! This is a sample Node.js app for testing deployment.");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
