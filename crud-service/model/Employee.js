import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    employeeId: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);
const Employeemodel = mongoose.model("employee", EmployeeSchema);

export default Employeemodel;

