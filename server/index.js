const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3001;
const app =express();

app.use(cors());
app.use(express.json());

const UserSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      duedate: {
        type: String ,
        required: true,
      },
      priority: {
        type: String,
        // enum: ['Low', 'Medium', 'High'], 
        required: true,
      },
      status: {
        type: String,
        enum: ['In Progress', 'Completed'], 
        required: true,
      },
    });
    

const Users = mongoose.model('User',UserSchema);


mongoose.connect('mongodb://127.0.0.1:27017/CRUD')
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log("Error connecting to database:", error);
    });

    app.get('/search', (req, res) => {
      const { title } = req.query; // Extract the search query parameter
  
      // Search for items by title (case insensitive)
      User.find({ title: { $regex: title, $options: 'i' } })
          .then(users => res.json(users))
          .catch(err => res.status(500).json({ error: err.message }));
  });
  
app.post("/create",(req,res)=>{
    Users.create(req.body)
    .then(user =>res.json(user))
    .catch(err =>res.json(err))
})


const User = mongoose.model("User",UserSchema);

app.get("/",(req,res)=>{
    User.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
 
})

app.get("/getUser/:id",(req,res)=>{
    const id= req.params.id;
    User.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=> res.json(err))
})


app.put("/updataUser/:id",async(req,res)=>{
    
        const id = req.params.id;
        const user = await User.findByIdAndUpdate({_id:id},
           { 
            title : req.body.title,
            description:req.body.description,
             duedate:req.body.duedate,
             priority:req.body.priority,
             status:req.body.status
    
    
        })
        .then(users=>res.json(users))
        .catch(err=> res.json(err))
    
})


app.delete("/deleteUser/:id",async(req,res)=>{
   try
   { const id = req.params.id;
    const user = await User.findByIdAndDelete({_id:id});
    res.send(user);
   }
   catch(error){
    res.send(error);
   }

});


app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`);
    
})


