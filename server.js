import express from "express";
import cors from "cors";

const port = process.env.PORT || 1412;
const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  return res.json({ message: "xin chào" });
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
