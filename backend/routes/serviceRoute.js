import express from 'express';
import { loginService, appointmentsService, appointmentCancel, serviceList, changeAvailablity, appointmentComplete, serviceDashboard, serviceProfile, updateserviceProfile } from '../controllers/serviceController.js';
import authService from '../middleware/authService.js';
const serviceRouter = express.Router();

serviceRouter.post("/login", loginService)
serviceRouter.post("/cancel-appointment", authService, appointmentCancel)
serviceRouter.get("/appointments", authService, appointmentsService)
serviceRouter.get("/list", serviceList)
serviceRouter.post("/change-availability", authService, changeAvailablity)
serviceRouter.post("/complete-appointment", authService, appointmentComplete)
serviceRouter.get("/dashboard", authService, serviceDashboard)
serviceRouter.get("/profile", authService, serviceProfile)
serviceRouter.post("/update-profile", authService, updateserviceProfile)

export default serviceRouter;