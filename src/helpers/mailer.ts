import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";

export const sendEmail = async ({email, emailType, userId}: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            const updatedUser = await User.findByIdAndUpdate(userId, {
                $set: {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000 // Expires in 1 hour from now
                }
            })
            console.log("Update User for VERIFY", updatedUser);
            
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000 // Expires in 1 hour from now
                }
            })
        }
        
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "d509078f9d70c7",
              pass: "80dd5012f50219"
            }
        });

        const mailOptions = {
            from: 'ckbag1998@gmail.com', 
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
            html: `<p>Click <a href='${process.env.DOMAIN}/verifyemail?token=${hashedToken}'>here</a> to ${emailType === 'VERIFY' ? 'verify your email' : 'reset your password'}
            or copy and paste this link in your browser.
            <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`, 
        }

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse

    } catch (error: any) {
        throw new Error(error.message)
    }
}