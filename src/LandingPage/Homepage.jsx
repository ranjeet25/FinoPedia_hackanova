import React from 'react';
import { Link } from 'react-router-dom';
import fintech from './fintech.json';
import Lottie from 'lottie-react';
import Features from './Features';
import Footer from './Footer';

function Homepage() {
  return (
    <>
      <div className="mx-auto h-2 max-w-screen-2xl px-4 md:px-8">
        <header className="mb-4 flex items-center justify-between py-4 md:py-8">
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
            💸 FinoPedia
          </a>
          <nav className="hidden gap-12 lg:flex">
            <a href="#" className="text-lg font-semibold text-green-500">Home</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700">Features</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700">Pricing</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700">About</a>
          </nav>
          <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-green-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Menu
          </button>
        </header>
      </div>

      <section className="text-gray-600 body-font h-screen">
        
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Lottie className="object-cover object-center rounded" animationData={fintech} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-4xl lg:text-5xl sm:text-6xl mb-4 font-bold text-gray-900">
              Revolutionary way to save<br className="hidden lg:inline-block" />your earned money
            </h1>

            <p className="mb-8 leading-relaxed">
              Empower your finances, secure your future. Take charge with our platform, where every penny counts towards your financial freedom.
            </p>
            <div className="flex justify-center">
              <Link to="/login" className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
                Start now
              </Link>
              <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 ml-3 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                Take tour
              </a>
            </div>
          </div>
        </div>
      </section>
      <Features/>
      <Footer/>
    </>
  );
}

export default Homepage;
