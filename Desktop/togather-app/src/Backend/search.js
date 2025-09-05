
    const express = require('express');
    const mongoose = require('mongoose');
    const itemRoutes = require('./routes/itemRoutes');
    const cors = require('cors'); 

    const app = express();
    const PORT = process.env.PORT || 5000;

    mongoose.connect('mongodb://localhost:27017/your_database_name', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

    app.use(cors());
    app.use(express.json()); 
    app.use('/api/items', itemRoutes); 

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));