import HeaderMiddle from "@/components/header-middle";
import HeaderTop, { HeaderTopSkeleton } from "@/components/header-top";
import { Suspense } from "react";
import HeaderBottom, { HeaderBottomSkeleton } from "@/components/header-bottom";
import { getHeaderCategories, getTrendingForSite } from "@/app/_actions/category";

export default async function HeaderAll() {
  return (
    <header className="flex flex-col pb-[20px]">
      <Suspense fallback={<HeaderTopSkeleton />}>
        {(async function () {
            const data = await getTrendingForSite();
            return (
              <HeaderTop title="Recent News" news={data?.data} />
            );
          })()}
        </Suspense>
        <div className="header rounded-lg mt-[10px] shadow-md py-[10px] shadow-slate-200 bg-white mx-3">
        <HeaderMiddle />
        <Suspense fallback={<HeaderBottomSkeleton />}>
        {(async function () {
            const data = await getHeaderCategories();
            return (
              <HeaderBottom data={data?.data} />
            );
          })()}
        </Suspense>
      </div>
    </header>
  );
}
