import nodemailer from "nodemailer";

export const sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE, // 'gmail'
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Inngest TMS" <${process.env.MAIL_USER}>`,
      to,
      subject,
      text,
    });

    console.log("✅ Message sent:", info.messageId, "to", to);
    return info;
  } catch (error) {
    console.error("❌ Mail error", error.message);
    throw error;
  }
};
