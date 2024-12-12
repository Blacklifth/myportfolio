import { statsData } from "@/constants";
import React from "react";

const Statistics = () => {
    return (
        <div className="flex flex-col items-center md:flex-row gap-2.5 md:gap-5">
            {statsData?.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start"
                >
                    <p className="text-4xl lg:text-6xl font-extrabold text-white ">
                        {item?.num}{" "}
                    </p>
                    <p className="leading-snug text-sm">{item?.title} </p>
                </div>
            ))}
        </div>
    );
};

export default Statistics;
