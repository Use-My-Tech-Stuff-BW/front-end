import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <div>
            <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
                <header class="h-24 sm:h-32 flex items-center z-30 w-full">
                    <div class="container mx-auto px-6 flex items-center justify-between">
                        <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                            <h3 className='font'>RE-TECH.COM</h3>
                        </div>
                        <div class="flex items-center">
                            <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden font">
                                <a href="#" class="py-2 px-6 flex text-indigo-500 border-b-2 border-indigo-500">
                                    Home
                                </a>
                                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                                    Watch
                                </a>
                                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                                    About
                                </a>
                                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                                    Contact
                                </a>
                                <a href="#" class="py-2 px-6 flex hover:text-indigo-500">
                                    Sign In
                                </a>
                            </nav>
                            <button class="lg:hidden flex flex-col ml-4">
                                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                            </button>
                        </div>
                    </div>
                </header>
                <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center">
                    <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
                        <div class="flex flex-col">
                            <h1 class="font-light w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800">
                                The Perfect Exchange is One Click Away
                            </h1>
                            <h2 class="font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8">
                                RE-TECH: like AirBnB, but for high end electronics. Are you tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!
                            </h2>
                            <div class="flex items-center justify-center mt-4">
                                <a href="#" class="uppercase py-2 px-4 bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900">
                                    Create Account
                                </a>
                                <a href="#" class="uppercase py-2 px-4 bg-transparent border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                                    Create Renter Account
                                </a>
                            </div>
                        </div>
                        <div class="block w-full mx-auto mt-6 md:mt-0 relative">
                            <img style={{marginTop: '1.5rem'}} src="https://i.pinimg.com/originals/02/65/fc/0265fcce139d64612bbbde1040347a38.jpg" class="max-w-xs md:max-w-2xl m-auto" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LandingPage;