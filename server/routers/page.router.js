import { Router } from "express";
import { renderPageOnServer } from "../services/render.service";

const pageRouter = () => {
  const router = Router();

  router.get("*", (req, res) => {
    const fullPageHtml = renderPageOnServer(req.url);
    res.send(fullPageHtml);
  });

  return router;
};

export default pageRouter;
