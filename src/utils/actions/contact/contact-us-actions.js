"use server";
import { sendContactMail } from "@/utils/libraries/contact-us-library/contact-library";

// Load blocked domains and words from environment variables or use defaults
const blockedDomains = (process.env.BLOCKED_DOMAINS || "getmoreopportunities.info,growthmarketingnow.info,increasetraffic.shop").split(",");
const blockedWords = (process.env.BLOCKED_WORDS || "growth,marketing,formula,opportunity,profit,eco,crowdfunding").split(",");


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

  // Name validation
  if (!name || name.trim() === "") {
    errors.push({ name: "name", message: "Name is required - الإسم مطلوب" });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailDomain = email?.split("@")[1]?.toLowerCase();
  const emailUsername = email?.split("@")[0]?.toLowerCase();

  if (
    !email ||
    email.trim() === "" ||
    !emailRegex.test(email) ||
    blockedDomains.includes(emailDomain) ||
    blockedWords.some((word) => emailUsername.includes(word) || emailDomain.includes(word))
  ) {
    errors.push({
      name: "email",
      message: "This field is required or contains invalid data - هذا الحقل مطلوب أو يحتوي على بيانات غير صالحة",
    });
  }

  // Language and content validation
  const arabicRegex = /[\u0600-\u06FF]/g;
  const englishSpamPhrases = [
    "click here",
    "unlock your success",
    "act now",
    "time is running out",
    "eco-conscious",
    "crowdfunding",
    "bright future",
    "ultimate game-changer",
    "earn for a lifetime",
    "floating island",
    "check it out",
  ];
  const arabicMatches = message.match(arabicRegex) || [];
  const hasArabicContent = arabicMatches.length > 0;

  // Restrict Arabic content for blocked domains
  if (blockedDomains.includes(emailDomain)) {
    if (hasArabicContent) {
      errors.push({
        name: "message",
        message: "Arabic content is not allowed for blocked domains - المحتوى العربي غير مسموح به لهذا النطاق",
      });
    }
  }

  // General spam detection
  const shortenedURLRegex = /(bit\.ly|t\.co|tinyurl\.com|goo\.gl)/i;
  const urgencyRegex = /\b(time is running out|act fast|don’t miss your chance)\b/i;

  const maxLinks = 2;
  const linkCount = (message.match(/https?:\/\/[^\s]+/gi) || []).length;

  if (!message || message.trim() === "") {
    errors.push({
      name: "message",
      message: "Message is required - الرسالة مطلوبة",
    });
  } else if (message.length < 20) {
    errors.push({
      name: "message",
      message: "Message is too short - الرسالة قصيرة جدًا",
    });
  } else if (linkCount > maxLinks) {
    errors.push({
      name: "message",
      message: "Too many links in the message - الرسالة تحتوي على العديد من الروابط",
    });
  } else if (
    englishSpamPhrases.some((phrase) => message.includes(phrase)) ||
    shortenedURLRegex.test(message) ||
    urgencyRegex.test(message)
  ) {
    errors.push({
      name: "message",
      message: "Message contains spam-like content - الرسالة تحتوي على محتوى مشابه للبريد العشوائي",
    });
  }

  // Return errors if any
  if (errors.length > 0) {
    return { prevState, errors };
  }

  // Send email if validation passes
  const response = await sendContactMail(data);
  return { prevState, response };
}
