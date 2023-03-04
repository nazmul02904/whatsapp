import express from "express";
import { client } from "../config/db.js";
import authValidateForm from "../controllers/authFormValidate.js";

const router = express.Router();

router.post("/login", (req, res, nex) => {
  authValidateForm(req, res);
});
router.post("/signup", async (req, res, nex) => {
  const newQuery = await client.query(
    "INSERT INTO users(username, password) values($1,$2) RETURNING id, username",
    [req.body.username, req.body.password]
  );
  console.log(newQuery);
  res.send("it is working");
  // authValidateForm(req, res)
});

export default router;
