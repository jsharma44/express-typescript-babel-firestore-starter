import express from "express";
import userRouter from "./users";
const router = express();

router.use("/users", userRouter);
export default router;
