const nodeMailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      type: "SMTP",
      host: "smtp.gmail.com",
      port:  465,
      secure: true,
      auth: {
        user: 'heamanbelay@gmail.com',
        pass: 'isaqdyaixnqqbseo'
      }
    
      // host: process.env.SMPT_HOST,
      // port: process.env.SMPT_PORT,
      // service: process.env.SMPT_SERVICE,
      // auth: {
      //   user: process.env.SMPT_MAIL,
      //   pass: process.env.SMPT_PASSWORD,
      // },
    });
  
    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
  
    await transporter.sendMail(mailOptions);
  };
  
  module.exports = sendMail;

// const nodeMailer = require("nodemailer");

// const sendMail = async (options) => {
//     const transporter = nodeMailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: true,
//       service: gmail,
//       auth: {
//         user: 'heamanbelay@gmail.com',
//         pass: 'viislvrvhbnhsozc',
//       },
//     });
  
//     const mailOptions = {
//       from: process.env.SMPT_MAIL,
//       to: options.email,
//       subject: options.subject,
//       text: options.message,
//     };
  
//     await transporter.sendMail(mailOptions);
//   };
  
//   module.exports = sendMail;

// const nodemailer = require("nodemailer");

// const sendEmail = async (email, subject, text) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: process.env.HOST,
//             service: process.env.SERVICE,
//             port: 587,
//             secure: true,
//             auth: {
//                 user: process.env.USER,
//                 pass: process.env.PASS,
//             },
//         });

//         await transporter.sendMail({
//             from: process.env.USER,
//             to: email,
//             subject: subject,
//             text: text,
//         });

//         console.log("email sent sucessfully");
//     } catch (error) {
//       console.log(error, "email not sent");
//     }
// };

// module.exports = sendMail;