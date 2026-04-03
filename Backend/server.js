import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(cors(
  
));
app.use(bodyParser.json());

import nodemailer from 'nodemailer';

// Create a transporter using your email service credentials
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // e.g., Gmail, Outlook, etc.
    port: '587', // e.g., 465 for Gmail
    secure: false, // true for 465, false for other ports
        auth: {
            user: 'apex28281@gmail.com', // Your email address
            pass: 'oshb fsrg mczb jcan'  // Your email password or app-specific password
        },
        family: 4, // Use IPv4
        tls: {
            rejectUnauthorized: false // Allow self-signed certificates
        }
    });


// Function to send an email
const mailOptions = {
    from: '"Port App" <apex28281@gmail.com>', // Sender address
    to: 'apex28281@gmail.com', // List of recipients
    subject: 'Hello from Port', // Subject line
    text: 'This is a test email sent from the Port application.', // Plain text body
    html: '<b>This is a test email sent from the Port application.</b>' // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
// End of mailer.js
// endpoint for my frontend to test the mailer
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    const mailOptions = {
        from: '"Website Contact" <apex28281@gmail.com>',
        to: 'apex28281@gmail.com', // Your receiving email
        subject: `New Lead: ${subject || 'No Subject'}`, // Uses the subject from the form
        // 2. Create a template for the email body
        text: `You have a new message!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
});





const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);

