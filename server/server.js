require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require("helmet");

const app = express();
connectDB();
app.use(helmet.frameguard({ action: "deny" }));

app.use(cors({
  origin: 'http://16.16.208.117:3000',
  credentials: true
}));


app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/protected'));

const PORT = process.env.PORT || 5000;
app.listen(5000, '0.0.0.0', () => {
  console.log('🚀 Server running on port 5000');
});

