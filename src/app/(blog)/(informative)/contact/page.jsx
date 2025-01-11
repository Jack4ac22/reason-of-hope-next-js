import { contactUs } from "@/utils/actions/contact/contact-us-actions";
import ContactUsForm from "@/components/contact-us/contact-form"
import contactUsMetadata from "@/assets/blog/metadata/contact-us-page";

export const metadata = contactUsMetadata
export default function ContactPage() {
  return (
    <>
      <main className="page-main" aria-label="Contact Us Page">
        <section className="w-full max-w-xl h-full mx-4" aria-labelledby="article-heading">
          <h1 id="article-heading" className="sr-only">Contact Us Page</h1>
          <header className="flex flex-col items-center justify-center uni-text-color">
            <h1 className="text-3xl font-bold">اتصل بنا</h1>
            <h2 className="text-lg">لا تترد  بالإتصال بنا وطرح تساؤلات أو تقديم طلباتك.</h2>
          </header>
          <div className="flex flex-col items-center justify-center w-full">
            <ContactUsForm action={contactUs} />
          </div>
        </section>
      </main>
    </>
  );
}