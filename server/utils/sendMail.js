import nodemailer from "nodemailer";

export const sendMailer = async (email, otp, firstName, lastName) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      // service: process.env.SERVICE,
      service: "gmail",
      // port: Number(process.env.EMAIL_PORT),
      // secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER, //your email address
        pass: process.env.PASS, //your mail password
      },
    });

    await transporter.sendMail(
      {
        from: `'SoulShare ||  by SHISHIRO'`,
        to: email,
        subject: `Welcome to SoulShare - Registration OTP`,
        text: `Hello ${firstName} ${lastName} ,\n\nYour OTP for registration with SoulShare is: ${otp}\n\nThank you for choosing SoulShare!!`,
      },
      function (err, info) {
        if (err) console.log(err);
        else console.log("Email sent successfully!!");
      }
    );
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
