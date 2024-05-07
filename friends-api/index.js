const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS for all routes and origins
app.use(cors());

const PORT = 3001;

const friends = [
    { 
        id: 1,
        name: 'John Doe', 
        followers: 1200 , 
        number: 251
    },
    { 
        id: 2,
        name: 'Emily Smith', 
        followers: 1500 , 
        number: 342
    },
    { 
        id: 3,
        name: 'Mich Johnson', 
        followers: 1800 , 
        number: 123
    },
    { 
        id: 4,
        name: 'Emma Wilson', 
        followers: 1400 , 
        number: 452  
    },
    { 
        id: 5,
        name: 'David Brown', 
        followers: 1600 , 
        number: 432
    },
    { 
        id: 6,
        name: 'Sophia Marti', 
        followers: 1300 , 
        number: 364 
    }
];

// Serve static files from the 'src/Components/Images' directory
app.use(express.static(path.join(__dirname, '..', 'src', 'Components', 'Images')));

// API endpoint to get friend data
app.get('/api/friends', (req, res) => {
  res.json(friends);
});
// PUT endpoint to update friend data
app.put('/api/friends/:id', (req, res) => {
    const { id } = req.params;
    const { name, followers, number } = req.body;
  
    // Find the friend by ID
    const friend = friends.find(friend => friend.id === parseInt(id));
  
    if (!friend) {
      return res.status(404).json({ message: 'Friend not found' });
    }
  
    // Update the friend's data
    friend.name = name || friend.name;
    friend.followers = followers || friend.followers;
    friend.number = number || friend.number;
  
    res.json({ message: 'Friend updated successfully', friend });
  });

const users = [
    { 
        id: 1,
        name: 'John Doe', 
        followers: 1200,
        number: 364 
       
    },
    { 
        id: 2,
        name: 'Emily Smith', 
        followers: 1500 ,
        number: 364 
    },
    { 
        id: 3,
        name: 'Mich Johnson', 
        followers: 1800 ,
        number: 364 
    },
    { 
        id: 4,
        name: 'Emma Wilson', 
        followers: 1400 ,
        number: 364 
    },
    { 
        id: 5,
        name: 'David Brown', 
        followers: 1600 ,
        number: 364 
    },
    { 
        id: 6,
        name: 'Sophia Marti', 
        followers: 1300 ,
        number: 364 
    }
];


// API endpoint to get users data
app.get('/api/users', (req, res) => {
  res.json(users);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
