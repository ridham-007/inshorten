"use client";

import { useRouter } from "next/navigation";
import ImageWithFallback from "./image-with-fallback";
import Link from "next/link";
import CustomButton from "@/components/ui/customButton";
import { useEffect, useState } from "react";
import { getDataBasedOnSlug } from "@/app/_actions/article";
import Image from "next/image";
const Size = 12;

export default function CategoryWiseTopNews({
  articles,
  category,
  total,
}: any) {
  const [articleList, setArticles] = useState<any[]>(articles ?? []);
  const [isListCompleted, setListCompleted] = useState<boolean>(
    total === articleList.length || false
  );
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleArticleOpen = (article: any) => {
    router.push(`/${article?.slug}`);
  };

  const fetchNewBatch = async () => {
    setLoading(true);
    const data = await getDataBasedOnSlug(
      category,
      Math.floor(articleList.length / Size) + 1,
      Size
    );
    setArticles((previous: any) => [...previous, ...data?.data?.article]);
    setLoading(false);
  };

  useEffect(() => {
    setListCompleted(total === articleList.length || false);
  }, [articleList]);

  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <div className="flex w-full flex-wrap justify-start gap-2">
        {articleList?.map((item: any, index: any) => {
          return (
            <Link
              href={item?.slug}
              target="_blank"
              key={`CategoryWiseTopNews-${index}`}
              className="flex flex-col flex-1 lg:basis-[32%] sm:basis-[49%] basis-[100%] lg:max-w-[32%] sm:max-w-[49%] cursor-pointer border-2 rounded-lg"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  location.href = item?.slug;
                }
              }}
            >
              <div className="flex flex-col h-auto w-full ">
                <div className="flex flex-col w-full h-[250px] sm:h-[220px] font-semibold">
                  <ImageWithFallback
                    alt={`CategoryWiseTopNews-${index}-alt`}
                    src={item?.featureImage}
                  ></ImageWithFallback>
                </div>
                <div className="flex flex-col gap-5 p-3">
                  <div className="text-[18px] font-bold hover:text-own_blue_color_primary">
                    {item?.title}
                  </div>
                  {item?.description && (
                    <div className="text-[14px] text-own_text_gray_color_primary font-light mb-5">
                      {truncateText(item?.description, 50)}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex p-3 mt-auto gap-1">
                <Image
                  src="/favicon.ico"
                  width={25}
                  height={25}
                  alt="Picture of the icon"
                  className="h-[25px] w-[25px]"
                />
                <span className="text-[13px] text-own_gray_text_color_primary font-semibold self-center">
                  InShorten
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      {!isListCompleted && (
        <div className="flex w-full justify-center my-4">
          <CustomButton
            label={"Load more"}
            callback={fetchNewBatch}
            interactingAPI={isLoading}
          />
        </div>
      )}
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
              className="flex flex-col flex-1 lg:basis-[32%] sm:basis-[49%] basis-[100%] lg:max-w-[32%] sm:max-w-[49%] cursor-pointer border-2  rounded-lg"
            >
              <div className="flex flex-col">
                <div className="flex flex-col font-semibold">
                  <ImageWithFallback
                    alt={`CategoryWiseTopNews-${index}-alt`}
                    src={item?.image}
                  ></ImageWithFallback>
                </div>
                <div className="flex flex-col gap-3 p-3">
                  <div className="text-[18px] font-bold hover:text-own_blue_hover_primary">
                    <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                  </div>
                  <div className="text-[14px] text-gray-600 font-light mb-5">
                    <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                    <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                    <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                  </div>
                </div>
                <div className="flex p-3 mt-auto gap-1">
                  <ImageWithFallback
                    alt={`CategoryWiseTopNews-${index}-alt`}
                    src={item?.image}
                  ></ImageWithFallback>
                  <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
