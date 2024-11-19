import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { cwd } from "process";

const email = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD || "";
const bcc = process.env.BCC_EMAIL_ADDRESS || "";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
  tls: {
    rejectUnauthorized: false, // Allows self-signed certificates
  },
});

// Function to get mail options
/**
 * Returns the mail options for sending an email.
 *
 * @param {string} to - The recipient's email address.
 * @returns {Object} The mail options object.
 */
export const getMailOptions = (to) => {
  return {
    from: email,
    to: to,
    bcc: bcc,
  };
};

/**
 * Retrieves the HTML template for a given mail template.
 *
 * @param {string} template_name - The name of the template.
 * @param {string} [template_folder_path="/src/assets/email-templates"] - The folder path where the templates are located.
 * @returns {string} The HTML template string.
 */
export function getMailHtmlTemplate(
  template_name,
  template_folder_path = "/src/assets/email-templates"
) {
  const template_path = path.join(
    cwd(),
    template_folder_path,
    `${template_name}.html`
  );
  const template_string = fs.readFileSync(template_path, "utf-8");
  return template_string;
}

/**
 * Retrieves the text template for a given mail.
 *
 * @param {string} template_name - The name of the template.
 * @param {string} [template_folder_path="/src/assets/email-templates"] - The folder path where the templates are located.
 * @returns {string} The template string.
 */
export function getMailTextTemplate(
  template_name,
  template_folder_path = "/src/assets/email-templates"
) {
  const template_path = path.join(
    cwd(),
    template_folder_path,
    `${template_name}.txt`
  );
  const template_string = fs.readFileSync(template_path, "utf-8");
  return template_string;
}
