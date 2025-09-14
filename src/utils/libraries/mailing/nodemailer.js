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
    // bcc: bcc,
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



function renderTpl(tplName, vars) {
  // very small string‐replace helper until real templating added
  let html = getMailHtmlTemplate(tplName);
  let text = getMailTextTemplate(tplName);
  Object.entries(vars).forEach(([k, v]) => {
    html = html.replaceAll(`{{${k}}}`, v);
    text = text.replaceAll(`{{${k}}}`, v);
  });
  return { html, text };
}

// 1️⃣ Contact confirmation to user
export async function sendContactConfirmationEmail(to, { confirmLink, cancelLink, messagePreview }) {
  const { html, text } = renderTpl('contact-confirm', { confirmLink, cancelLink, messagePreview });
  await transporter.sendMail({ ...getMailOptions(to), subject: 'رسالة تأكيد الإرسال- Please confirm your message', html, text });
}

// 2️⃣ Verified message -> admin
export async function sendContactAdminNotification(subject, textBody) {
  await transporter.sendMail({ ...getMailOptions(email), subject, text: textBody });
}

// 3️⃣ Subscribe confirmation to user
export async function sendSubscribeConfirmationEmail(to, { confirmLink }) {
  const { html, text } = renderTpl('subscribe-confirm', { confirmLink });
  await transporter.sendMail({ ...getMailOptions(to), subject: 'Confirm your subscription', html, text });
}

// 4️⃣ New subscriber -> admin
export async function sendSubscribeAdminNotification(subscriberEmail) {
  await transporter.sendMail({
    ...getMailOptions(email),
    subject: 'New subscriber confirmed',
    text: `${subscriberEmail} just confirmed their subscription.`
  });
}

// 5️⃣ Optional unsubscribe notice
export async function sendUnsubscribeNotice(to) {
  const { html, text } = renderTpl('unsubscribe-notice', {});
  await transporter.sendMail({ ...getMailOptions(to), subject: 'You have been unsubscribed', html, text });
}