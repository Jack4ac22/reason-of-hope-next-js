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

export default function ShareIt({
  url = host,
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
    <div className="flex justify-center text-center">
      <div className="flex-col justify-center">
        <button
          onClick={toggleSharing}
          className="info-link-button mt-3 mb-3 "
        >
          شارك المنفعة مع الآخرين
        </button>

        {isSharingOpen && (
          <div className="mb-3 flex space-x-3">
            <div className="mx-2 hover:animate-pulse">
              <FacebookShareButton
                onClick={toggleSharing}
                url={url}
                quote={description}
                hashtag={`${tags.map((tag) => `#${tag}`).join(" ")}`}
                description={description}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>

            <div className="mx-2 hover:animate-pulse">
              <TwitterShareButton
                onClick={toggleSharing}
                title={title}
                url={url}
                hashtags={tags}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>

            <div className="mx-2 hover:animate-pulse">
              <WhatsappShareButton
                onClick={toggleSharing}
                url={url}
                title={title}
                separator=":: "
              >
                <WhatsappIcon size={size} round={round} />
              </WhatsappShareButton>
            </div>

            <div className="mx-2 hover:animate-pulse">
              <TelegramShareButton onClick={toggleSharing} url={url} title={title}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>

            <div className="mx-2 hover:animate-pulse">
              <EmailShareButton
                subject={`موضوع يستحق القراءة: ${title}`}
                body={`يُقدِّم موقع سبب الرجاء الكثير من الدراسات المجانية التي تهدف إلى مساعدة المؤمنين في التعرف على الكتاب المقدس والدفاع عنه.\n  ${title}: ${url}  \n المجد لله دائماً.`}
              >
                <EmailIcon size={size} round={round} />
              </EmailShareButton>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}