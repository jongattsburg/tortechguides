// "use client";
import Image from "next/image";
import Link from "next/link";

export default function GuideCard({ title, blurb, img, id, priority }) {
  return (
    <div className="relative bg-clip-border bg-white text-gray-700 shadow-md guide-card max-w-[24rem] sm:max-w-[20rem] overflow-hidden flex flex-col rounded-md card-bg">
      <div className="card-top bg-transparent relative bg-clip-border overflow-hidden text-gray-700 shadow-lg m-0 rounded-none w-full h-[15rem]">
        <Image
          src={img}
          fill
          sizes="(max-width: 728px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="bitcoin and technology cartoon image"
          priority={priority}
          className="absolute top-[-2rem] left-0"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-content flex flex-col flex-1 gap-3 p-3">
        <header className="flex-1 max-h-[8rem] py-3 flex items-center justify-center">
          <h2 className="block antialiased tracking-normal font-sans leading-[1.3] text-white text-center text-lg font-bold">
            {title}
          </h2>
        </header>

        <div className="">
        <p className="antialiased leading-relaxed font-semibold text-slate-400 clamp-imp">
            {blurb}
          </p>
        </div>

        <footer className="flex items-center justify-end border-t-slate-500">
          <Link href={`/guides/${id}`} className="inline-block">
            <div
              className="flex items-center gap-2 
            bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm"
            >
              Full Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </footer>
      </div>
    </div>
  );
}
