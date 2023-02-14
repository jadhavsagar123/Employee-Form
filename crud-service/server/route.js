import express from "express";
import {
  getEmployeeById,
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
} from "../controller/employee-controller.js";

const router = express.Router();

router.get("/", getEmployee);
router.post("/add", addEmployee);
router.get("/:id", getEmployeeById);
router.put("/:id", editEmployee);
router.delete("/:id", deleteEmployee);

export default router;
