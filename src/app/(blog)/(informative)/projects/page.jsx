import SoonPageMetadata from "@/assets/blog/metadata/soon-page";

export const metadata = SoonPageMetadata;

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6" dir="ltr">
      <h1 className="text-3xl font-bold mb-6">Our Current Projects</h1>

      <ul className="list-disc pl-5 space-y-8">
        <li>
          <h2 className="text-2xl font-semibold">Translation: The Forgotten Trinity</h2>
          <p>
            Translating James R. White’s book <em>The Forgotten Trinity</em> (1998). This essential work explores the biblical foundation of the Trinity and its practical significance for Christian faith. The translation is complete and undergoing internal review.
          </p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold">Translation: Scripture Alone</h2>
          <p>
            James R. White’s book <em>Scripture Alone</em> (2004) is currently being translated into Arabic. The book defends the doctrine of Sola Scriptura and addresses objections raised against the sufficiency of Scripture.
          </p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold">Translation: Grieving – Your Path Back to Peace</h2>
          <p>
            <em>Grieving: Your Path Back to Peace</em> (1997) by James R. White is currently in the proofreading and editing stage. This short but pastoral book provides comfort and biblical counsel to those walking through grief.
          </p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold">Christian Bible Quiz App</h2>
          <p>
            We are developing a simple quiz app that helps users test their knowledge of the Bible in a fun and interactive way. The content is being translated into Arabic, and the question database is actively being prepared. This is an ongoing project.
          </p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold">Arabic Bible Study App</h2>
          <p>
            This long-term project aims to build an Arabic-language Bible app inspired by Logos. The goal is to equip users with tools for dictionary lookups, cross-referencing, and integrated systematic theology studies—all without leaving the biblical text. The foundation is being laid as datasets are translated and structured.
          </p>
        </li>
      </ul>
    </main>
  );
}