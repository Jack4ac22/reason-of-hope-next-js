import homepageMetadata from "@/assets/blog/metadata/homepage";
import PublicationsNavbar from "@/components/blog-components/ui/navigation/publications-navbar";

export const metadata = homepageMetadata;

export default function PublicationsLayout({ children }) {
  return (
    <div>
      <PublicationsNavbar />
      {children}
    </div>

  );
}
