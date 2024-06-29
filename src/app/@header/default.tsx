import HeaderMiddle from "@/components/header-middle";
import HeaderTop, { HeaderTopSkeleton } from "@/components/header-top";
import { Suspense } from "react";
import { HeaderBottomSkeleton } from "@/components/header-bottom";
import { getHeaderCategories } from "../_actions/category";

export default async function Header() {
  return (
    <header className="flex flex-col pb-[20px]">
      <Suspense fallback={<HeaderTopSkeleton />}>
        {(async function () {
            const data = await getHeaderCategories();
            console.log(data, "vfdv")
            return (
              <HeaderTop title="Recent News" news={data?.data} />
            );
          })()}
        </Suspense>
        <div className="header rounded-lg mt-[10px] shadow-md py-[10px] shadow-slate-200 bg-white mx-3">
        <HeaderMiddle />
        {/* <Suspense fallback={<HeaderBottomSkeleton />}>
          <GetHeaderCategories />
        </Suspense> */}
      </div>
    </header>
  );
}
