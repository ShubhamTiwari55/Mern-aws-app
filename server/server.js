require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require("helmet");

const app = express();
connectDB();
app.use(helmet.frameguard({ action: "deny" }));

const corsOptions = {
  origin: "http://localhost:3000", 
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/protected'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
