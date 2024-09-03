"use server";
import { sendMail } from "@/utils/libraries/email-templates/templates-contact-us";
export async function contactUs(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const title = formData.get("title");
  const message = formData.get("message");
  const data = {
    name,
    email,
    title,
    message,
  };
  let errors = [];
  if (!name || name.trim() === "") {
    errors.push({ name: "name", message: "Name is required - الإسم مطلوب" });
  }
  if (!email || email.trim() === "" || !email.includes("@")) {
    errors.push({
      name: "email",
      message: "Email is required - البريد الإلكتروني مطلوب",
    });
  }
  if (!message || message.trim() === "") {
    errors.push({
      name: "message",
      message: "Message is required - الرسالة مطلوبة",
    });
  }
  if (errors.length > 0) {
    return { prevState, errors };
  }
  const response = await sendMail(data);
  return { prevState, response };
}
