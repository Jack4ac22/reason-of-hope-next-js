'use server'
import path from "path";
import fs from "fs";
const templates_folder_path = "/src/utils/libraries/email-templates";

import {
  transporter,
  getMailOptions,
} from "@/utils/libraries/mailing/nodemailer";
import { cwd } from "process";

export const sendMail = async (data) => {
  const template_path = path.join(
    cwd(),
    templates_folder_path,
    "template-contact-us.html"
  );
  const template_string = fs.readFileSync(template_path, "utf-8");
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
