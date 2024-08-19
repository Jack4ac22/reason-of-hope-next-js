import ContactUsForm from "@/components/contact-us/contact-form"
import { contactUs } from "@/utils/actions/contact/contact-us-actions";
export default function ContactPage() {
  return (
    <>
      <header className="flex flex-col items-center justify-center uni-text-color">
        <h1 className="text-3xl font-bold">اتصل بنا</h1>
        <p className="text-lg">لا تترد  بالإتصال بنا وطرح تساؤلات أو تقديم طلباتك.</p>
      </header>
      <section className="flex flex-col items-center justify-center">
        <ContactUsForm  action={contactUs}/>
      </section>

    </>
  );
}