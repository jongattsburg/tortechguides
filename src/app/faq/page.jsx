import Markdown from "markdown-to-jsx";
import { mdOptions, titleAndContentFromMd } from "@/utils";
import HeaderImg from "@/components/HeaderImg";

const faqs = `**Frequently Asked Questions**

**What services do you offer?**

We offer free cash out guides, opsec guides, and carding tutorials. Other services we provide include cashapp transfers, bank logs, VBV and non-VBV credit/debit cards, cloned ATM cards, Paypal transfer and logs, and more!

**How long does it take for cloned cards to come in the mail?**

Cloned debit cards are shipped the next business day through USPS so we are able to provide tracking the next day. If you are in the USA expect the card in a few days, if you are outside the USA be patient as it could take over a week to receive your cloned debit card. Clone cards are one of our easiest cashout methods, simply take them to an ATM and use the PIN provided on the card.

**Do the bank logs come with cookies?**

Our bank logs often come with cookies to make the login process seamless. You can request a log with cookies when at checkout, or you can attempt to cash out the log with one of our free methods. Please keep in mind bank logs with cookies included often come with more information and are usually more expensive.

**I have an issue with one of your methods, where can I get help?**

You can message us through email, or the fastest way to get a response is to join our telegram community channel, which includes some of the products we offer and a team of support staff who are ready to assist you with any method or process we offer.`;

const page = () => {
  const { strTitle, contentMd } = titleAndContentFromMd(faqs);

  return (
    <main className="flex flex-col gap-8 items-center">
      <HeaderImg title={strTitle} />

      <div className="flex flex-col gap-3 max-w-[800px] px-4 sm:px-6 content">
        <article className="flex flex-col gap-6">
          <Markdown options={mdOptions}>{contentMd}</Markdown>
        </article>
      </div>
    </main>
  );
};

export default page;
