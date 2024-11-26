import HeaderImg from "@/components/HeaderImg";
import GuideCard from "./GuideCard";
import guides from "./guides";
import { titleAndContentFromMd } from "@/utils";

import cardImg1 from "@/assets/images/guide-cards/img_1.webp";
import cardImg2 from "@/assets/images/guide-cards/img_2.webp";
import cardImg3 from "@/assets/images/guide-cards/img_3.webp";
import cardImg4 from "@/assets/images/guide-cards/img_4.webp";
import cardImg5 from "@/assets/images/guide-cards/img_5.webp";
import cardImg6 from "@/assets/images/guide-cards/img_6.webp";

const cardImgs = [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6];

const getCardImg = (id) => {
  if (id < 1 || id > cardImgs.length) {
    return null;
  }

  return cardImgs[id - 1];
};

const getTitleFromId = (id) => {
  const guide = guides.find((g) => g.id === id);
  if (!guide) {
    return null;
  }
  const { strTitle } = titleAndContentFromMd(guide.content);

  if (!strTitle) {
    return null;
  }
  return strTitle;
};

const priorityCutoff = cardImgs.length / 2;

const page = () => {

  return (
    <main className="flex flex-col gap-8 items-center">
      <HeaderImg title="Free Modern Carding Guides" />

      <div className="flex flex-col gap-2 md:gap-4 max-w-[1200px] px-4 sm:px-6">
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {guides.map((item) => (
            <GuideCard
              key={item.id}
              title={getTitleFromId(item.id)}
              blurb={item.blurb}
              img={getCardImg(item.id)}
              id={item.id}
              priority={item.id <= priorityCutoff ? true : false}
            />
          ))}

        </section>
      </div>
    </main>
  );
};

export default page;
