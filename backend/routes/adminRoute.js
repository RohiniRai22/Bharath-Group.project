import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addService, allServices, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/serviceController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-service", authAdmin, upload.single('image'), addService)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-services", authAdmin, allServices)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;