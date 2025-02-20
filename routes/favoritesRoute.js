const express = require('express');
const { markAsFavorite } = require('../services/imageService');
const router = express.Router();

router.post('/api/favorites', async (req, res) => {
    const { username, imageUrl } = req.body;
  
    try {
      const image = await markAsFavorite(username, imageUrl);
      res.status(200).json({
        message: 'Image successfully marked as favorite',
        image,
      });
    } catch (error) {
      console.error('Error marking image as favorite:', error);
      res.status(500).json({ message: 'Error marking image as favorite', error: error.message });
    }
  });

  router.get('/api/favorites', async (req, res) => {
    const { username } = req.query;
    try {
      const favorites = await getFavorites(username);
      res.status(200).json(favorites);
    } catch (error) {
      console.error('Error fetching favorite images:', error);
      res.status(500).json({ message: 'Error fetching favorite images', error: error.message });
    }
  });
  
  router.delete('/api/favorites', async (req, res) => {
    const { username, imageUrl } = req.body;
    try {
      const result = await unmarkFavorite(username, imageUrl);
      if (result) {
        res.status(200).json({ message: 'Image successfully unmarked as favorite' });
      }
    } catch (error) {
      console.error('Error unmarking image as favorite:', error);
      res.status(500).json({ message: 'Error unmarking image as favorite', error: error.message });
    }
  });
  
  module.exports = router;