import { useEffect, useRef, useState } from "react";
import AboutMe from "../Components/AboutMe.jsx";
import Hero from "../Components/Hero.jsx";
import Navbar from "../Components/Navbar.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import Skills from "../Components/Skills.jsx";
import Contact from "../Components/Contact.jsx";
import { projects } from "../data/projects.js";

export default function Home() {
    const aboutRef = useRef(null);
    const heroRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactsRef = useRef(null);
    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToHero = () => {
        heroRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToSkills = () => {
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollContacts = () => {
        contactsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <main className="w-full h-screen m-auto relative poppins-regular">
                <div className="blur-[8rem] -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-85 w-85 bg-pink-600 rounded-full pink"></div>
                <div className="blur-[8rem] -z-10 absolute top-0 left-3/4 -translate-x-1/2 -translate-y-1/2  h-90 w-90 bg-violet-500 rounded-full violet"></div>
                <div className="blur-[8rem] -z-10 absolute top-11/12 left-0 -translate-y-1/2 -translate-x-1/2  h-90 w-90 bg-sky-600 rounded-full blue"></div>
                <div className="blur-[7rem] -z-10 absolute top-100 left-3/4 -translate-x-1/2 -translate-y-1/2  h-50 w-50 bg-amber-500 rounded-full amber"></div>

                <Navbar scrollToContacts={scrollContacts} scrollToSkills={scrollToSkills} heroRef={heroRef} scrollToProjects={scrollToProjects} scrollToHero={scrollToHero} scrollToAbout={scrollToAbout} />
                <Hero scrollToContacts={scrollContacts} scrollToProjects={scrollToProjects} heroRef={heroRef} scrollToAbout={scrollToAbout} />
                <AboutMe aboutRef={aboutRef} />
                <section ref={projectsRef} className="py-20">
                    <h1 className="text-center mb-20 text-3xl poppins-semibold">
                        Featured Projects
                    </h1>
                    <div className="w-7/8 max-h-max mx-auto flex flex-wrap gap-5">
                        {projects.map((value, index) => (
                            <ProjectCard key={index} title={value.title} description={value.description}/>
                            
                        ))}
                    </div>
                </section>
                <Skills skillsRef={skillsRef} />
                <Contact contactsRef={contactsRef} />
            </main>
        </>
    );
}
