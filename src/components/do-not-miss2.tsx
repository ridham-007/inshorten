"use client";
import { Article } from "@/lib/type-identifiers";
import React, { useEffect } from "react";
import featureImage from "../../public/preview.jpg";
import Link from "next/link";
export default function DoNotMiss2({articles}: any) {
  const handleWindowSizeChange = () => {
    if (!!window) {
      for(let i=0;i<3;i++){
        createTitleChild(`parent-${i}`, articles[i]?.title);
      }
    }
  };


  const createDummyRef = () => {
    let div = document.createElement("div");
    div?.classList.add("bg-white");
    div?.classList.add("text-black");
    div?.classList.add("text-[20px]");
    div?.classList.add("px-1");
    div?.classList.add("border-1");
    div?.classList.add("border-b-[3px]");
    div?.classList.add("border-black");
    return div;
  };

  const createTitleChild = (key: string, title: string) => {
    const parent = document.getElementById(key);
    while (parent?.hasChildNodes()) {
      parent?.lastChild && parent?.removeChild(parent.lastChild);
    }
    const content = title;
    const words = `${content}`.split(" ");
    const innerWidth = window?.innerWidth;
    let scrollWidth = parent?.scrollWidth ?? 0;
    if(scrollWidth > innerWidth - 60){
      scrollWidth = innerWidth - 60;
    }
    let currentLine = createDummyRef();
    parent?.appendChild(currentLine);
    let childCount = 1;

    words?.forEach((c) => {
      if (childCount < 2) {
        const refTxt = currentLine.innerText;
        let testLine = (currentLine.innerText ?? "") + c + " ";
        currentLine.innerText = `${testLine}`;
        if (currentLine.scrollWidth > scrollWidth) {
          childCount++;
          currentLine.innerText = refTxt;
          currentLine = createDummyRef();
          currentLine?.classList.add("border-l-[1px]");
          currentLine?.classList.add("border-r-[1px]");
          currentLine?.classList.add("mt-[-1px]");
          currentLine.innerHTML = c;
          parent?.appendChild(currentLine);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row w-full">
      {articles?.map((curr: any, index: number) => {
          return (
            <Link
              href={curr.slug}
              target="_blank"
              key={index}
              className={`flex flex-col basis-[100%] lg:basis-[33.33%] border-slate-600 p-3 ${
                index != 2
                  ? "sm:border-r-[1px] border-b-[1px] sm:border-b-0"
                  : ""
              }`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  location.href = curr.slug;
                }
              }}
            >
              <div
                className="flex h-[280px] w-full bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${curr.featureImage || featureImage.src})` }}
              ></div>
              <div
                className="flex flex-col w-full px-1 justify-center items-center whitespace-pre mt-[-15px] z-10"
                id={`parent-${index.toString()}`}
              ></div>
              <div className="my-[7px] uppercase text-own_red_text_color_primary font-semibold text-center">
                | {curr?.category?.name} |
              </div>
              <div className="my-[5px] w-[100%] line-clamp-3 text-ellipsis overflow-hidden">
                  {curr?.description}
              </div>
            </Link>
          );
        })}
    </div>
  );
}
