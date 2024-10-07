import { Router } from 'express';
import { updateOrderNumber } from "../service.js";

const serviceRouter = Router();

serviceRouter.use('/generate-order-number/:id', async (req, res) => {
  const { status, updatedOrder, exception } = await updateOrderNumber(req.params.id);
  if (updatedOrder)
    res.status(status).send('Order number generated');
  else
    res.status(status).send(exception.message);
});

export default serviceRouter;
