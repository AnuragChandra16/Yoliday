import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db";

const router = Router();

router.post("/signup", async (req, res) => {
  const { email, password, role } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const result = await pool.query(
    "INSERT INTO users(email,password_hash,role) VALUES($1,$2,$3) RETURNING id,role",
    [email, hash, role]
  );

  res.json(result.rows[0]);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  const user = result.rows[0];

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.sendStatus(401);

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!
  );

  res.json({ token });
});

export default router;
