const express = require('express')
const cors = require('cors');
const app = express();
const axios = require('axios')

const PORT = process.env.PORT || 3001;
const ip = '127.0.0.1';

const data = {
    users: '' 
}

app.use(cors());

app.use(async (req, res, next) => {
    let users = await axios.get('https://koreanjson.com/users')
    .then(res => res.data)
    .catch(err => console.log(err))
    data.users = users;
    next();
})

app.get('/', (req, res) => {
    res.send('ok');
})

app.get('/users', (req, res) => {
    console.log(req.params)
    res.send(data.users)
})

app.get('/users/:id', (req, res) => {
    console.log(typeof req.params.id)
    let userInfo = data.users.filter(user => user.id === Number(req.params.id));
    console.log(userInfo)
    res.send(userInfo[0]);
})


console.log(`listening ${PORT}...`)
app.listen(PORT, ip);