// require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");


const app = express();



// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com", //replace with your email provider
//     port: 587,
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASS,
//     },
//   });

// transporter.verify(function (error, success) {
// if (error) {
//     console.log(error);
// } else {
//     console.log("Server is ready to take our messages");
// }
// });
  


// app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.sendFile(`${__dirname}/index.html`)
});

app.get("/about", function(req,res){
  res.sendFile(`${__dirname}/about.html`)
});


// app.post("/send", (req, res) => {
//     //1.
//     let form = new multiparty.Form();
//     let data = {};
//     form.parse(req, function (err, fields) {
//     //   console.log(fields);
//       Object.keys(fields).forEach(function (property) {
//         data[property] = fields[property].toString();
//       });

    
//     //2. You can configure the object however you want
//     const mail = {
//     from: data.name,
//     to: process.env.EMAIL,
//     subject: "Philip's Portfolio",
//     text: `${data.name} <${data.email}> \n${data.message}`,
//     };

//     if(data.email === ""){
//         res.status(401).sendFile(`${__dirname}/email_required.html`);
//     }
//     else{
//         //3.
//         transporter.sendMail(mail, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).sendFile(`${__dirname}/failure.html`);
//             } else {
//                 res.status(200).sendFile(`${__dirname}/success.html`);
//             }
//         });
//     }
    
  
//     });
//   });
  

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
})
