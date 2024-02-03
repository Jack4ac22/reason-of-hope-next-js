import HeroMain from "../../components/main/hero-main";
import ContactUsForm from "../../components/contact-us/contact-form";
import PageTitle from "../../components/ui/page-title";
export default function ContactPage() {
  return (
    <div>
      <PageTitle
        title="تواصل معنا"
        description="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!"
        image="/creation-pages-images/pexels-photo-5199754.jpeg"
      />
      <ContactUsForm />
    </div>
  );
}
