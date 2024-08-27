import homepageMetadata from "@/assets/blog/metadata/homepage";
import DiverseNavbar from "@/components/blog-components/ui/navigation/diverse-navbar";

export const metadata = homepageMetadata;

export default function PublicationsLayout({ children }) {
  return (
    <div>
      <DiverseNavbar />
      {children}
    </div>

  );
}
