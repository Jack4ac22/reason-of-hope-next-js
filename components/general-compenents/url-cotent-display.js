import { useEffect, useState } from "react";

export default function UrlContentDisplay({ url }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchUrlContent() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setContent(data);
      } catch (error) {
        console.error("Error fetching URL content:", error);
      }
    }

    fetchUrlContent();
  }, [url]);

  return <pre>{content}</pre>;
}
