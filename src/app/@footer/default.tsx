"use client";

import { RiFacebookFill } from "react-icons/ri";
import Link from "next/link";
// import { GetAllCategories } from "./actions";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import {
  FaInstagram,
  FaRegCopyright,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { getHeaderCategories } from "../_actions/category";

const footerLinks = [
  {
    name: "ABOUT US",
    url: "/about-us",
  },
  {
    name: "CONTACT US",
    url: "/contact-us",
  },
  {
    name: "TERMS & CONDITIONS",
    url: "/terms-conditions",
  },
  {
    name: "PRIVACY POLICY",
    url: "/privacy-policy",
  },
  {
    name: "DISCLAIMER",
    url: "/disclaimer",
  },
];
const socialLink = [
  {
    icon: (
      <RiFacebookFill
        color="white"
        size={40}
        className="bg-[#36528c] p-2 rounded-full"
      />
    ),
    href: "#",
  },
  {
    icon: (
      <FaInstagram
        color="white"
        size={40}
        className="bg-gradient-to-br from-[#F1D424] via-[#F42E7E] to-[#8A1BB5] p-2 rounded-full"
      />
    ),
    href: "#",
  },
  {
    icon: (
      <FaXTwitter
        color="white"
        size={40}
        className="bg-[#2c313c] p-2 rounded-full"
      />
    ),
    href: "#",
  },
  {
    icon: (
      <FaYoutube
        color="white"
        size={40}
        className="bg-[#E51212] p-2 rounded-full"
      />
    ),
    href: "#",
  },
];
export default function Footer() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await getHeaderCategories();
    if (response?.data) {
      setCategories(response?.data);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <footer className="flex flex-col h-auto w-full bg-foreground py-5 px-5 md:px-10 mt-5 bg-[#202028]">
      <div className="flex">
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (e.ctrlKey || e.metaKey) {
              window.open("/", "_blank");
            } else {
              location.href = "/";
            }
          }}
        >
          <Logo place="footer"></Logo>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="flex flex-col w-full lg:w-[33%] px-4">
          <div className="mb-5 text-[14px] md:text-[16px] text-white">
            The inshorten.com team comprises of experts in different fields, all
            with the same primary focus: helping our clients generate greater
            business by use of online services.
          </div>
        </div>
        <div className="w-full lg:w-[33%] px-4 ">
          <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row">
            <div className="flex w-full flex-col">
              <div className="text-[18px] font-medium mb-6 text-white">
                About us
              </div>
              {footerLinks?.map((cur, index) => (
                <div
                  key={index}
                  className="text-[12px] md:text-[13px] my-1 text-white"
                >
                  <div
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      if (e.ctrlKey || e.metaKey) {
                        window.open(cur?.url, "_blank");
                      } else {
                        location.href = cur?.url;
                      }
                    }}
                    className="footer-item cursor-pointer"
                  >
                    {cur?.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col sm:pl-4">
              <div className="text-[18px] font-medium mb-6 text-white">
                Popular Category
              </div>
              {categories?.map((cur: any, index: any) => (
                <div
                  key={index}
                  className="text-[14px] md:text-[16px] py-[2px] text-white"
                >
                  <div
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      if (e.ctrlKey || e.metaKey) {
                        window.open(cur?.slug, "_blank");
                      } else {
                        location.href = cur?.slug;
                      }
                    }}
                    className="footer-item cursor-pointer"
                  >
                    {cur?.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-[33%] px-4 ">
          <div className="font-medium mt-5 text-white">
            Subscribe to Our Newsletter
          </div>
          <div className="flex w-full bg-[#403f45f9] rounded-3xl mt-4">
            <input
              type="text"
              placeholder="contact@inshorten.com"
              className="w-full py-3 bg-transparent text-white pl-5 text-sm sm:text-[16px] focus:outline-none"
            />
            <Link
              href="mailto:contact@inshorten.com"
              className="flex items-center text-sm sm:text-[16px] bg-[#1867dc] text-nowrap text-white font-medium px-3 sm:px-12 lg:px-5 rounded-3xl m-1 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex w-full gap-4 mt-5">
            {socialLink.map((socialLink: any, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-center items-center w-[35px] h-[35px] transition duration-300 ease-in-out rounded-full bg-[${socialLink.bgColor}] lg:w-[40px] lg:h-[40px] hover:scale-110`}
                >
                  <Link href={socialLink.href} target="blank">
                    {socialLink.icon}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-300 mt-8 pt-5 items-center text-white">
        <FaRegCopyright size={10} className="mx-1" /> 2024 by Inshorten. All
        Right Reserved.
      </div>
    </footer>
  );
}
