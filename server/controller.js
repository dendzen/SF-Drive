const express = require('express');
const cors = require('cors');

const DAO = require('./DAO.js');
const service = require('./service.js');

const PORT = 8000;
const WHITE_LIST = ["http://localhost:4200"];


function setMiddlewares() {
    app.use(express.json());
    app.use(cors());
    app.use((request, response, next) => {
        let now = new Date()
        let hour = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()
        let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} \n`
        console.log(data)
        next();
    });
}

const app = express();

DAO.connectDB();
setMiddlewares();

app.post('/', async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", WHITE_LIST);
    console.log(req.body);
    let data = await service.processUser(req);
    console.log(data);
    res.status(data.status).send(data.body);
});

app.post('/authorization/', async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", WHITE_LIST);
    console.log(req.body);
    let result = await service.validate(req.body);
    res.status(result.status).send(result.body);
});

app.post('/recovery', service.authMiddlware, async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", WHITE_LIST);
    console.log(req.body);
    console.log(req.headers);
    let result = await service.recovery(req.body);
    res.status(result.status).send(result.body);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));