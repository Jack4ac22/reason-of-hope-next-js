import Link from "next/link";
import supportUsPageMetadata from "@/assets/blog/metadata/support-us-page";

export const metadata = supportUsPageMetadata;

export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="flex flex-no-wrap justify-center gap-4">
        {/* Arabic Column */}
        <div className="flex flex-col justify-start w-full md:w-1/2 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">كيف يمكنكم المساعدة؟</h2>
          <p className="mb-2">
            جميع الموارد التي ننشرها موزعة مجاناً. بعض هذه الموارد يُطبع ويوزع في أوروبا للناطقين بالعربية، ويتم ذلك بجهود ذاتية وتبرعات.
          </p>
          <p className="mb-2">
            إن أهم دعم يمكنك تقديمه هو الصلاة من أجل حصولنا على الحكمة والمعرفة لاستخدام هذه الموارد بأفضل شكل، وأن نكون أمناء على هذه المواهب.</p>
          <p className="mb-2">
            يمكنك الاطلاع على مشاريعنا القادمة من خلال صفحة
            <Link href="/projects" className="info-link-button">
              مشاريعنا القادمة
            </Link>.
          </p>
          <p>
            للمزيد من المعلومات، يمكنك زيارة صفحة
            <Link href="/contact" className="info-link-button">
              اتصل بنا
            </Link>.
          </p>
        </div>

        {/* English Column */}
        <div className="flex flex-col justify-start w-full md:w-1/2 p-4 rounded-lg" dir="ltr">
          <h2 className="text-2xl font-semibold mb-2">How You Can Support Us</h2>
          <p className="mb-2">
            All the materials we produce are distributed free of charge. Some are printed and distributed across Europe to Arabic-speaking communities, funded entirely by volunteers and donors.
          </p>
          <p className="mb-2">
            The most meaningful support you can give is to pray that our Lord grants us wisdom and understanding, so we steward these resources faithfully and effectively.
          </p>
          <p className="mb-2">
            Learn about our upcoming initiatives on the
            <Link href="/projects" className="info-link-button">
              Projects Page
            </Link>.
          </p>
          <p>
            For more information, please visit our
            <Link href="/contact" className="info-link-button">
              Contact Page
            </Link>.
          </p>
        </div>
      </div>

      <section className="space-y-6 mt-8">
        {/* PayPal Donate Button */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">PayPal</h2>
          <Link
            href="https://paypal.me/JKAZANJYAN?country.x=LU&locale.x=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
          >
            Donate via PayPal.Me
          </Link>
        </div>

        {/* Buy Me a Coffee Link */}

        {/* <div>
          <h2 className="text-2xl font-semibold mb-2">Buy Me a Coffee</h2>
          <a
            href="https://coff.ee/jack.kazanjyan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            ☕ Buy Me a Coffee
          </a>
        </div> */}

        {/* Patreon Link */}
        {/* <div>
          <h2 className="text-2xl font-semibold mb-2">Patreon</h2>
          <a
            href="https://www.patreon.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            ❤️ Support on Patreon
          </a>
        </div> */}
      </section>
    </main>
  );
}