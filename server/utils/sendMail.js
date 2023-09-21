import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";
import { load } from "https://deno.land/std/dotenv/mod.ts";
const env = await load();

const EMAIL = env["USER"];
const PASSWORD = env["PASS"];
const HOST = env["HOST"];

export const sendMailer = async (email, otp, firstName, lastName) => {
  try {
    const client = new SMTPClient({
      connection: {
        hostname: HOST,
        service: "gmail",
        auth: {
          username: EMAIL,
          password: PASSWORD,
        },
        tls: true,
      },
    });

    await client.send({
      from: "SoulShare || by SHISHIRO <" + EMAIL + ">",
      to: email,
      subject: "Welcome to SoulShare - Registration OTP",
      content:
        `Hello ${firstName} ${lastName},\n\n` +
        `Thank you for choosing SoulShare! You're just one step away from getting started.` +
        `Here's your OTP for registration:\n\n` +
        `OTP: ${otp}\n\n` +
        `Simply enter this OTP to complete your registration process.` +
        `If you have any questions or need assistance, feel free to contact us.\n\n` +
        `Best regards,\n` +
        `SHISHIRO and the SoulShare Team`,
      html: `<html>
               <body>
                 <p>Hello ${firstName} ${lastName},</p>
                 <p>Thank you for choosing SoulShare! You're just one step away from getting started.</p>
                 <p>Here's your OTP for registration:</p>
                 <p><strong>OTP: ${otp}</strong></p>
                 <p>Best regards,<br>SHISHIRO and the SoulShare Team</p>
               </body>
             </html>`,
    });

    console.log("sent");
    await client.close();
  } catch (err) {
    console.log("Error in sending Mail:", err.message);
  }
};
