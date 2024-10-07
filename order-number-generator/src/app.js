import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

// Import routes
import ServiceRoutes from './routes/service.route.js';

// Create the express app
const app = express();

// Define configurations
app.use(express.json());

// Define routes
app.put('/generate-order-number/:id', ServiceRoutes);


export default app;
