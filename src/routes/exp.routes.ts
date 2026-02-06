// import { Router } from "express";
// import { pool } from "../db";
// import { requireAuth } from "../middlewares/requireauth";
// import { requireRole } from "../middlewares/requirerole";

// const router = Router();

// router.post("/", requireAuth, requireRole("host","admin"), async (req:any,res)=>{
//   const { title, location, price } = req.body;

//   const result = await pool.query(
//     "INSERT INTO experiences(title,location,price,created_by) VALUES($1,$2,$3,$4) RETURNING *",
//     [title, location, price, req.user.userId]
//   );

//   res.json(result.rows[0]);
// });

// router.get("/", async (_,res)=>{
//   const result = await pool.query("SELECT * FROM experiences WHERE status='published'");
//   res.json(result.rows);
// });

// export default router;


import { Router } from "express";
import { pool } from "../db";
import { requireAuth } from "../middlewares/requireauth";
import { requireRole } from "../middlewares/requirerole";

const router = Router();


// ===============================
// CREATE EXPERIENCE (host/admin)
// ===============================
router.post(
  "/",
  requireAuth,
  requireRole("host", "admin"),
  async (req: any, res) => {
    const { title, location, price } = req.body;

    const result = await pool.query(
      `INSERT INTO experiences(title,location,price,created_by,status)
       VALUES($1,$2,$3,$4,'draft')
       RETURNING *`,
      [title, location, price, req.user.userId]
    );

    res.json(result.rows[0]);
  }
);


// ===============================
// LIST PUBLISHED EXPERIENCES (public)
// ===============================
router.get("/", async (_, res) => {
  const result = await pool.query(
    "SELECT * FROM experiences WHERE status='published'"
  );

  res.json(result.rows);
});


// ===============================
// PUBLISH EXPERIENCE (owner/admin)
// ===============================
router.patch(
  "/:id/publish",
  requireAuth,
  requireRole("host", "admin"),
  async (req: any, res) => {
    const result = await pool.query(
      `UPDATE experiences
       SET status='published'
       WHERE id=$1 AND (created_by=$2 OR $3='admin')
       RETURNING *`,
      [req.params.id, req.user.userId, req.user.role]
    );

    if (!result.rows.length) {
      return res.status(403).json({ message: "Not allowed" });
    }

    res.json(result.rows[0]);
  }
);


// ===============================
// BLOCK EXPERIENCE (admin only)
// ===============================
router.patch(
  "/:id/block",
  requireAuth,
  requireRole("admin"),
  async (req, res) => {
    await pool.query(
      "UPDATE experiences SET status='blocked' WHERE id=$1",
      [req.params.id]
    );

    res.json({ message: "blocked" });
  }
);


export default router;
