import {
  transporter,
  getMailOptions,
} from "@/utils/libraries/mailing/nodemailer";


export async function sendMail(data) {
  const { name, email, title, message } = data;
  const mailOptions = getMailOptions(email);
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject: title || "No subject",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div>
          <h1>Name: ${name}</h1>
          <h2>Email: ${email}</h2>
          <p>Message: ${message}</p>
        </div>
      `,
    });
    return info;
  } catch (error) {
    console.error("Email request failed:", error);
    return error;
  }
}
