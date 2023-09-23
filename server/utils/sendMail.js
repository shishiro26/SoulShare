import nodemailer from "nodemailer";

export const sendMailer = async (email, otp, firstName, lastName, template) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    let subject, text, html;

    if (template === "registration") {
      subject = "Welcome to SoulShare - Registration OTP";
      text =
        `Hello ${firstName} ${lastName},\n\n` +
        `Thank you for choosing SoulShare! You're just one step away from getting started.` +
        `Here's your OTP for registration:\n\n` +
        `OTP: ${otp}\n\n` +
        `Simply enter this OTP to complete your registration process.` +
        `If you have any questions or need assistance, feel free to contact us.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>
               <body>
                 <p>Hello ${firstName} ${lastName},</p>
                 <p>Thank you for choosing SoulShare! You're just one step away from getting started.</p>
                 <p>Here's your OTP for registration:</p>
                 <p><strong>OTP: ${otp}</strong></p>
                 <p>Best regards,<br>SHISHIRO and the SoulShare Team</p>
               </body>
             </html>`;
    } else if (template === "passwordReset") {
      subject = "Password Reset Requested!";
      text =
        `Hello ${firstName} ${lastName},\n\n` +
        `You have requested a password reset for your SoulShare account.` +
        `OTP for Temporary Password: ${otp}\n\n` +
        `Please change your password after logging in for security reasons.` +
        `If you didn't request this password reset, please contact us immediately.` +
        `For additional security, this OTP will expire in 24 hours.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>
               <body>
                 <p>Hello ${firstName} ${lastName},</p>
                 <p>You have requested a password reset for your SoulShare account.</p>
                 <p>OTP for Temporary Password: <strong>${otp}</strong></p>
                 <p>Please change your password after logging in for security reasons.</p>
                 <p>If you didn't request this password reset, please contact us immediately.</p>
                 <p>For additional security, this OTP will expire in 24 hours.</p>
               </body>
             </html>`;
    } else if (template === "deleteAccount") {
      subject = "Delete Account Requested";
      text =
        `Hello ${firstName} ${lastName},\n\n` +
        `You have requested the deletion of your account for your SoulShare account.` +
        `Here's the OTP for deleting your account: ${otp}\n\n` +
        `Please proceed with caution, as this action is irreversible.` +
        `If you didn't request this account deletion, please contact us immediately.` +
        `For security reasons, this OTP will expire in 24 hours.\n\n` +
        `Before deleting your account, please ensure that you've backed up any important data associated with your SoulShare account.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>
                       <body>
                         <p>Hello ${firstName} ${lastName},</p>
                         <p>You have requested the deletion of your account for your SoulShare account.</p>
                         <p>Here's the OTP for deleting your account: <strong>${otp}</strong></p>
                         <p>Please proceed with caution, as this action is irreversible.</p>
                         <p>If you didn't request this account deletion, please contact us immediately.</p>
                         <p>For security reasons, this OTP will expire in 24 hours.</p>
                         <p>Before deleting your account, please ensure that you've backed up any important data associated with your SoulShare account.</p>
                       </body>
                     </html>`;
    } else if (template === "accountDeleted") {
      subject = "Account Deleted";
      text =
        `Hello ${firstName} ${lastName},\n\n` +
        `Your SoulShare account has been successfully deleted as per your request.` +
        `If you have any questions or need further assistance, please contact us.` +
        `We appreciate your time with us and hope to serve you again in the future.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>
               <body>
                 <p>Hello ${firstName} ${lastName},</p>
                 <p>Your SoulShare account has been successfully deleted as per your request.</p>
                 <p>If you have any questions or need further assistance, please contact us.</p>
                 <p>We appreciate your time with us and hope to serve you again in the future.</p>
               </body>
             </html>`;
    }

    const mailOptions = {
      from: `'SoulShare || by SHISHIRO' <${process.env.USER}>`,
      to: email,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!📩");
  } catch (error) {
    console.log("👎Email not sent!");
    console.log(error);
    return error;
  }
};
