"use client";
import { useRouter } from "next/navigation";
import Carousel from "./carousel";

export default function HeaderTop({ data }: any) {

  const currentDate = new Date();
  const router = useRouter();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <section className={`flex flex-col px-[20px] w-[100%]`}>
      <div className="hidden sm:flex flex-wrap justify-between items-center h-auto gap-[5px] overflow-hidden">
        <div className="flex p-[10px] text-[13px] bg-primary text-accent bg-black text-white z-10">
          Trending
        </div>
        <Carousel slides={data}/>
        <div className="flex items-center gap-[25px] bg-white z-10">
          <div className="text-[14px]">{formattedDate}</div>
        </div>
      </div>
    </section>
  );
}

export function HeaderTopSkeleton() {
  return (
    <section className="flex flex-col px-[20px] w-[100%]">
      <div className="hidden sm:flex flex-wrap justify-between items-center h-auto gap-[5px]">
        <div className="flex p-[10px] text-[13px] bg-red-500 text-white">
          Trending
        </div>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex flex-1 mr-5 h-6 font-bold bg-[#d1d5db] animate-pulse rounded-md"></div>
          <div className="hidden md:flex gap-[3px]">
            {/* <Button variant="outline">
              <ChevronLeft className="h-43 w-4" />
            </Button>

            <Button variant="outline">
              <ChevronRight className="h-4 w-4" />
            </Button> */}
          </div>
        </div>

        {/* <div className="flex items-center gap-[25px]">
          <div className="hidden md:flex border-l-[1px] border-gray-400 h-[20px]"></div>
          <div className="flex gap-[10px]">
            <Button variant="outline">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <Youtube className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
