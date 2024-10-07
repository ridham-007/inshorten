"use client";
import { Article } from "@/lib/type-identifiers";
import ImageWithFallback from "./image-with-fallback";
import parser from 'html-react-parser';
import React from "react";
import Link from "next/link";
export default function DoNotMiss1(props: Article) {
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (new Date(date))?.toLocaleDateString("en-US", options);
  }

  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:p-[20px] gap-3  rounded-xl">
      <div className="flex basis-[50%] flex-col gap-5 ">
        <div className="flex  text-[30px] font-bold">{props?.title}</div>
        <div className="flex flex-row gap-3 text-own_block_text_color_primary">
          <div className="">{props?.category?.name}</div>
          <div className="">{formatDate(props?.updatedAt ?? "")}</div>
        </div>
        <div className="two-column-container">
          {parser(props.content ?? "", {
            replace(domNode: any) {
              if (domNode?.name === "img") {
                return <span></span>;
              }
            },
          })}
        </div>
        <Link
          target="_blank"
          href={`${props?.slug}`}
          className="flex px-3"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey) {
              e.preventDefault();
              location.href = props?.slug;
            }
          }}
        >
          <button className="flex w-[180px] p-[10px] rounded bg-orange-300 font-bold">
            Continue reading...
          </button>
        </Link>
      </div>
      <div className="flex basis-[50%]">
        <div className="block w-full h-full relative rounded-md overflow-hidden">
          <ImageWithFallback
            alt={`CategoryWiseTopNews-alt`}
            src={props?.featureImage}
          ></ImageWithFallback>
        </div>
      </div>
    </div>
  );
}
