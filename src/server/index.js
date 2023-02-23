const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
var path = require('path')

const port = 3000

app.use(session({ secret: '123' }));
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));
app.use(cors());

app.post('/login', (req, res) => {
    const body = req.body;
    console.log("🥶 --> file: index.js:21 --> app.get --> body:", body)
    if (body.user === "Matheus" && body.password === "123") res.status(200).json({ Ok: "ok" });
    res.status(200).json({ Error: 'Usuário ou senha inválido!' });
})

app.listen(port, () => {
    console.log("rodando na porta ", port);
})