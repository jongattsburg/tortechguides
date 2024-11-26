import Link from "next/link";

const footerLinkBaseStyles =
  "py-1.5 font-normal transition-colors flex gap-1 items-center text-slate-400 overflow-x-scroll";
const linkHoverStyle = "hover:text-gray-200";

const FooterLink = ({ link }) => {
  let element;

  switch (link.type) {
    case "email":
      element = (
        <div className={footerLinkBaseStyles}>
          {link.icon ?? ""}
          <span>{link.contact ?? link.title}</span>
        </div>
      );
      break;

    case "absolute":
      element = (
        <a
          href={link.url}
          rel="noopener noreferrer"
          target="_blank"
          role="link"
          className={`${footerLinkBaseStyles} ${linkHoverStyle}`}
        >
          {link.icon ?? ""}
          <span>{link.contact ?? link.title}</span>
        </a>
      );
      break;
    case "relative":
      element = (
        <Link
        href={link.url}
          className={`${footerLinkBaseStyles} ${linkHoverStyle}`}
        >
          {link.icon ?? ""}
          <span>{link.contact ?? link.title}</span>
        </Link>
      );
      break;
    default:
      return;
  }

  return element;
};

export default FooterLink;
