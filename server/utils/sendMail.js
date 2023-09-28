import nodemailer from "nodemailer";

export const sendMailer = async (email, otp, UserName, template) => {
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
        `Hello ${UserName},\n\n` +
        `Thank you for choosing SoulShare! You're just one step away from getting started.` +
        `Here's your OTP for registration:\n\n` +
        `OTP: ${otp}\n\n` +
        `Simply enter this OTP to complete your registration process.` +
        `If you have any questions or need assistance, feel free to contact us.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>
       <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 0; padding: 0; ;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
          style="max-width: 600px; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 30px auto; border-radius: 4px;">
          <tr>
            <td style="padding: 30px; ">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="text-align: center;">
                    <h1 style="color: rgb(8, 32, 169); user-select:none">SOULSHARE</h1>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 0;">
                    <p style="font-size: 18px; color: #333333;">Hello ${UserName},</p>
                    <p style="font-size: 16px; color: #666666;">Thank you for choosing SoulShare! You're just one step away
                      from getting started.</p>
                    <p style="font-size: 16px; color: #666666;">Here's your OTP for registration:</p>
                    <p style="font-size: 20px; color: #333333;"><strong>${otp}</strong></p>
                    <p style="font-size: 16px; color: #666666;">Best regards,<br>SHISHIRO and the SoulShare Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      
      </html>`;
    } else if (template === "passwordReset") {
      subject = "Password Reset Requested!";
      text =
        `Hello ${UserName} ,\n\n` +
        `You have requested a password reset for your SoulShare account.` +
        `OTP for Temporary Password: ${otp}\n\n` +
        `Please change your password after logging in for security reasons.` +
        `If you didn't request this password reset, please contact us immediately.` +
        `For additional security, this OTP will expire in 24 hours.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>

      <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 0; padding: 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
          style="max-width: 600px; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 30px auto;border-radius: 5px; ">
          <tr>
            <td style="padding: 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="text-align: center;">
                    <h1 style="color: rgb(8, 32, 169); user-select:none">SOULSHARE</h1>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="font-size: 18px; color: #333333;">Hello ${UserName},</p>
                    <p style="font-size: 16px; color: #666666;">You have requested a password reset for your SoulShare
                      account.</p>
                    <p style="font-size: 20px; color: #333333;">OTP for Temporary Password: <strong>${otp}</strong></p>
                    <p style="font-size: 16px; color: #666666;">Please change your password after logging in for security
                      reasons.</p>
                    <p style="font-size: 16px; color: #666666;">If you didn't request this password reset, please contact us
                      immediately.</p>
                    <p style="font-size: 16px; color: #666666;">For additional security, this OTP will expire in 5 minutes.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="font-size: 16px; color: #666666; margin-top: 20px;">Best regards,</p>
                    <p style="font-size: 16px; color: #333333; font-weight: bold;">SHISHIRO and the SoulShare Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      
      </html>`;
    } else if (template === "deleteAccount") {
      subject = "Delete Account Requested";
      text =
        `Hello ${UserName},\n\n` +
        `You have requested the deletion of your account for your SoulShare account.` +
        `Here's the OTP for deleting your account: ${otp}\n\n` +
        `Please proceed with caution, as this action is irreversible.` +
        `If you didn't request this account deletion, please contact us immediately.` +
        `For security reasons, this OTP will expire in 24 hours.\n\n` +
        `Before deleting your account, please ensure that you've backed up any important data associated with your SoulShare account.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>
      <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 0; padding: 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
          style="max-width: 600px; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 30px auto;">
          <tr>
            <td style="padding: 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="text-align: center;">
                    <h1 style="color: rgb(8, 32, 169); user-select:none">SOULSHARE</h1>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="font-size: 18px; color: #333333;">Hello ${UserName},</p>
                    <p style="font-size: 16px; color: #666666;">You have requested the deletion of your account for your
                      SoulShare account.</p>
                    <p style="font-size: 20px; color: #333333;">Here's the OTP for deleting your account:
                      <strong>${otp}</strong>
                    </p>
                    <p style="font-size: 16px; color: #666666;">Please proceed with caution, as this action is irreversible.
                    </p>
                    <p style="font-size: 16px; color: #666666;">
                      If you didn't request this account deletion, please don't hesitate to reach out to us immediately.
                      You can simply reply to this email, and our team will investigate the matter promptly.
                    </p>
                    <p style="font-size: 16px; color: #666666;">For security reasons, this OTP will expire in 24 hours.</p>
                    <p style="font-size: 16px; color: #666666; margin-top: 20px;">Before deleting your account, please ensure
                      that you've backed up any important data associated with your SoulShare account.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="font-size: 16px; color: #666666; margin-top: 20px;">Best regards,</p>
                    <p style="font-size: 16px; color: #333333; font-weight: bold;">SHISHIRO and the SoulShare Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>`;
    } else if (template === "accountDeleted") {
      subject = "Account Deleted";
      text =
        `Hello ${UserName},\n\n` +
        `Your SoulShare account has been successfully deleted as per your request.` +
        `If you have any questions or need further assistance, please contact us.` +
        `We appreciate your time with us and hope to serve you again in the future.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`;

      html = `<html>

      <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 0; padding: 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
          style="max-width: 600px; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 30px auto;">
          <tr>
            <td style="padding: 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="text-align: center;">
                    <h1 style="color: rgb(8, 32, 169); user-select:none">SOULSHARE</h1>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="font-size: 18px; color: #333333;">Hello ${UserName},</p>
                    <p style="font-size: 16px; color: #666666;">Your SoulShare account has been successfully deleted as per
                      your request.</p>
                    <p style="font-size: 16px; color: #666666;">If you have any questions or need further assistance, please
                      don't hesitate to contact us.</p>
                    <p style="font-size: 16px; color: #666666;">We appreciate your time with us and hope to serve you again in
                      the future.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="font-size: 16px; color: #666666; margin-top: 20px;">Best regards,</p>
                    <p style="font-size: 16px; color: #333333; font-weight: bold;">SHISHIRO and the SoulShare Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
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
