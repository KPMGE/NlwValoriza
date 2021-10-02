import express from "express";

const app = express();

app.post("/post", (request, response) => {
  return response.send("TEst post");
});

app.get("/test", (request, response) => {
  return response.send("Hello World!");
});

app.listen(3000, () => console.log("Server running at port 3000..."));
