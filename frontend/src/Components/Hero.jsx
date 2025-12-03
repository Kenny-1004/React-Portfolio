import { Facebook, Github, Mail, MoveDown } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Hero({scrollToAbout, heroRef, scrollToProjects, scrollToContacts}) {
    const words = [
        "Software developer.",
        "Web developer.",
        "Full-stack builder.",
        "Problem solver.",
        "UI/UX enthusiast.",
        "Fast learner.",
        "JavaScript lover.",
        "React developer.",
        "Modern website creator.",
        "Passionate coder.",
    ];

    const [index, setIndex] = useState(0);
    const [substring, setSubstring] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [speed, setSpeed] = useState(120);

    useEffect(() => {
        if (substring >= words[index].length && !deleting) {
            const pause = setTimeout(() => setDeleting(true), 2000);
            return () => clearTimeout(pause);
        }
        const timeout = setTimeout(() => {
            const current = words[index];
            if (!deleting && substring < current.length) {
                setSubstring((prev) => prev + 1);
                setSpeed(120);
            } else if (deleting && substring >= 0) {
                setSubstring((prev) => prev - 1);
                setSpeed(60);
            } else if (deleting && substring <= 0) {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
                console.log(6 % words.length);
                setSpeed(120);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [substring, deleting, index]);
    return (
        <section ref={heroRef} className="text-center w-7/8 mx-auto mt-20 flex flex-col items-center justify-center max-h-max py-30">
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full">
                👋 Hello I am
            </button>
            <h1 className="text-[6rem] text-blue-950 font-semibold name">
                Kent Nicholas
            </h1>
            <p className="text-3xl font-semibold i-am">
                I am a{" "}
                <span className="text-blue-600 underline underline-offset-10">
                    {words[index].substring(0, substring)}
                </span>
            </p>
            <p className="w-3/4 mx-auto mt-10 text-lg text-gray-600 description">
                I’m a web developer who loves turning ideas into clean,
                functional, and modern digital experiences. I build responsive
                websites using JavaScript, React, and Tailwind, and I’m always
                improving my skills as I grow in full-stack development. I enjoy
                solving problems, creating smooth UI, and bringing concepts to
                life through code.
            </p>
            <div className="font-semibold flex mt-5 items-center justify-center gap-5 max-h-max w-full mx-auto button-container">
                <button onClick={scrollToProjects} className="bg-black text-white hover:scale-105 buttons py-2 px-5 rounded-md hover:bg-blue-600 transition-all duration-300">
                    View My Work
                </button>
                <button onClick={scrollToContacts} className="hover:scale-105 border py-2 px-5 rounded-md buttons hover:text-white hover:bg-blue-600 transition-all duration-300 ">
                    Let's Connect!
                </button>
            </div>
            <div className="mx-auto flex gap-10 max-w-max max-h-max mt-5">
                <button className="shadow-link transition-all duration-300 hover:scale-110 bg-white p-4 rounded-full">
                    <Github />
                </button>
                <button className="shadow-link transition-all duration-300 hover:scale-110 bg-white p-4 rounded-full">
                    <Facebook />
                </button>
                <button className="shadow-link transition-all duration-300 hover:scale-110 bg-white p-4 rounded-full">
                    <Mail />
                </button>
            </div>
            <div className="flex items-center gap-32 hero-footer max-w-max max-h-max mx-auto mt-10">
                <div>
                    <h1 className="font-bold text-2xl">1+</h1>
                    <p className="text-gray-500">Year(s) Experience</p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl">20+</h1>
                    <p className="text-gray-500">Projects Completed</p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl">100%</h1>
                    <p className="text-gray-500">Client Satisfaction</p>
                </div>
            </div>

            <div className="w-full down">
                <div onClick={scrollToAbout} className="max-w-max flex flex-col items-center justify-center px-20 py-5 animate-float">
                    <h1 className="text-gray-700">Learn more</h1>
                    <MoveDown />
                </div>
            </div>
        </section>
    );
}
