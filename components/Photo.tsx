import React from "react";
import Hero from "@/public/images/Hero.svg";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mix-blend-lighten overflow-hidden rounded-full ">
                        <Image
                            src={Hero}
                            alt="hero Image"
                            width={400}
                            height={400}
                            quality={100}
                            priority
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photo;
