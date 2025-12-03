import { Mail } from "lucide-react";
import React from "react";

export default function Card({
    Component = <Mail />,
    title = "example",
    desctiption = "Example description",
}) {
    return (
        <article className="border hover:scale-102 transition-all duration-300 border-gray-200 shadow-lg rounded-lg p-5 min-h-50">
            {Component}
            <h1 className="poppins-semibold text-xl mt-2">{title}</h1>
            <p className="text-gray-600 mt-2">{desctiption}</p>
        </article>
    );
}
