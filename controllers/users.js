import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) =>{
    res.send(users); 
}

export const addUser = (req,res) =>{
    const user = req.body;
    users.push({ ...user, id: uuidv4()} );
    res.send('User data successfully added to Database.');
}

export const getUserById = (req,res) =>{ 
    const { id } = req.params;
    const foundUser = users.find( (user) => user.id == id);

    if (!foundUser) {
        res.status(404);
        res.send({
            data: null,
            message: 'User Not Found'
        })
    }
    res.send(foundUser);
}

export const deleteUserById = (req,res) =>{
    const { id }  = req.params;
    users = users.filter( (user) => user.id != id);
    res.send(`User with the id ${id} have been deleted from Database.`);
}

export const updateUserById = (req,res) =>{
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find( (user) => user.id ==id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send("User data has been updated. ");
}