import Link from "next/link";
import { Typography } from "@/components/MaterialTW";
import EnvelopeIcon from "./EnvelopeIcon";
import TgIcon from "@/components/TelegramIcon";
import IgIcon from "@/components/InstagramIcon";
import FooterLink from "./FooterLink";

const LINKS = [
  {
    title: "Contact",
    items: [
      {
        title: "Email",
        contact: "tortechguidesofficial@proton.me",
        icon: <EnvelopeIcon height={20} width={20} className="h-5 w-5" />,
        type: "email",
      },
    ],
  },
  {
    title: "Follow us",
    items: [
      {
        title: "Telegram",
        contact: "tortechguides",
        url: "https://t.me/tortechguides",
        icon: <TgIcon />,
        type: "absolute",
      },
      {
        title: "Instagram",
        contact: "tortechguidesofficial",
        url: "https://www.instagram.com/tortechguidesofficial",
        icon: <IgIcon />,
        type: "absolute",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { url: "about", title: "About us", type: "relative" },
      { url: "guides", title: "Free guides", type: "relative" },
      { url: "faq", title: "FAQ", type: "relative" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const disclaimer =
  "Please keep in mind that engaging in carding activities is not only unethical but also illegal. Any attempt to engage in such activities is strongly discouraged. This website's content is primarily for educational purposes. Our purpose is to share insights into the most recent carding methods without promoting or encouraging any illegal actions. It is critical to understand that we cannot be held liable for any actions taken based on the information supplied. We value free expression and work within its parameters.";

export default function Footer() {
  return (
    <footer className="relative w-full pt-8 border-t border-blue-gray-700 bg-background">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-3">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(_auto,_1fr)_1fr_1fr] justify-between md:justify-items-center gap-2">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-3 opacity-80 font-bold"
                >
                  {title}
                </Typography>
                <ul className="">
                  {items.map((link) => {
                    return (
                      <li key={link.title}>
                        <FooterLink link={link} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="divider w-full"></div>

          <div id="disclaimer">
            <Typography
              variant="small"
              color="white"
              className="mb-3 font-bold opacity-80"
            >
              Disclaimer
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="py-1.5 font-normal transition-colors text-slate-400"
            >
              {disclaimer}
            </Typography>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-secondary"
          >
            &copy; {currentYear} <Link href="/">Tortech Guides</Link>. All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
