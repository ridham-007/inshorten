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
        <div className="flex p-[10px] text-[13px] bg-primary text-accent bg-own_bg_header_top_button_secondary text-own_text_header_top_button_primary z-10">
          Trending
        </div>
        <Carousel slides={data} />
        <div className="flex items-center gap-[25px] bg-own_bg_header_top_secondary z-10">
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
        <div className="flex p-[10px] text-[13px] bg-red-500 text-own_white_color_primary">
          Trending
        </div>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex flex-1 mr-5 h-6 font-bold bg-own_skeleton_color_primary animate-pulse rounded-md"></div>
          <div className="hidden md:flex gap-[3px]"></div>
        </div>
      </div>
    </section>
  );
}
