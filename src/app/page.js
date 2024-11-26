import Image from "next/image";
import heroBgImg from "@/assets/images/home-page/hero_bg-comp.webp";
import HeaderImg from "@/components/HeaderImg";
import AboutContent from "@/components/AboutContent";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center h-full">
      <div className="relative h-screen w-full hero bg-rad">
        <div className="relative h-[90%] w-full">
          <Image
            className="absolute inset-0"
            src={heroBgImg}
            alt="Close-up of American currency"
            fill
            sizes="(max-width: 540px) 50vw, 100vw"
            priority
            // placeholder="blur"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className="absolute z-10 left-0 right-0 top-0 bottom-0 m-auto flex flex-col justify-center items-center pt-8 px-4 sm:px-6 gap-3 md:gap-4 max-w-[570px] 
        "
        >
          <div className="px-4 sm:px-6 grid grid-cols-1 gap-2">
            <h1 className="text-5xl text-white font-bold">
              Free carding tutorials
            </h1>
            <p className="text-xl text-blue-gray-100 font-semibold">
              Carding methods, free guides, logs, PayPal transfers, cashapp
              transfers, CCs, fullz, clone cards, and more. Join the free
              community and escape your 9-5.
            </p>
          </div>

          <div className="flex flex-col w-max gap-3 sm:flex-row sm:gap-6 px-4 sm:px-6 text-center">
            <a
              href="https://t.me/tortechguides"
              rel="noopener noreferrer"
              target="_blank"
              role="link"
              className="bg-blue-500 hover:bg-blue-700 text-stone-900 font-bold py-2 px-4 border
            border-blue-600
             rounded-full shadow-md  shadow-blue-500/70 text-lg"
            >
              Join our Telegram
            </a>
            <a
              href="https://www.instagram.com/tortechguidesofficial"
              rel="noopener noreferrer"
              target="_blank"
              role="link"
              className="bg-red-700 hover:bg-red-500 text-white font-bold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded-full shadow-md shadow-red-500/70 text-lg"
            >
              Follow our Instagram
            </a>
          </div>
        </div>
      </div>

      <main className="flex flex-col gap-8 items-center w-full" id="about">
        <HeaderImg title="About Us" component="h2" />
        <AboutContent />
      </main>
    </div>
  );
}
