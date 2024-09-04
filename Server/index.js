const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected'))
    .catch(error => console.log(error));

app.get('/', (req, res) => res.send('api is runiing'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server is running'));