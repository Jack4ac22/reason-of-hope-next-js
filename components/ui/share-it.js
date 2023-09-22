import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

export default function ShareIt({
  url = "https://reasonofhope.com",
  title = "سبب الرجاء",
  description = "",
  tags = [],
  size = 32,
  round = true,
}) {
  return (
    <div className="flex flex-row space-x-2">
      <FacebookShareButton
        url={url}
        quote={description}
        hashtag={`${tags.map((tag) => `#${tag}`).join(" ")}`}
        description={description}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        title={title}
        url={url}
        hashtags={tags}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={size} round={round} />
      </WhatsappShareButton>

      <EmailShareButton url={url} options={title}>
        <EmailIcon size={size} round={round} />
      </EmailShareButton>
    </div>
  );
}
