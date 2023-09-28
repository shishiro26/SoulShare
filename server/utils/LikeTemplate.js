import nodemailer from 'nodemailer';

export const LikeEmail = async (email, userName, productUserName, productName) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        const subject = `${userName} added a new product that you liked`;
        const text = `Hello ${userName},\n\n${productUserName} has added a new product "${productName}" that you liked on SoulShare.`;
        const html = `
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 0; padding: 0;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                        style="max-width: 600px; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 30px auto;">
                        <tr>
                            <td style="padding: 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td>
                                            <div style="text-align: center;">
                                               <h1 style="color: rgb(8, 32, 169); user-select: none;">SOULSHARE</h1>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p style="font-size: 18px; color: #333333;">Hello,</p>
                                            <p style="font-size: 16px; color: #666666;">
                                                ${userName} has added a new product "${productName}" that you liked on SoulShare.
                                            </p>
                                            <p style="font-size: 16px; color: #666666;">To unsubscribe from these notifications, click <a href="#">here</a>.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p style="font-size: 16px; color: #666666; margin-top: 20px;">Best Regards,</p>
                                            <p style="font-size: 16px; color: #333333; font-weight: bold;">SHISHIRO and the SoulShare Team</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        `;

        const mailOptions = {
            from: `'SoulShare || by SHISHIRO' <${process.env.USER}>`,
            to: email,
            subject,
            text,
            html,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully! 📩");
    } catch (error) {
        console.log("👎 Email not sent!");
        console.log(error.message);
        return error;
    }
};
