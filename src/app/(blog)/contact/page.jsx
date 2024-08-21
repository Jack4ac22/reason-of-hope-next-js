import ContactUsForm from "@/components/contact-us/contact-form"
import { contactUs } from "@/utils/actions/contact/contact-us-actions";
import contactUsMetadata from "@/assets/blog/metadata/contact-us-page";

export const metadata = contactUsMetadata
export default function ContactPage() {
  return (
    <>
      <main className="flex flex-col flex-wrap justify-center items-center content-center" aria-label="Contact Us Page">
        <section className="w-full max-w-xl h-full mx-4" aria-labelledby="article-heading">
          <h1 id="article-heading" className="sr-only">Contact Us Page</h1>
          <header className="flex flex-col items-center justify-center uni-text-color">
            <h1 className="text-3xl font-bold">اتصل بنا</h1>
            <p className="text-lg">لا تترد  بالإتصال بنا وطرح تساؤلات أو تقديم طلباتك.</p>
          </header>
          <div className="flex flex-col items-center justify-center w-full">
            <ContactUsForm action={contactUs} />
          </div>
        </section>
      </main>
    </>
  );
}