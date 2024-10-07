import 'dotenv/config';
import app from './app.js';

const PORT = 8080;

// Listen the application
const server = app.listen(PORT, () => {
  console.log(`⚡️ Service application listening on port ${PORT}`);
});

export default server;