const express = require('express');
require('../src/mongodb/mongodb');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const userRouter = require('../src/routes/user/userRoutes')
const taskRouter = require('../src/routes/task/taskRoutes')
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())


const port = `${process.env.PORT}`;

app.use(userRouter);
app.use(taskRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../', 'client/build')));
  
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'client/build', 'index.html'));
  });
}


app.listen(port, () => {
  console.log('server is running on port:' + port)
})

