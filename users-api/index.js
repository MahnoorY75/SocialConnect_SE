const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS for all routes and origins
app.use(cors());

const PORT = 8080;

const users = [
    { 
        id: 1,
        name: 'John Doe', 
        followers: 1200 
       
    },
    { 
        id: 2,
        name: 'Emily Smith', 
        followers: 1500 
    },
    { 
        id: 3,
        name: 'Mich Johnson', 
        followers: 1800 
    },
    { 
        id: 4,
        name: 'Emma Wilson', 
        followers: 1400 
    },
    { 
        id: 5,
        name: 'David Brown', 
        followers: 1600 
    },
    { 
        id: 6,
        name: 'Sophia Marti', 
        followers: 1300 
    }
];


// API endpoint to get users data
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
