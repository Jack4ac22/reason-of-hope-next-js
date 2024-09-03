import nodemailer from "nodemailer";

const email = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD || "";
const bcc = process.env.BCC_EMAIL_ADDRESS || "";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
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

export const mailOptions = {
  from: email,
  to: email,
  bcc: bcc,
};
