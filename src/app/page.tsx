import DynamicNewsWall, { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import { Suspense } from "react";
import { getPopularNews, getRecentArticleInCategory, getRecentNews } from "./_actions/article";
import DoNotMiss1 from "@/components/do-not-miss1";
import DoNotMiss3 from "@/components/do-not-miss3";
import DoNotMiss2 from "@/components/do-not-miss2";
import SlickSlider from "@/components/slider";

export default async function Home() {

  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%]">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          {(async function () {
            const articleResponse = await getRecentNews(1);
            return <DoNotMiss3 {...articleResponse?.data[0]} />;
          })()}
        </Suspense>
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          {(async function () {
            const articleResponse = await getRecentNews(2, true);
            return <DoNotMiss1 {...articleResponse?.data[1]} />;
          })()}
        </Suspense>
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          {(async function () {
            const articleResponse = await getRecentArticleInCategory(3);
            return <DoNotMiss2 articles={articleResponse?.data} />;
          })()}
        </Suspense>
        {(async function () {
            const data = await getRecentNews();
            return (
              <SlickSlider news={data?.data}/>
            );
          })()}
      </section>
      <section className="flex flex-col gap-2 flex-1 basis-[100%] sm:basis-[28%] px-2">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          {(async function () {
            const data = await getRecentNews();
            return <DynamicNewsWall title="Recent News" news={data?.data} />;
          })()}
        </Suspense>
        <Suspense fallback={<DynamicNewsWallSkeleton label="Popular" />}>
          {(async function () {
            const data = await getPopularNews();
            return <DynamicNewsWall title="Popular News" news={data?.data} />;
          })()}
        </Suspense>
      </section>
    </main>
  );
}

