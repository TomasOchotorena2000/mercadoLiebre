const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Servidor corriendo en Puerto ${port}`));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get('/registro', (req,res) => {
    res.sendFile(path.resolve (__dirname, ("./views/register.html")))
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve (__dirname, "./views/login.html"))
})