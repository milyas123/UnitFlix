import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";

export default function Pagination({
    totalPages,
    currentPage,
    paginate
}) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const textSize = "2xl:text-[12px] xl:text-[10px] lg:text-[8px] md:text-[6px] text-[5px]";
  const iconSize = "2xl:h-[16px] xl:h-[14px] lg:h-[12px] md:h-[10px] h-[9px] lg:mr-[5px] md:mr-[2px] mr-[1px]";
  const itemPadding = "lg:px-4 md:px-3 px-2 py-2";

  return (
    <div className="flex items-center justify-center border-t border-t-mercury bg-white p-6 sm:px-6">
      <nav
        className="isolate inline-flex -space-x-px shadow-sm"
        aria-label="Pagination"
      >
        <button
          className="relative inline-flex items-center px-2 py-2 text-black ring-1 ring-inset ring-[#dedede] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="sr-only">Previous</span>
          <ArrowLeft className={iconSize} />
          <p className={textSize}>Previous</p>
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`relative z-10 inline-flex items-center ${
              currentPage === number
                ? "bg-mirage text-white"
                : "bg-white text-mirage hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            } ${itemPadding} ${textSize} font-semibold text-black ring-1 ring-inset ring-[#dedede]`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="relative inline-flex items-center px-2 py-2 text-black ring-1 ring-inset ring-[#dedede] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next</span>
          <p className={textSize}>Next</p>
          <ArrowRight className={iconSize} />
        </button>
      </nav>
    </div>
  );
}
