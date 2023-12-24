const express = require('express');
const db = require(__dirname + '/modules/connectDB.js');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const app = express();

// app.use(cors());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:9010'],
    credentials: true,
  })
);
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/lesson', require(__dirname + '/routes/lesson'));
app.use('/coach', require(__dirname + '/routes/coach'));

app.use(express.static('public'));
app.use('*', async (req, res) => {
  res.status(404).json({ message: '路徑錯誤' });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`啟動~ port: ${port}`);
});
