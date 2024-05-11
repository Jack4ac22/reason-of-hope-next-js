import HeroMain from "../../components/main/hero-main";
import ContactUsForm from "../../components/contact-us/contact-form";
import PageTitle from "../../components/ui/page-title";
export default function ContactPage(props) {
  return (
    <div>
      <PageTitle
        title="تواصل معنا"
        description="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!"
        image="/creation-pages-images/pexels-photo-5199754.jpeg"
      />
      <ContactUsForm data={props.data} />
    </div>
  );
}

export async function getStaticProps() {
  const api_key = process.env.API_KEY ?? "no api key";
  const api_url = process.env.API_URL_BASE ?? "no api key";
  const data = { api_url, api_key };
  return {
    props: {
      data,
    },
    revalidate: 30000,
  };
}
