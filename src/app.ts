import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes";
import experienceRoutes from "./routes/exp.routes";
import bookingRoutes from "./routes/booking.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("API running"));

app.use("/auth", authRoutes);
app.use("/experiences", experienceRoutes);
app.use("/bookings", bookingRoutes);

export default app;
