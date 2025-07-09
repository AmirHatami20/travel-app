"use client"

import React from 'react';
import {BsEnvelopePaper} from "react-icons/bs";

function NewsLetter() {
    return (
        <section className="bg-black mt-12 pt-16 pb-16">
            <div className="container flex flex-col items-center justify-center w-full text-white">
                <BsEnvelopePaper className="w-16 h-16 mt-10"/>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 tracking-widest">
                    your Travel Journey Starts Here
                </h1>
                <p className="mt-3 text-xs md:text-sm">
                    Sign up and we will send the best deals to you
                </p>

                <form
                    onSubmit={() => {}}
                    className="flex flex-col gap-y-3 mt-8 w-full sm:w-[80%] md:w-[60%] lg:w-[40%]"
                >
                    <input
                        type="text"
                        placeholder="Email..."
                        className="w-full px-4 h-13 bg-white border-none outline-0 rounded-md placeholder-gray-600 text-black"
                    />
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center h-13 bg-blue-950 rounded-md text-white"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewsLetter;