const express = require('express');
const app = express();
require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 3100;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(cors());

const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    secure: true,
    port: 465,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
})

app.use('/contact', (req, res) => {
    console.log("SENDING")
    const message = {
        from: "spencer@wemakeads.com",
        to: "phil@mcneeroutdoors.com",
        subject: "McNeer Outdoor Form Submission",
        text: `
        Name: ${req.body.name} 
        
        Reply To: ${req.body.email}

        Message: ${req.body.message}
        `,
    }
    
    transporter.sendMail(message, (error, info) => {
        if(error) {
            console.log("FAILED")
            res.status(400).send({msg: 'fail'})
        } else {
            console.log("ALL GOOD")
            return res.status(200).send({msg: 'success'})
        }
    })
})

app.use('/send', (req, res) => {
    console.log("SENDING")
    const message = {
        from: "spencer@wemakeads.com",
        to: "phil@mcneeroutdoors.com",
        subject: "McNeer Outdoor Form Submission",
        text: `
        Name: ${req.body.name} 
        
        Reply To: ${req.body.email}
        
        Phone Number: ${req.body.phone} 

        City: ${req.body.city}

        Address: ${req.body.address}

        Service: ${req.body.service}
        `,
    }
    
    transporter.sendMail(message, (error, info) => {
        if(error) {
            console.log("FAILED")
            res.status(400).send({msg: 'fail'})
        } else {
            console.log("ALL GOOD")
            return res.status(200).send({msg: 'success'})
        }
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => console.log(`Listing on port ${port}`))
