/**
 * A component that renders social media sharing buttons.
 * @param {Object} props - The component props.
 * @param {string} [props.baseUrl="PROT_URL_BASE"] - The base URL to share.
 * @param {string} [props.url="PROT_URL_BASE"] - The URL to share.
 * @param {string} [props.title="سبب الرجاء"] - The title of the shared content.
 * @param {string} [props.description="يُقدِّم موقع سبب الرجاء الكثير من الدراسات المجانية التي تهدف إلى مساعدة المؤمنين في التعرف على الكتاب المقدس والدفاع عنه.\n "] - The description of the shared content.
 * @param {string[]} [props.tags=[]] - The tags to include in the shared content.
 * @param {number} [props.size=32] - The size of the social media icons.
 * @param {boolean} [props.round=true] - Whether to round the social media icons.
 * @returns {JSX.Element} - The rendered component.
 */
import React, { useState } from "react";

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

export default function ShareIt({
  baseUrl = "PROT_URL_BASE",
  url = "PROT_URL_BASE",
  title = "سبب الرجاء",
  description = "يُقدِّم موقع سبب الرجاء الكثير من الدراسات المجانية التي تهدف إلى مساعدة المؤمنين في التعرف على الكتاب المقدس والدفاع عنه.\n ",
  tags = [],
  size = 32,
  round = true,
}) {
  const [isSharingOpen, setIsSharingOpen] = useState(false);

  const toggleSharing = () => {
    setIsSharingOpen(!isSharingOpen);
  };

  return (
    <>
      <button
        onClick={toggleSharing}
        className="btn btn-outline-info mt-3 mb-3 "
      >
        شارك المنفعة مع الآخرين
      </button>

      {isSharingOpen && (
        <div className="mb-3">
          <FacebookShareButton
            onClick={toggleSharing}
            url={url}
            quote={description}
            hashtag={`${tags.map((tag) => `#${tag}`).join(" ")}`}
            description={description}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            onClick={toggleSharing}
            title={title}
            url={url}
            hashtags={tags}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <WhatsappShareButton
            onClick={toggleSharing}
            url={url}
            title={title}
            separator=":: "
          >
            <WhatsappIcon size={size} round={round} />
          </WhatsappShareButton>

          <TelegramShareButton onClick={toggleSharing} url={url} title={title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          {/* <EmailShareButton
            onClick={toggleSharing}
            // url={url}
            subject={title}
            body={`يُقدِّم موقع سبب الرجاء الكثير من الدراسات المجانية التي تهدف إلى مساعدة المؤمنين في التعرف على الكتاب المقدس والدفاع عنه.\n ${
              description ? "هذا المنشور يُقدِّم:" + description : ""
            } \n المجد لله دائماً.`}
          >
            <EmailIcon size={size} round={round} />
          </EmailShareButton> */}

          <EmailShareButton
            subject={`Check out what I did on GoodWerk`}
            body={`يُقدِّم موقع سبب الرجاء الكثير من الدراسات المجانية التي تهدف إلى مساعدة المؤمنين في التعرف على الكتاب المقدس والدفاع عنه.\n  ${title}: ${url}  \n المجد لله دائماً.`}
          >
            <EmailIcon size={size} round={round} />
          </EmailShareButton>
        </div>
      )}
    </>
  );
}
