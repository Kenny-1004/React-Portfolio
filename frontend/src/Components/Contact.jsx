import { Facebook, Github, Mail } from "lucide-react";
import React from "react";
import instagram from "../images/ig.png";
import gmail from "../images/gmail.png";
import facebook from "../images/facebook.png";

export default function Contact({contactsRef}) {
    return (
        <footer ref={contactsRef} className="w-full max-h-max py-40 bg-gray-100">
            <div className="w-7/8 mx-auto">
                <h1 className="text-center text-4xl poppins-semibold ">
                    Lets Work Together!
                </h1>
                <p className="w-7/8 text-center mx-auto text-gray-500 my-10">
                    I’m always excited to explore new opportunities and take on
                    interesting projects. I enjoy collaborating with others and
                    learning from every experience. Whether it’s a challenge, an
                    idea, or a potential partnership, I’m open to connecting and
                    sharing ideas. I believe great things happen when creative
                    minds come together. Feel free to reach out—I’d love to work
                    with you!
                </p>
                <div className="font-semibold flex mt-5 items-center justify-center gap-5 max-h-max w-full mx-auto button-container">
                    <button className="bg-black text-white flex justify-center hover:scale-105 buttons py-2 px-5 rounded-md hover:bg-blue-600 transition-all duration-300">
                        <div className="flex items-center gap-3">
                            <img className="size-6" src={gmail} alt="" />
                            Email me
                        </div>
                    </button>
                    <button className="gap-3 flex justify-center hover:scale-105 border border-gray-400 py-2 px-5 rounded-md buttons hover:text-white hover:bg-blue-600 transition-all duration-300 ">
                        <div className="flex items-center gap-3">
                            <img className="size-6" src={instagram} alt="" />
                            Instagram
                        </div>
                    </button>
                    <button className="gap-3 flex justify-center hover:scale-105 border border-gray-400 py-2 px-5 rounded-md buttons hover:text-white hover:bg-blue-600 transition-all duration-300 ">
                        <div className="flex items-center gap-3">
                            <img className="size-6" src={facebook} alt="" />
                            Facebook
                        </div>
                    </button>

                </div>
                <div className="w-full text-center mt-10">
                    <p className="text-center text-gray-500"><span className="text-lg text-black">&copy;</span> 2025 Kent Nicholas All right reserved. Credits to AsmrProg as he inspired the design.</p>
                </div>
            </div>
        </footer>
    );
}
