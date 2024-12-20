import homepageMetadata from "@/assets/blog/metadata/homepage";
import ObjectionsNavbar from "@/components/blog-components/ui/navigation/objections-navbar";

export const metadata = homepageMetadata;

export default function ObjectionsLayout({ children }) {
  return (
    <div>
      <ObjectionsNavbar />
      {children}
    </div>

  );
}
