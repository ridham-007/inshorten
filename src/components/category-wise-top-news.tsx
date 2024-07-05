"use client";

import { useRouter } from "next/navigation";
import ImageWithFallback from "./image-with-fallback";
import Link from "next/link";
import CustomButton from "@/components/ui/customButton";
import { useEffect, useState } from "react";
import { getDataBasedOnSlug } from "@/app/_actions/article";

const Size = 12;

export default function CategoryWiseTopNews({ articles, category, total }: any) {
  const [articleList, setArticles] = useState<any[]>(articles ?? []); 
  const [isListCompleted, setListCompleted] = useState<boolean>(total === articleList.length ||false)
  const [isLoading, setLoading] = useState<boolean>(false); 
  const router = useRouter();
  const handleArticleOpen = (article: any) => {
    router.push(`/${article?.slug}`);
  };

  const fetchNewBatch = async () => {
    setLoading(true)
    const data = await getDataBasedOnSlug(category, Math.floor(articleList.length/Size) + 1, Size);
    setArticles((previous: any) => [...previous, ...data?.data?.article]);
    setLoading(false)
  }

  useEffect(()=>{
    setListCompleted(total === articleList.length ||false);
  },[articleList])

  return (
    <>
    <div className="flex w-full flex-wrap justify-start gap-2 h-fit">
      {articleList?.map((item: any, index: any) => {
        return (
          <Link
            href={item?.slug}
            target="_blank"
            key={`CategoryWiseTopNews-${index}`}
            className="flex flex-col flex-1 lg:basis-[32%] sm:basis-[49%] basis-[100%] lg:max-w-[32%] sm:max-w-[49%] cursor-pointer p-1 rounded-sm"
            // onClick={() => handleArticleOpen(item)}
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                location.href = item?.slug;
              }
            }}
          >
            <div className="flex flex-col basis-[90%] flex-1 px-2 py-3  space-y-1.5 p-6">
              <div className="flex basis-[70%] flex-1 flex-col font-semibold leading-none tracking-div">
                <div className="block w-full h-full relative">
                  <ImageWithFallback
                    alt={`CategoryWiseTopNews-${index}-alt`}
                    src={item?.featureImage}
                  ></ImageWithFallback>
                </div>
              </div>
              {item?.description && (
                <div className="w-[100%] text-ellipsis line-clamp-3 text-sm text-muted-foreground">
                  {item?.description}
                </div>
              )}
            </div>
            <div className="flex text-[16px] text-foreground font-medium overflow-hidden px-2 pb-2">
              <div className="line-clamp-2 text-sm text-muted-foreground">
                {item?.title}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
    {!isListCompleted && <div className="flex w-full justify-center my-4">
      <CustomButton label={"Load more"} callback={fetchNewBatch} interactingAPI={isLoading} />
    </div>}
    </>
  );
}

export function CategoryWiseTopNewsSkeleton() {
  return (
    <div className="flex w-full flex-wrap justify-start gap-2">
      {Array(10)
        .fill(null)
        .map((item, index) => {
          return (
            <div
              key={`CategoryWiseTopNewsSkeleton-${index}`}
              className="flex flex-col lg:basis-[32%] sm:basis-[49%] basis-[100%] p-1 gap-2 rounded-sm border bg-card text-card-foreground shadow"
            >
              <div className="flex flex-col basis-[90%] px-2 py-3 space-y-1.5 p-6">
                <div className="flex basis-[70%] flex-col font-semibold leading-none tracking-div">
                  <div className="block w-full h-full relative">
                    <ImageWithFallback
                      alt={`CategoryWiseTopNews-${index}-alt`}
                      src={item?.image}
                    ></ImageWithFallback>
                  </div>
                </div>
                <div className="flex flex-col gap-2 basis-[30%] w-[100%] overflow-hidden py-[2px]">
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                </div>
              </div>
              <div className="flex basis-[10%] px-2">
                <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
