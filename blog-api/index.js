const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes and origins
app.use(cors());

// Rest of your code

const PORT = 3001;


// Sample blog data
const blogs = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMM43IDqseBSgyJCxsbUzgpr-4P_KxCDcEg&s',
      description: 'Exploring the future of renewable energy, examining its vital role and transformative potential in daily life, sustainability, and environmental conservation efforts.',
      link: 'https://example.com/blog1'
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjZmyRIyjlN2UH6WXVgN4gM_brHGcknYJIA&s',
      description: 'Underneath the starry night, whispers of the wind carried secrets of forgotten tales, echoing through the ancient woods, where shadows dance with memories.',
      link: 'https://example.com/blog2'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7k91aQI3i6x8GW-mW-jl0A6zWHH3bJCCtkwt42ZVKrFZlNeTgVYlf6S1Imvo0zJ4wDs&usqp=CAU',
      description: 'Amidst the tranquil forest, a solitary cabin stands, its windows aglow with warmth, offering refuge from the world outside. Inside, tales of forgotten dreams whisper in the fire crackle.',
      link: 'https://example.com/blog3'
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1aXNk7gw21MSwb0scWNnHiL2gSCMFgJGQx8nCmstNEG9lSmjv80mYYHrsfotuhefZ84&usqp=CAU',
      description: 'Amidst the bustling city, a lone figure wandered, lost in thoughts. Shadows danced on the pavement as streetlights flickered, casting an ethereal glow. Memories whispered in the night, weaving tales of forgotten dreams.',
      link: 'https://example.com/blog4'
    }
  ];
  

// API endpoint to get blog data
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
