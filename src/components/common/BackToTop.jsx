"use client";
import { TopArrow } from "@/utils/icons";
import React, { useEffect, useState } from "react";
const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false);
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const windowScroll = () => {
        setScrollToTop(window.scrollY > 180);
    };
    useEffect(() => {
        window.addEventListener("scroll", windowScroll);
    });
    return (
        <>
            {scrollTop && (
                <button
                    onClick={scrollHandler}
                    className="fixed right-[10px] bottom-[10px] z-30 cursor-pointer flex items-center justify-center hover:animate-bounce border size-10 rounded-full max-md:size-8"
                >
                    <TopArrow/>
                </button>
            )}
        </>
    );
};

export default BackToTop;