import express from 'express';
import usersRoutes from "./routes/users.js"; 

const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Routes ---> 
app.get('/', (req,res) =>{
    res.send("Welcome to HomePage");
});

app.use('/users', usersRoutes);


app.listen(PORT, () =>{
    console.log(`Server Running on port: http://localhost:${PORT}`);
});