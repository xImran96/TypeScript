// types/node pakage is importent to use because of this we can use node in typescript

import express from 'express';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos'

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);  

app.listen(3000);