const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require("dotenv").config();

const UserRoutes = require('./routes/user.route');
const Wizard_ListRoutes = require('./routes/wizardList.route');
const AdminRoutes = require('./routes/admin.route');
const ProjectRoutes = require('./routes/project.route');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: '*', 
    credentials: true // Allow cookies
}));

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

app.use('/api/user', UserRoutes);
app.use('/api/wizard', Wizard_ListRoutes);
app.use('/api/admin', AdminRoutes);
app.use('/api/project', ProjectRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}
);