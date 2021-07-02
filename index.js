const axios = require('axios');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('/news', async (req, res) => {
  try {
    console.log(req.query);
    const result = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        ...req.query,
        apiKey: process.env.API_KEY,
      },
    });
    console.log('Got response');
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while getting news.Try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
