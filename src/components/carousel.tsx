"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ slides }: any) {
 
  let [current, setCurrent] = useState(0);
  let [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return; 

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides?.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [current, autoPlay]);

  return (
    <div className="flex flex-1">
      <div
        className={`flex transition ease-out duration-1000`}
        style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${slides?.length * 100}%`,
          }}
      >
        {slides?.map((slide: any) => (
          <div key={slide.id} className="w-full flex-shrink-0 flex">
            <div className="p-4 text-[14px] line-clamp-1 cursor-pointer">
              <Link href={slide.slug}>{slide.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}