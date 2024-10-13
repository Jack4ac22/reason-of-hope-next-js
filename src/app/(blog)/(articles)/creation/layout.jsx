import homepageMetadata from "@/assets/blog/metadata/homepage";
import CreationNavbar from "@/components/blog-components/ui/navigation/creation-navbar";

export const metadata = homepageMetadata;

export default function CreationLayout({ children }) {
  return (
    <div>
      <CreationNavbar />
      {children}
    </div>

  );
}
