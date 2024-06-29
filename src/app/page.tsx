import DynamicNewsWall, { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import { Suspense } from "react";
import { getPopularNews, getRecentNews } from "./_actions/article";

export default async function Home() {
  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%]">
        <div>Home Page</div>
      </section>
      <section className="flex flex-col gap-2 flex-1 basis-[100%] sm:basis-[28%] px-2">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
        {(async function () {
            const data = await getRecentNews();
            return (
              <DynamicNewsWall title="Recent News" news={data?.data} />
            );
          })()}
        </Suspense>
        <Suspense fallback={<DynamicNewsWallSkeleton label="Popular" />}>
        {(async function () {
            const data = await getPopularNews();
            return (
              <DynamicNewsWall title="Popular News" news={data?.data} />
            );
          })()}
        </Suspense>
      </section>
    </main>
  );
}

