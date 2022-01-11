const express = require("express");
const cors = require("cors");
const bd = require("body-parser");
const mongoose = require("mongoose");
let AuthData = require('./authscheme');
const { response } = require("express");

const app = express();

const port = 5000;

app.use(cors());
app.use(bd.urlencoded({
    extended: false
}));
app.use(bd.json());


mongoose.connect('mongodb+srv://asad:007230@cluster0.qlon3.mongodb.net/authDatas', { useUnifiedTopology: true, useNewUrlParser: true, }).then(() => {
    console.log("Connection successfull");
}).catch((e) => console.log("No connection"))


mongoose.connection.on("Connected", () => {
    console.log("Connected Successfully");
})
mongoose.connection.on("Error", () => {
    console.log("Connected Error");
})


app.get('/', (req, res) => {

    res.send("Hi There Asad");

    // console.log("hi there Asad Here");
})

app.post('/signup', async (req, res) => {
    try {
        console.log(req.body)


        // res.send(req.body);
        authData = new AuthData({
            email: req.body.email,
            password: req.body.password
        })
        await authData.save().then((response) => {
            res.status(200).send({ result: [response], message: "user created" });
        });

    } catch (error) {
        res.status(400).send({ result: error.message, message: "user  Not created" })

    }
});


app.listen(port, () => {
    console.log('Server Start .......');
});