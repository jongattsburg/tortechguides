import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const LINKS = ["home", "about", "guides", "faq"];

export default function NavList() {
  return (
    <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {LINKS.map((link) => (
          <Typography key={link} as="li" variant="small" className="p-1">
            <Link
              href={`/${link !== "home" ? link : ""}`}

              className="flex items-center font-semibold capitalize text-gray-400  hover:text-blue-500 transition-colors"
            >
              {link !== "faq" ? link : link.toUpperCase()}
            </Link>
          </Typography>
        ))}
      </ul>

      <div className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-3 text-center">
        <a
          href="https://www.instagram.com/tortechguidesofficial"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs self-start"
        >
          Follow on Instagram
        </a>
        <a
          href="https://t.me/tortechguides"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs self-start"
        >
          Join on Telegram
        </a>
      </div>
    </div>
  );
}
