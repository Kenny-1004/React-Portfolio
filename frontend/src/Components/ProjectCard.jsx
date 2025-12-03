import { Github, SquareArrowOutUpRight } from "lucide-react";
import React from "react";

export default function ProjectCard({ title, description }) {
    return (
        <article className="bar opacity-0 shadow-2xl hover:scale-102 transition-all duration-300 rounded-md min-h-120 basis-90 grow z-10">
            <div className="w-full rounded-t-md bg-gray-400 min-h-50 flex items-center justify-center">
                <h1 className="text-2xl text-white font-semibold">{title.slice(0, 1)}</h1>
            </div>
            <div className="p-5 z-10">
                <h1 className="font-semibold text-lg">{title}</h1>
                <p className="mt-3">{description}</p>
            </div>
            <div className="px-5 pb-5 z-10 flex gap-2 flex-wrap">
                <button className="rounded-full bg-gray-200 text-sm py-1 px-4">
                    React
                </button>
                <button className="rounded-full bg-gray-200 text-sm py-1 px-4">
                    Node.js
                </button>
                <button className="rounded-full bg-gray-200 text-sm py-1 px-4">
                    Express
                </button>
                <button className="rounded-full bg-gray-200 text-sm py-1 px-4">
                    MongoDB
                </button>
            </div>
            <div className="px-5 pb-5 flex items-center gap-2">
                <button className="rounded-full bg-gray-100 text-sm py-1 px-4 flex items-center gap-2">
                    <Github className="size-3" /> <span>Code</span>
                </button>
                <button className="rounded-full bg-gray-100 text-sm py-1 px-4 flex items-center gap-2">
                    <SquareArrowOutUpRight className="size-3" />{" "}
                    <span>Demo</span>
                </button>
            </div>
        </article>
    );
}
