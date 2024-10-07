"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMiddle() {
  const pathname = usePathname();
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Contact Us", link: "/contact-us" },
    { text: "About Us", link: "/about-us" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const handleChange = (index: any) => {
    setSelectedItem(index);
  };
  const [logoPlace, setLogoPlace] = useState("header");
  useEffect(() => {
    const saveTheme = localStorage.getItem("data-theme");
    if (saveTheme === "dark") {
      setLogoPlace("footer");
    } else {
      setLogoPlace("header");
    }
  }, []);
  return (
    <section className="flex flex-wrap w-full px-[20px] py-[5px] justify-between items-center gap-[15px]">
      <div className="block w-[200px] h-[50px] relative">
        <Link
          href="/"
          target="_blank"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey) {
              e.preventDefault();
              location.href = "/";
            }
          }}
        >
          <Logo place={logoPlace}></Logo>
        </Link>
      </div>
      <div className="flex gap-x-6">
        {navItems.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              onClick={() => handleChange(index)}
            >
              <p
                className={`nav-item ${
                  pathname === item.link
                    ? "border-b-2 border-own_blue_color_primary font-bold text-own_blue_color_primary"
                    : "hover:text-own_blue_color_primary hover:border-b-2 hover:border-own_blue_color_primary"
                }`}
              >
                {item.text}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
