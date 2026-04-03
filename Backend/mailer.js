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
