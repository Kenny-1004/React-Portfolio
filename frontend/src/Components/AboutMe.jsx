import {
    Code,
    Facebook,
    Github,
    Mail,
    Palette,
    Smartphone,
    SquareArrowOutUpRight,
} from "lucide-react";
import React from "react";
import Card from "./Card.jsx";

export default function AboutMe({aboutRef}) {
    const cards = [
        {
            icon: <Code className="size-10" />,
            title: "Clean Code",
            description:
                "Writing maintainable, scalable code following best practices",
        },
        {
            icon: <Palette className="size-10" />,
            title: "UI/UX Design",
            description:
                "Creating intuitive interfaces with attention to detail",
        },
        {
            icon: <Smartphone className="size-10" />,
            title: "UI/UX Design",
            description:
                "Creating intuitive interfaces with attention to detail",
        },
        {
            icon: <SquareArrowOutUpRight className="size-10" />,
            title: "UI/UX Design",
            description:
                "Creating intuitive interfaces with attention to detail",
        },
    ];

    return (
        <section ref={aboutRef} className="w-full py-30 max-h-max flex flex-col items-center justify-center ">
            <h1 className="text-center font-bold text-4xl">About Me</h1>
            <p className="w-7/8 mx-auto mt-8 text-gray-600">
                Hello! I’m Kent Visorro, a web developer dedicated to creating
                modern, responsive, and user-friendly digital experiences. I
                specialize in JavaScript, React, and Tailwind CSS, and I’m
                constantly learning and improving my skills to become a
                versatile full-stack developer.
            </p>
            <p className="w-7/8 mx-auto mt-7 text-gray-600">
                I enjoy solving problems, crafting smooth user interfaces, and
                turning creative ideas into real projects. My goal is to build
                applications that not only work perfectly but also delight
                users. Every project I take on is an opportunity to grow,
                explore new technologies, and contribute meaningful solutions.
            </p>
            <div className="flex items-center w-7/8 mx-auto gap-5 mt-5">
                <Github />
                <Facebook />
                <Mail />
            </div>
            <div className="w-7/8 mx-auto mt-5 grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {cards.map((value, index) => (
                    <Card
                        key={`cards${index}`}
                        Component={value.icon}
                        title={value.title}
                        desctiption={value.description}
                    />
                ))}
            </div>
        </section>
    );
}
