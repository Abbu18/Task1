const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path')

const app = express();
const PORT = 3001;

app.use(cors()); // Allow all origins for testing, consider restricting in production.
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
  });
  app.post('/send-email', (req, res) => {
    const { name, companyname, email, phone, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pavankumarreddy14510@gmail.com', // replace with your Gmail email
        pass: 'mnzy luyk lruq jsbd', // replace with your Gmail password
      },
    });
  
    const mailOptions = {
      from: '',
      to: 'shaikabbas005@gmail.com', // replace with the recipient email
      subject: 'New Contact Form Submission',
      html: `
        <p>Name: ${name}</p>
        <p>Company Name: ${companyname}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
