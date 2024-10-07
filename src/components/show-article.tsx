'use client'
import React, { useEffect } from 'react'
import parserReact from 'html-react-parser';
import parser from './parser.js';

const ShowArticle = ({ article }: any) => {
  const {parse, parseOne} = parser();
  const isJsonContent = !!article?.jsonContent;
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (new Date(date))?.toLocaleDateString("en-US", options);
  }

  useEffect(()=>{
    document.querySelectorAll('div').forEach(function(element) {
      if ((element?.textContent?? "").trim().slice(-1) ==='?') {
        element.style.fontWeight = '700'; // Example action
      }
    });
    document.querySelectorAll('p').forEach(function(element) {
      if ((element?.textContent?? "").trim().slice(-1) ==='?') {
        element.style.fontWeight = '700'; // Example action
      }
    });
    document.querySelectorAll('b').forEach(function(element) {
      if ((element?.textContent?? "").trim().slice(-1) ==='?') {
        element.style.fontWeight = '700'; // Example action
      }
    });
  },[])

  return (
    <div className={`${isJsonContent ? "article-container" : "article-container"} bg-own_bg_secondary text-own_text_primary`}>
      <div className="flex flex-col pb-2 mb-2 border-b border-own_border_gray_color_primary">
        <h2 className="font-semibold py-1">{article?.title}</h2>
        <div className="flex w-[100%] justify-between gap-[10px] pb-0 items-center">
          <div className="flex text-sm font-normal news gap-2 whitespace-nowrap py-1 text-own_gray_text_color_primary">
            {formatDate(article?.updatedAt)}
          </div>
          <div className="flex gap-2"></div>
        </div>
      </div>
      {isJsonContent
        ? parserReact(parse({ blocks: article?.jsonContent?.blocks }))
        : article?.content && parserReact(article.content)
      }
    </div>
  );
}

export default ShowArticle

export function ArticleSkeleton() {
  return (
    <div className='article-container !px-5'>
      <div className="flex w-full flex-col gap-2">
        <div className="w-[160px] h-[35px] bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
        {Array(12)
          .fill(null)
          .map((item, index) => {
            return (
              <div key={`CategoryWiseTopNewsSkeleton1-${index}`} className="flex flex-col basis-[98%] gap-2 w-[100%] overflow-hidden mt-[10px]">
                <div className="w-[50%] h-[35px] bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                <div className="flex flex-col gap-2 px-[12px] py-[2px]">
                  <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-own_skeleton_color_primary animate-pulse rounded-sm"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
