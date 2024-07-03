import FAQCard from "./FAQCard";

const FAQs = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="text-center space-y-2">
          <h1 className="font-semibold text-[40px]">
            Frequently Asked Questions
          </h1>
          <p className="text-[16px] text-smokeyGrey w-[72%] mx-auto">
            Welcome to our FAQs page! We have compiled a list of commonly asked
            questions to provide you with quick and informative answeres
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-5">
          {[1, 2, 3, 4].map((item) => (
            <FAQCard key={item} number={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
