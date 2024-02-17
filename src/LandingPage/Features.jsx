import React from 'react';
import AI from './AI.json';
import advisory from './advisory.json';
import visuals from './visuals.json';
import Lottie from 'lottie-react';

export default function Features() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col justify-center px-16 py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font lg:text-5xl mb-2 sm:mb-0">Finopedia - Features</h1>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {/* First Section */}
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md">
                            <div className="h-64">
                                <Lottie className="object-cover object-center h-full w-full" animationData={visuals} />
                            </div>
                            <div className="bg-white p-6">
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Spending Insights</h2>
                                <p className="text-base leading-relaxed mt-2">See where your money goes and categorize expenses easily.</p>
                                <a href="/login" className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md p-3">
                            <div className="h-64">
                                <Lottie className="object-cover object-center h-full w-full p-3" animationData={AI} />
                            </div>
                            <div className="bg-white p-6">
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">AI Financial Advisor</h2>
                                <p className="text-base leading-relaxed mt-2">Get personalized financial advice based on your data.</p>
                                <a href="/login" className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Third Section */}
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md">
                            <div className="h-64">
                                <Lottie className="object-cover object-center h-full w-full p-7" animationData={advisory} />
                            </div>
                            <div className="bg-white p-6">
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Tailored Investments</h2>
                                <p className="text-base leading-relaxed mt-2">Discover investment options that match your interests and risk level.</p>
                                <a href="/login" className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
