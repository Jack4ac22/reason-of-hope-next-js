"use server";
import {
  transporter,
  getMailOptions,
  getMailHtmlTemplate,
  getMailTextTemplate,
} from "@/utils/libraries/mailing/nodemailer";
import { cwd } from "process";

const templates_folder_path = "/src/utils/libraries/email-templates";

export const sendContactMail = async (data) => {
  const template_html_string = getMailHtmlTemplate(
    "contact-us",
    templates_folder_path
  );
  const template_text_string = getMailTextTemplate(
    "contact-us",
    templates_folder_path
  );
  const { name, email, title, message } = data;
  const mailOptions = getMailOptions(email);
  const html = template_html_string
    .replaceAll("${name}", name)
    .replaceAll("${email}", email)
    .replaceAll("${title}", title)
    .replaceAll("${message}", message.trim());
  const text = template_text_string
    .replaceAll("${name}", name)
    .replaceAll("${email}", email)
    .replaceAll("${title}", title)
    .replaceAll("${message}", message.trim());
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject: title || "No subject",
      text: text,
      html: html,
    });
    return info;
  } catch (error) {
    console.error("Email request failed:", error);
    return error;
  }
};
