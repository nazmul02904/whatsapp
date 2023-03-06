import express from "express";
import { client } from "../config/db.js";
import authValidateForm from "../controllers/authFormValidate.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", (req, res, nex) => {
  authValidateForm(req, res);
});
router.post("/signup", async (req, res, nex) => {
  authValidateForm(req, res);

  const isUserAlreadyExist = await client.query(
    `SELECT username from users WHERE username=$1`,
    [req.body.username]
  );

  if (isUserAlreadyExist.rowCount === 0) {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const query = `INSERT INTO users(username, password) values($1,$2) RETURNING id, username`;
    const newUser = await client.query(query, [req.body.username, hashedPass]);
    res.cookie("user", newUser.rows[0].id).json({
      login: true,
      username: req.body.username,
    });
  } else {
    res.json({
      login: false,
      message: "username already taken",
    });
  }
});

export default router;
