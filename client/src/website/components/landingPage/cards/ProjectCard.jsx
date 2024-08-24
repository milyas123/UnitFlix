import { formatCurrency } from "@/lib/utils";
import { Button } from "../../ui/button";
import {Link} from "react-router-dom";
import LazyLoad from 'react-lazyload';
import FeaturedIcon from "@/website/components/common/FeaturedIcon.jsx";
import Tag from "@/website/components/common/Tag.jsx";
import PropertyTags from "@/website/components/common/PropertyTags.jsx";

const ProjectCard = ({ project, isLimited }) => {
  const textSizes =
    "text-[16px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]";

  return (
      <Link className='contents' to={`/property-details/${project?.id}`}>
        <div className={`cursor-pointer ${isLimited ? 'w-full md:w-[90%] md:min-w-[150px] md:max-w-[200px] lg:w-[95%] lg:min-w-[225px] lg:max-w-[270px] xl:w-[92%] xl:min-w-[290px] xl:max-w-[320px] 2xl:w-[95%] 2xl:min-w-[345px] 2xl:max-w-[400px]' : 'shadow-lg md:w-[95%] md:max-w-[190px] md:rounded-md lg:w-[99%] lg:max-w-[250px] xl:max-w-[295px] 2xl:max-w-[400px] 2xl:rounded-xl'}`}>
          <div className={`relative`}>
            <LazyLoad>
              <img
                  className={`w-full object-cover ${isLimited ? 'rounded-lg h-[505px] md:h-[239px] lg:h-[286px] xl:h-[348.5px] 2xl:h-[469.75px]' : 'rounded-xl  2xl:rounded-xl md:rounded-md lg:rounded-lg  shadow-lg shadow-pastelGrey h-[310px] md:h-[140px] lg:h-[190px] xl:h-[250px] 2xl:h-[310px]'}`}
                  src={project?.files.find((file) => file.purpose === 0)?.url}
                  alt="Dubai South"
              />
            </LazyLoad>
            <div className='absolute top-2 left-2 flex items-center gap-2'>
              <PropertyTags property={project} />
            </div>
            <div
                className={`absolute z-[300] bg-white px-3 py-4 md:p-2 lg:p-3 2xl:p-3.5 ${isLimited ? 'border border-lightGrey bottom-0 left-0 right-0 rounded-lg' : 'rounded-xl md:rounded-md lg:rounded-lg 2xl:rounded-xl shadow-lg -bottom-[90px] md:-bottom-16 lg:-bottom-14 xl:-bottom-16 2xl:-bottom-24 left-4 right-4 md:left-2 md:right-2 lg:left-3.5 lg:right-3.5 xl:left-5 xl:right-5 2xl:left-6 2xl:right-6'}`}>
              <h2
                  className={`mb-1.5 text-center font-semibold md:mb-0.5 lg:mb-1 xl:mb-1.5 2xl:mb-2 ${textSizes}`}
              >
                {project?.title}
              </h2>
              <p className={`text-center ${textSizes}`}>
                {
                  project?.tags
                }
              </p>
              <p
                  className={`mt-1.5 text-center font-semibold text-gray-700 md:mt-0.5 lg:mt-1 xl:mt-1.5 2xl:mt-2 ${textSizes}`}
              >
                Starting From <br/> {formatCurrency(project?.price)}
              </p>
              {
                isLimited ?
                    <></> :
                    <div className="mt-2 flex justify-center md:mt-1.5 lg:mt-2 xl:mt-3 2xl:mt-4">
                      <Button
                          className={`font-semibold hover:bg-white hover:text-mirage md:h-2 md:px-2 lg:h-6 lg:px-3 xl:h-7 xl:px-4 2xl:h-8 ${textSizes}`}
                      >
                        Register Your Interest
                      </Button>
                    </div>
              }
            </div>
          </div>
        </div>
      </Link>
  );
};

export default ProjectCard;
