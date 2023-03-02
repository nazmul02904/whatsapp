import express from "express"
import authValidateForm from "../controllers/authFormValidate.js";

const router = express.Router();

router.post("/login", (req, res, nex) => {
    authValidateForm(req, res)
})
router.post("/signup", (req, res, nex) => {
    authValidateForm(req, res)
})


export default router