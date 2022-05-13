// Environment Files
require('dotenv').config()

// Server Dependencies
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Configure express server
const app = express();
const port = 3001;

app.use(cors());            // Enables cross-platform resource sharing
app.use(express.json());    // Parser for JSON data
app.use("/", router);       // Router for handling functions

// Launch the server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});

// Configure NodeMailer
const emailFormSource = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.FORM_EMAIL,
        pass: process.env.FORM_PASS,
    },
});

// Ensure that email communication works
emailFormSource.verify((error) => {
    error ? console.log(error) : console.log("Ready to send!");
});

// Configure the router middleware to take POST requests from the form
router.post("/api/contact", (req, res) => {
    // Get the form info
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Construct the mail object
    const mail = {
        from: name,
        to: process.env.DEST_EMAIL,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };

    // Send the email and reply with the status
    emailFormSource.sendMail(mail, (error) => {
        error ? res.json({status: "ERROR"}) : res.json({status: "Message Sent"});
    });
});