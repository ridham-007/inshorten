"use client";
import { Article } from "@/lib/type-identifiers";
import React from "react";
import featureImage from "../../public/preview.jpg";
import Link from "next/link";
export default function DoNotMiss3(props: Article) {
  return (
    <Link
      target="_blank"
      href={`${props?.slug}`}
      className="flex px-2"
      onClick={(e) => {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          location.href = props?.slug;
        }
      }}
    >
      <div
        className="flex flex-col w-full h-[400px] sm:h-[500px] rounded-xl bg-cover bg-center bg-no-repeat px-4 py-4"
        style={{
          backgroundImage: `url(${props.featureImage || featureImage.src})`,
        }}
      >
        <div className="flex flex-1"></div>
        <button
          type="button"
          className="bg-own_red_text_color_primary  text-own_white_text_color_primary px-4 py-1 text-[18px]  rounded-md w-fit"
        >
          {props?.category?.name}
        </button>
        <div className="py-[5px] text-[18px] sm:text-[22px] font-bold text-own_white_text_color_primary line-clamp-2 text-ellipsis overflow-hidden">
          {props?.title}
        </div>
        <div className="py-[5px] w-[100%] line-clamp-2 text-ellipsis overflow-hidden text-own_white_text_color_primary">
          {props?.description}
        </div>
      </div>
    </Link>
  );
}
