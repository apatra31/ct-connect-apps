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
app.post('/', ServiceRoutes);


export default app;



// import moment from 'moment';
// import git from 'simple-git';

// const simpleGit = git();

// async function makeCommit(n) {
//     console.log(await simpleGit.checkIsRepo());

//     // Check the repo name
//     console.log(await simpleGit.revparse(['--show-toplevel']));

//     if (n === 0) return simpleGit.push();
//     else {
//         for (let i = 0; i < n; i++) {
//             const x = Math.floor(Math.random() * 55); // Generate a random integer between 0 and 54
//             const y = Math.floor(Math.random() * 7);  // Generate a random integer between 0 and 6
//             const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
//             console.log(DATE);
//             // Create Empty Commit
//             await simpleGit.commit('Fake Commit', {
//                 '--allow-empty': null,
//                 '--date': DATE
//             });

//             await simpleGit.push('origin', 'main');
//         }
//     };
// };

// await makeCommit(500);
