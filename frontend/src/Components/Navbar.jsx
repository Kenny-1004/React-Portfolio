import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Navbar({
    scrollToAbout,
    heroRef,
    scrollToHero,
    scrollToProjects,
    scrollToSkills,
    scrollToContacts
}) {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 680);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 680);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const header = document.querySelector(".about-me");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        header.classList.add("bg-white");
                        header.classList.add("shadow-xl");
                    } else {
                        header.classList.remove("bg-white");
                        header.classList.remove("shadow-xl");
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
    });

    return (
        <header className={`bar opacity-0 about-me fixed w-full mx-auto top-0 z-20`}>
            <nav className="px-10 py-5 w-7/8 mx-auto flex items-center justify-between">
                <div>
                    <h1
                        onClick={scrollToHero}
                        className={`${isSmall ? "text-md" : "text-2xl"} font-semibold cursor-pointer`}
                    >
                        Portfolio
                    </h1>
                </div>
                <div>
                    {!isSmall && (
                        <ul className="flex items-center gap-10 navbar">
                            <li
                                className="cursor-pointer transition-all duration-300 hover:text-gray-500 hover:scale-110"
                                onClick={scrollToAbout}
                            >
                                About
                            </li>
                            <li
                                onClick={scrollToProjects}
                                className="cursor-pointer transition-all duration-300 hover:text-gray-500 hover:scale-110"
                            >
                                Project
                            </li>
                            <li onClick={scrollToSkills} className="cursor-pointer transition-all duration-300 hover:text-gray-500 hover:scale-110">
                                Skills
                            </li>
                            <li onClick={scrollToContacts} className="cursor-pointer transition-all duration-300 hover:text-gray-500 hover:scale-110">
                                Contact
                            </li>
                        </ul>
                    )}
                    {isSmall && (
                        <div
                            onClick={() => {
                                isOpen ? setIsOpen(false) : setIsOpen(true);
                            }}
                            className=" p-3 rounded-md  transition-all duration-300"
                        >
                            <Menu />
                            {isOpen && (
                                <div className="bg-white absolute shadow-xl p-2 right-30 top-10 rounded-xl">
                                    <ul className="flex flex-col gap-3">
                                        <li
                                            onClick={scrollToAbout}
                                            className="hover:bg-gray-100 py-2 px-5 rounded-2xl"
                                        >
                                            About
                                        </li>
                                        <li
                                            onClick={scrollToProjects}
                                            className="hover:bg-gray-100 py-2 px-5 rounded-2xl"
                                        >
                                            Projects
                                        </li>
                                        <li onClick={scrollToSkills} className="hover:bg-gray-100 py-2 px-5 rounded-2xl">
                                            Skills
                                        </li>
                                        <li onClick={scrollToContacts} className="hover:bg-gray-100 py-2 px-5 rounded-2xl">
                                            Contact
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
