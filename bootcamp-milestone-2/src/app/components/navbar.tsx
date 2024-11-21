import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav className="bg-teal-900 border-gray-200 ">
                <div className="flex flex-wrap justify-between items-center mx-auto p-4 shadow-md">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                      <span className="self-center text-2xl font-semibold whitepace-nowrap text-green-300">Shayan Daijavad</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <a href="mailto: shayan@daijavad.com" className="text-sm text-green-300 hover:underline">
                                shayan@daijavad.com
                            </a>
                        </div>

                        <a href="https://www.linkedin.com/in/shayan-daijavad-20b21a209/" target="_blank" className="text-green-300 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 0h-16c-2.211 0-4 1.789-4 4v16c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4v-16c0-2.211-1.789-4-4-4zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm12.5 11.268h-3v-5.397c0-1.286-.026-2.94-1.793-2.94-1.793 0-2.067 1.4-2.067 2.848v5.489h-3v-10h2.884v1.367h.041c.403-.763 1.385-1.565 2.85-1.565 3.047 0 3.608 2.005 3.608 4.617v5.581z"/>
                            </svg>
                        </a>

                        <a href="https://github.com/HenryHorse" target="_blank" className="text-green-300 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.305 3.492.998.108-.775.418-1.305.761-1.605-2.665-.304-5.467-1.334-5.467-5.932 0-1.311.469-2.381 1.237-3.221-.125-.304-.537-1.526.118-3.176 0 0 1.008-.323 3.3 1.23.958-.267 1.984-.4 3.006-.405 1.021.005 2.048.138 3.006.405 2.292-1.553 3.3-1.23 3.3-1.23.656 1.65.244 2.872.118 3.176.769.84 1.237 1.91 1.237 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222 0 1.606-.014 2.901-.014 3.293 0 .321.217.694.825.577 4.764-1.591 8.197-6.086 8.197-11.384 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="bg-teal-700 shadow-md">
                <div className="px-4 py-3 mx-auto">
                    <div className="flex items-center"></div>
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="/" className="text-green-300 hover:underline" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="text-green-300 hover:underline">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="/resume" className="text-green-300 hover:underline">
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/Blogs" className="text-green-300 hover:underline">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
  );
}