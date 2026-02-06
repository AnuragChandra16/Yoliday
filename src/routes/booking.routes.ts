import { Router } from "express";
import { pool } from "../db";
import { requireAuth } from "../middlewares/requireauth";

const router = Router();

router.post("/:id", requireAuth, async (req:any,res)=>{
  const { seats } = req.body;

  const result = await pool.query(
    "INSERT INTO bookings(experience_id,user_id,seats) VALUES($1,$2,$3) RETURNING *",
    [req.params.id, req.user.userId, seats]
  );

  res.json(result.rows[0]);
});

export default router;
