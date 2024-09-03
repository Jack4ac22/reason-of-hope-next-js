// read the template from the file ./templates-contact-us.html. then replace the placeholders with the data. this should be in a function that takes the data and returns the html as a string.

import { readFile } from "fs/promises";
import {
  transporter,
  getMailOptions,
} from "@/utils/libraries/mailing/nodemailer";

export const sendMail = async (data) => {
  const template_string = await readFile(
    "@/utils/libraries/email-templates/template-contact-us.html",
    "utf8"
  );
  const { name, email, title, message } = data;
  const mailOptions = getMailOptions(email);
  const html = template_string
    .replaceAll("${name}", name)
    .replaceAll("${email}", email)
    .replaceAll("${title}", title)
    .replaceAll("${message}", message.trim());
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject: title || "No subject",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: html,
    });
    return info;
  } catch (error) {
    console.error("Email request failed:", error);
    return error;
  }
};
