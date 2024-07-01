import HeaderMiddle from "@/components/header-middle";
import HeaderTop, { HeaderTopSkeleton } from "@/components/header-top";
import { Suspense } from "react";
import { getHeaderCategories, getTrendingForSite } from "@/app/_actions/category";
import HeaderBottom, { HeaderBottomSkeleton } from "@/components/header-bottom";

export default async function Default() {
  return (
    <header className="flex flex-col pb-[20px]">
      <Suspense fallback={<HeaderTopSkeleton />}>
        {(async function () {
            const data = await getTrendingForSite();
            return (
              <HeaderTop title="Recent News" data={data?.data} />
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
