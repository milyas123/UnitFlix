import FAQCard from "./FAQCard";
import website from "@/data/website.json";
import Multiline from "@/website/components/common/Multiline.jsx";

const FAQs = () => {
  return (
    <div className="mt-9 mb-10 lg:mb-64 md:mt-0 flex items-center justify-center">
      <div>
        <div className="space-y-2 text-center">
          <h1 className="font-semibold text-[32px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px]">
            {website.aboutPage.section5.heading}
          </h1>
          <p className="mx-auto text-smokeyGrey text-[14px] md:w-[57%] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:w-[58%] 2xl:text-[16px]">
            <Multiline text={website.aboutPage.section5.description} />
          </p>
        </div>

        <div className="flex flex-wrap justify-between mt-8 md:mt-4 md:gap-y-1 lg:mt-7 lg:gap-y-2 xl:mt-10 xl:gap-y-3 2xl:mt-12 2xl:gap-y-4">
          {website.aboutPage.section5.faqs.map((faq, index) => (
            <FAQCard key={index} title={faq.title} description={faq.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
