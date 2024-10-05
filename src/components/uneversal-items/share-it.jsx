'use client';
import { useState } from "react";
import {
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import host from "@/assets/blog/metadata/metadata-variables";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * ShareIt Component
 * 
 * This component provides social media sharing functionality using the `react-share` library.
 * It renders a collection of share buttons for various social media platforms and constructs
 * the share URL dynamically based on the current page's path and query parameters.
 * 
 * ## Props:
 * - **url** (string): Base URL for the sharing link. Defaults to `host` from metadata variables.
 * - **title** (string): Title of the content to share. Defaults to "سبب الرجاء".
 * - **description** (string): Description of the content to share. Defaults to an Arabic text.
 * - **tags** (array of strings): Tags to include in the share post (e.g., for Twitter hashtags). Defaults to an empty array.
 * - **size** (number): Size of the social media icons. Defaults to 32.
 * - **round** (boolean): Whether the icons should have a round shape. Defaults to true.
 * 
 * ## State:
 * - **isSharingOpen** (boolean): Determines if the share buttons are visible. Defaults to false.
 * 
 * ## Functionality:
 * - The component uses `usePathname` and `useSearchParams` from Next.js to construct the full URL
 *   for sharing, which includes the base URL, current pathname, and any query parameters.
 * - Clicking on the "مشاركة" button toggles the visibility of the sharing options.
 * - Each social media button uses dynamic props to share the content on respective platforms.
 * 
 * ## Usage:
 * ```jsx
 * <ShareIt
 *   url="https://example.com"
 *   title="Sample Title"
 *   description="Sample Description"
 *   tags={['tag1', 'tag2']}
 *   size={40}
 *   round={false}
 * />
 * ```
 * 
 * This will render the share buttons with customized props and handle the sharing functionality.
 */
export default function ShareIt({
  url = host,
  title = "سبب الرجاء",
  description = "يُقدِّم موقع سبب الرجاء الكثير من الدراسات التي تهدف إلى مساعدة المؤمنين في التعرف على الكتاب المقدس والدفاع عنه.\n ",
  tags = [],
  size = 32,
  round = true,
  article = {},
}) {
  // Use Next.js hooks to get the current pathname and search parameters
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Construct the full URL for sharing using pathname and search parameters
  const currentPath = pathname ? pathname : "";
  const query = searchParams.toString() ? `?${searchParams.toString()}` : "";
  const link = `${url}${currentPath}${query}`;
  // console.log("Constructed share link: ", link);

  // use the article content and default to the props
  try {
    if (article?.title) title = article.title;
    if (article?.description) description = article.description;
    if (article?.tags) tags = article?.tags.map((tag) => tag?.replaceAll('-', '_'));
  } catch (error) {
    console.error("Error in ShareIt component: ", error);
  }

  // Define share buttons and their respective properties
  const shareButtons = [
    {
      Component: FacebookShareButton,
      Icon: FacebookIcon,
      props: { url: link, quote: description, hashtag: `${tags.map((tag) => `#${tag}`).join(" ")}` },
    },
    { Component: TwitterShareButton, Icon: TwitterIcon, props: { title, url: link, hashtags: tags } },
    { Component: WhatsappShareButton, Icon: WhatsappIcon, props: { url: link, title, separator: ":: " } },
    { Component: TelegramShareButton, Icon: TelegramIcon, props: { url: link, title } },
    {
      Component: EmailShareButton,
      Icon: EmailIcon,
      props: {
        subject: `موضوع يستحق القراءة: ${title}`,
        body: `يُقدِّم موقع سبب الرجاء الكثير من الدراسات المجانية التي تهدف إلى مساعدة المؤمنين في التعرف على الكتاب المقدس والدفاع عنه.\n ${title}: ${link} \n المجد لله دائماً.`,
      },
    },
  ];

  const [isSharingOpen, setIsSharingOpen] = useState(false);

  // Toggle the sharing menu's visibility
  const toggleSharing = () => {
    setIsSharingOpen((prev) => !prev);
  };

  return (
    <div className="h-16 flex justify-center text-center">
      <div className="flex-col justify-center relative group">
        {/* Toggle Button */}
        <button
          onClick={toggleSharing}
          className={`${isSharingOpen ? "share-it-button-open" : "share-it-button"}`}
          aria-expanded={isSharingOpen}
          aria-controls="share-menu"
          role="button"
        >
          مشاركة
        </button>

        {/* Share Menu - Visible only when `isSharingOpen` is true */}
        <div id="share-menu" className={`${isSharingOpen ? "share-it-open" : "share-it"} mt-2`}>
          {shareButtons.map(({ Component, Icon, props }, index) => (
            <div key={index} className="mx-2 hover:animate-pulse">
              <Component
                {...props}
                onClick={() => setIsSharingOpen(false)}
                aria-label={`Share on ${Component.displayName || Component.name}`}
              >
                <Icon size={size} round={round} />
              </Component>
            </div>
          ))}
        </div>

        {/* Optional backdrop to close the menu */}
        {isSharingOpen && (
          <div
            className="fixed inset-0"
            onClick={toggleSharing}
            role="button"
            aria-label="Close sharing options"
          />
        )}
      </div>
    </div>
  );
}
