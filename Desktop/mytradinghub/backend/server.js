const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
const mongoose = require('mongoose');

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Serve index.html on all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
