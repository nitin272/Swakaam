const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const authRoutes = require('./routes/auth.route');
const UserRoutes = require('./routes/user.route');
const AdminRoutes = require('./routes/admin.route');
const app = express();
const port = 3000;
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI,{
    dbName: process.env.DB_NAME,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.use('/api/auth', authRoutes);
app.use('/api/user', UserRoutes);
app.use('/api/admin', AdminRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}
);