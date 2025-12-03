import { Mail } from "lucide-react";
import React, { useEffect } from "react";

export default function Card({
    Component = <Mail />,
    title = "example",
    desctiption = "Example description",
}) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in")
                }
                // else {
                //     entry.target.classList.remove("fade-in")
                // }
            })
        })

        const element = document.querySelectorAll("article, .bar")
        element.forEach((el) => {
            observer.observe(el)
        })

        return () => {
            element.forEach((el) => {
                observer.disconnect(el)
            })
        }
    }, [])
    return (
        <article className="border opacity-0 hover:scale-102 transition-all duration-300 border-gray-200 shadow-lg rounded-lg p-5 min-h-50">
            {Component}
            <h1 className="poppins-semibold text-xl mt-2">{title}</h1>
            <p className="text-gray-600 mt-2">{desctiption}</p>
        </article>
    );
}
