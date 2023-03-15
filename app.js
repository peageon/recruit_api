const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connect = require('./config/connection');

dotenv.config();

connect();
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/user', require('./routes/userRoute'));

app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} no router.`);
    error.status = 404;
    next(error);
  });
  
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        // stacktrace: err.stack,
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});