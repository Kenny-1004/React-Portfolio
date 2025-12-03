import React from "react";
import { icons } from "../data/images.js";

export default function Skills({skillsRef}) {
    return (
        <section ref={skillsRef} className="w-7/8 mx-auto max-h-max py-30">
            <h1 className="text-3xl mb-20 poppins-semibold text-center">My Skills & Technologies</h1>
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {icons.map((value, index) => (
                    <div className="p-10 hover:scale-103 transition-all duration-300 shadow-2xl grow basis-70 min-h-80 rounded-md">
                        <img key={index} style={{
                           animationDuration: "1s",
                            animationDelay: `${index * 0.2}s`
                        }} className={`size-20 float-icon ${value.name === "MongoDB" && "rounded-full"}`} src={value.icon} alt="" />
                        <h1 className="poppins-semibold mt-5 text-x ">{value.name}</h1>
                        <p className="text-gray-600 mt-3">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
