import React from "react";
import Image from "next/image";
import cardImg from "@/assets/images/banners/img_5-banner.webp";

const HeaderImg = ({ title, component: Component = "h1" }) => {
  return (
    <div className="relative pt-8 pb-4 w-full flex justify-center max-w-[840px]">
      <Component className="text-5xl text-white font-bold relative z-10 max-w-[800px] w-full px-4 sm:px-6">
        {title}
      </Component>

      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Image
          className="header-img md:blur-none"
          src={cardImg}
          priority={Component === "h1" ? true : false}
          // sizes="(min-width: 808px) 50vw, 100vw"
          alt="Cropped Bitcoin and technology cartoon image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default HeaderImg;
