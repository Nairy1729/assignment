const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const weatherRoutes = require('./routes/weatherRoutes');
const cors = require('cors');


// Enable CORS for all routes
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
