"use client";
import Heading from "./common/Heading";
import { FAQ_LIST } from "@/utils/helper";
import { MinusIcon, PlusIcon } from "@/utils/icons";
import React, { useState } from "react";

const Faqs = () => {
  const [open, setOpen] = useState(0);
  const FaqHandler = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div id="faq">
      <Heading
        myClass="pb-[89px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6 max-xl:px-4 max-w-[1140px] mx-auto pt-[88px] max-md:pt-16 max-sm:pt-12"
        text="Faqs"
      />
      <div className="border-y-2 border-black px-4">
        <div className="border-x-2 border-black max-w-[1140px] mx-auto">
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className={`w-full border-black px-[30px] pb-[26px] max-lg:px-6 max-lg:pb-5 max-md:pb-3 max-md:px-4 ${i === 6 ? "border-0" : "border-b-2"
                }`}
            >
              <div
                onClick={() => FaqHandler(i)}
                className="cursor-pointer w-full flex justify-between items-center pt-8 max-lg:pb-4 max-md:pt-5 max-md:pb-2 gap-4"
              >
                <p className="text-2xl font-semibold leading-[100%] max-lg:text-xl max-md:text-lg">
                  {obj}
                </p>
                <span
                  className={` duration-500 ease-linear ${open === i ? "rotate-180" : "rotate-90"
                    }`}
                >
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </div>
              <div
                className={` overflow-hidden max-xl:overflow-y-auto duration-500 ease-linear pt-4 max-lg:pt-0 ${open === i ? "max-h-[161px]" : "max-h-0"
                  }`}
              >
                <p className="text-base leading-[150%] max-md:text-sm">
                  NFT stands for “Non-fungible token,” which means that it’s a
                  unique, digital item with blockchain-managed ownership that
                  users can buy, own, and trade. Some NFT’s fundamental function
                  is to be digital art. But they can also offer additional
                  benefits like exclusive access to websites, event tickets,
                  game items, and ownership records for physical objects. Think
                  of it as a unique piece of art that can also work as a
                  “members-only” card. Hustlin' Hardos works like this
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center pt-8 pb-6 text-base font-normal leading-[100%] max-xl:pt-6 max-lg:py-4">
        © Hustlin' Hardos {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Faqs;