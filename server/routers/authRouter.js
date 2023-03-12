import express from "express";
import { client } from "../config/db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res, nex) => {
    const potentialLogin = await client.query(
      `SELECT id, username, password from users u WHERE u.username=$1`,
      [req.body.username]
    );
    if (potentialLogin.rowCount > 0) {
      const isPassMatched = await bcrypt.compare(
        req.body.password,
        potentialLogin.rows[0].password
      );
      if (isPassMatched) {
        res.cookie("user", potentialLogin.rows[0].id).status(200).json({
          loggedIn: true,
          user: potentialLogin.rows[0],
          message: "login successful",
        });
      } else {
        res.json({
          loggedIn: false,
          message: "wrong user name or password",
        });
      }
    } else {
      res.json({
        loggedIn: false,
        message: "wrong user name or password",
      });
    }
});

router.post("/signup", async (req, res, nex) => {
  if (req.body.password.length < 6) {
    res.status(401).json({
      message: "pasword is tooo short",
    });
  } else {
    const isUserAlreadyExist = await client.query(
      `SELECT username from users WHERE username=$1`,
      [req.body.username]
    );

    if (isUserAlreadyExist.rowCount === 0) {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      const query = `INSERT INTO users(username, password) values($1,$2) RETURNING id, username`;
      const newUser = await client.query(query, [
        req.body.username,
        hashedPass,
      ]);
      res.cookie("user", newUser.rows[0].id).json({
        login: true,
        user: newUser.rows[0]
      });
    } else {
      res.json({
        login: false,
        message: "username already taken",
      });
    }
  }
});

export default router;
