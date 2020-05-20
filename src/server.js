require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', require('./routes'));

app.listen(port, () => console.log(`API on, port ${port}`))