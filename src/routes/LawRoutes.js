import express from "express";
import { createLaw, editLaw, getAllLaws, getLawDetail,  } from "../controllers/LawController.js";

const router = express.Router();

router.route("/").post(createLaw).get(getAllLaws);
router.route('/:id').get(getLawDetail).put(editLaw);

export default router;
