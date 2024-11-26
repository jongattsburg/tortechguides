import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { titleAndContentFromMd, mdOptions } from "@/utils";
import guides from "../guides";
import HeaderImg from "@/components/HeaderImg";

const GuidePage = async ({ params }) => {
  const strId = params.id;

  let title, content;

  try {
    const id = parseInt(strId);

    const guide = guides.find((g) => g.id === id);

    if (isNaN(id) || !guide) {
      // 404
      notFound();
    }

    const result = titleAndContentFromMd(guide.content);

    if (!result) {
      notFound();
    }

    title = result.strTitle;
    content = result.contentMd;
  } catch (e) {
    console.log("Error: ", e.message);
    notFound();
  }

  return (
    <>
      <main className="flex flex-col gap-8 items-center">
        <HeaderImg title={title} />
        <div className="flex flex-col gap-3 max-w-[800px] px-4 sm:px-6">
          <Markdown options={mdOptions}>{content}</Markdown>
        </div>
      </main>
    </>
  );
};

export default GuidePage;
