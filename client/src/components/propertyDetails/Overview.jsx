import { FileDown } from "lucide-react";
import { Button } from "../ui/button";

const Overview = () => {
  return (
    <div className="md:mt-7 lg:mt-9 xl:mt-12 2xl:mt-14">
      <div className="w-full border-b pb-3 md:mb-2 lg:mb-3 2xl:mb-4">
        <h1 className="font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
          Overview
        </h1>
      </div>
      <p className="md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a efficitur
        sapien. In non urna consectetur, rhoncus nulla ut, vulputate neque.
        Praesent vel sollicitudin dolor. Donec pulvinar risus vitae condimentum
        vestibulum. Sed varius enim et tempus elementum. Duis pretium odio a
        nulla vestibulum fermentum. Cras vestibulum tortor augue, sed iaculis
        quam dictum ac. Aenean sed condimentum lorem, quis luctus massa.
        Curabitur consequat pulvinar metus pharetra ultrices. Integer dui magna,
        egestas non hendrerit non, sagittis a massa. Proin sit amet quam sapien.{" "}
        <br />
        Suspendisse sit amet fringilla orci, eget ullamcorper libero. Nunc non
        ex eu nisi ultricies posuere. Vestibulum at tempor odio. Nunc nibh
        lectus, gravida sed blandit non, tempor nec purus. Ut euismod nulla at
        dui tempus interdum. Proin laoreet sed lacus sed scelerisque.
        Pellentesque massa risus, rutrum ac nunc ut, elementum faucibus arcu.
        Nullam purus libero, sollicitudin at lorem ut, suscipit dignissim leo.
        Curabitur vitae placerat dui, in rhoncus nulla. <br />
        Donec dapibus dignissim nibh, quis hendrerit odio lobortis dapibus. Sed
        ut condimentum leo, nec fermentum mi. Donec et porta sapien, dapibus
        congue arcu. Quisque consectetur at est dignissim egestas. Nunc eu
        turpis vitae ligula suscipit cursus ut id augue. Fusce sollicitudin
        fringilla quam vel gravida. Aliquam porta ex velit, ac tempor tellus
        iaculis non. Suspendisse eu mi massa. In finibus mollis urna non
        hendrerit. Vivamus ut mauris euismod, suscipit massa vitae, luctus
        libero. Phasellus luctus, libero eu semper consequat, est libero
        porttitor lorem, sed bibendum lacus dolor sed risus. Duis auctor
        tincidunt tristique. Proin eget condimentum tellus. Mauris dapibus
        tincidunt nunc suscipit tincidunt. Ut vitae nulla non tortor tincidunt
        congue ac dignissim mauris. Fusce id nunc libero. <br />
        Suspendisse lobortis nisl id sagittis posuere. Integer auctor est ut mi
        congue, eu dapibus turpis faucibus. Quisque varius aliquet tempor.
        Integer nec eros sed elit condimentum efficitur id sit amet orci.
        Quisque pharetra nisi mauris, quis dapibus odio euismod ut. Pellentesque
        vulputate justo ut dapibus tristique. Aliquam erat volutpat. Fusce
        molestie quis urna sit amet porta. In cursus sem non lacinia rhoncus.{" "}
        <br />
        Duis porta lacinia leo, sed rhoncus nisi. Suspendisse vulputate sagittis
        rutrum. Maecenas rhoncus est ex, sit amet consequat leo scelerisque non.
        Etiam dictum vel est sed molestie. Quisque arcu ante, cursus ac varius
        id, tincidunt at leo. Suspendisse nulla odio, commodo ac dignissim
        dapibus, lacinia vitae mi. Aenean nec urna in dolor ultrices mattis nec
        nec nisl. Sed faucibus, nisi nec vulputate varius, velit felis
        sollicitudin risus, vel aliquet erat neque et massa. Donec commodo justo
        id est elementum auctor. Nam fermentum mauris vel vulputate tempor.
        Phasellus finibus sed libero vitae dictum. Integer a ultrices erat, id
        porttitor nulla. Proin dolor orci, congue eu mauris quis, tempor
        convallis arcu.
      </p>
      <div className="flex flex-col items-start gap-2 md:mt-2 lg:mt-3 2xl:mt-4">
        <h1 className="font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
          Floor Plan
        </h1>

        <Button className="items-center gap-x-1 rounded-md border bg-transparent text-mirage hover:text-white md:px-1 md:text-[7px] lg:h-6 lg:text-[9px]">
          <FileDown size={15} />
          Download Floor Plan
        </Button>
      </div>
    </div>
  );
};

export default Overview;
