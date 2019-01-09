import { Router } from "express";
import { pageRouter } from "./routers/index";

const router = () => {
  const router = Router();

  router.use("/", pageRouter());

  return router;
};

export default router;
