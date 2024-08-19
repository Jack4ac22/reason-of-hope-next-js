"use server";
import { contact } from "@/utils/libraries/contact-us-library/contact-library";
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
    errors.push("Name is required - الإسم مطلوب");
  }
  if (!email || email.trim() === "" || !email.includes("@")) {
    errors.push("Email is required - البريد الإلكتروني مطلوب");
  }
  if (!message || message.trim() === "") {
    errors.push("Message is required - الرسالة مطلوبة");
  }
  if (errors.length > 0) {
    return { errors };
  }
  await contact(data);
}
