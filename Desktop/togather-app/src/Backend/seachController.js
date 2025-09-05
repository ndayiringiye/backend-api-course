    const express = require('express');
    const router = express.Router();
    const Item = require('../models/Item');

    router.get('/search', async (req, res) => {
        const searchTerm = req.query.q; 

        if (!searchTerm) {
            return res.status(400).json({ message: 'Search term is required' });
        }

        try {
            const items = await Item.find({
                $or: [
                    { name: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } },
                    { category: { $regex: searchTerm, $options: 'i' } },
                ],
            });
            res.json(items);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    });

    module.exports = router;