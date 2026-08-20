import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({ status: "ok", service: "school-api" });
});

app.get("/api/public/school-profile", (_request, response) => {
  response.json({
    name: "Horizon Academy",
    admissionsOpen: true,
    admissionsYear: "2026–27",
    email: "hello@horizonacademy.edu",
    phone: "+1 (555) 014-288",
  });
});

app.listen(port, () => {
  console.log(`School API listening on http://localhost:${port}`);
});
