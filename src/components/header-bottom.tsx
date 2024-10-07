"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

export default function HeaderBottom({ data }: any) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const highlightSelectedTab = (data: any) => {
    return `${pathname === `/${data}` ? "!bg-black !text-white" : null}`;
  };
  return (
    <nav>
      <div className="max-w-7xl px-6 lg:px-0">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md bg-own_bg_header_bottom_button_secondary hover:text-own_text_header_bottom_button_primary hover:bg-own_bg_header_bottom_button_secondary focus:outline-none focus:bg-own_bg_header_bottom_button_secondary focus:text-own_text_header_bottom_button_primary"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <RxHamburgerMenu className="block h-6 w-6 bg-own_bg_header_bottom_button_secondary text-own_text_header_bottom_button_primary" />
              ) : (
                <IoCloseSharp className="block h-6 w-6 bg-own_bg_header_bottom_button_secondary  text-own_text_header_bottom_button_primary" />
              )}
            </button>
          </div>

          {/* Desktop menu items */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {data?.map((item: any) => (
                  <Link
                    key={item.id}
                    href={`/${item.slug}`}
                    target="_blank"
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        location.href = item.slug;
                      }
                    }}
                    passHref
                  >
                    <div
                      className={`${highlightSelectedTab(
                        item.slug
                      )} bg-own_bg_header_bottom_button_secondary text-own_text_header_bottom_button_primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on menu state */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {data?.map((item: any) => (
            <Link key={item.id} href={`/${item.slug}`} passHref>
              <div className=" hover:bg-own_bg_header_bottom_button_secondary hover:text-own_text_header_bottom_button_primary focus:text-own_text_header_bottom_button_primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function HeaderBottomSkeleton() {
  return (
    <section className="flex w-[100%] h-[45px] items-center px-3">
      <div className="hidden items-center w-[60%] h-[30px] gap-[10px] rounded-full md:flex">
        <div className="flex w-[10%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
      </div>
      <div className="flex w-[40%] justify-end items-center h-[30px] gap-[5px] bg-white rounded-full">
        <div className="flex w-[30%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
        <div className="flex w-[30%] h-[25px] bg-own_skeleton_color_primary rounded-full"></div>
      </div>
    </section>
  );
}
