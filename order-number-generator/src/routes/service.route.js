import { Router } from 'express';
import { updateOrderNumber } from "../service.js";

const serviceRouter = Router();

serviceRouter.use('/', async (req, res) => {
  console.log(req.body);
  const { orderId } = req.body;
  const { status, updatedOrder, exception } = await updateOrderNumber(orderId);
  if (updatedOrder)
    res.status(status).send('Order number generated');
  else
    res.status(status).send(exception.message);
});

export default serviceRouter;
