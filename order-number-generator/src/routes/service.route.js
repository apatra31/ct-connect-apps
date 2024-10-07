import { Router } from 'express';
import { updateOrderNumber } from "../service.js";

const serviceRouter = Router();

serviceRouter.use('/generate-order-number/:id', async (req, res) => {
  await updateOrderNumber(req.params.id);
  res.status(200).send('Order number generated');
});

export default serviceRouter;
