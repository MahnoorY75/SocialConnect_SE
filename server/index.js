const express = require("express") 
const mongoose = require('mongoose') 
const cors = require("cors")
const UserModel = require('./models/User')

const app = express() 
app.use(express.json()) 
app.use(cors())

mongoose.connect("mongodb+srv://mahnooryounas75:1234@cluster0.u2inhnq.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0");

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post('/api/v1/auth/signup', async(req, res) => {
    console.log("Request Body:", req.body); /// req.body checking if data has been retrieved on server

    const {firstName,lastName,email,password}=req.body; // decompossing data into an object so we can maniuplate it easliy 

    if(!firstName || !lastName || !email || !password){ // checking if all the required data has been passed
     return res.status(400).json({msg:"Please provide valid inputs in order to proceed"}) //sending a response back to the user if the data has not been passed accurately
    }
    const checkifuserexsist= await UserModel.findOne({email});
    if(checkifuserexsist){
      return res.status(400).json({msg:"Please try another email"})
    }
   const newdata= await UserModel.create({firstname:firstName,lastname:lastName,email,password});
   console.log(newdata)
    // creating a new user on database, and checking if the new user has been successfully created
   if(newdata){// if its returns as empty then the condition after if will run an throw an error to the user that there was a problem creating a new user

    return res.status(200).json({msg:"Signup successfull",newdata}) // if everything runs well, new user created successfully and i sent a response to user that congrats you are new to the system

   }
   res.status(400).json({msg:"Error Creating a new User"}) // if newdata is empty throw an error
  });

  app.post('/api/v1/auth/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).json({ msg: "You are not registered" });
    }

    // Assuming you are storing hashed passwords, you will need to verify the password:
    // You should use bcrypt or a similar library to hash and verify passwords.
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: "Sorry! Password not correct :(" });
    }

    // If credentials are correct, proceed to login the user
    res.status(200).json({ msg: "Login successful", user: user });
});

  
app.listen(5000, () => {
console.log("server is running on port 5000")
})