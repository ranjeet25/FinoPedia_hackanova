import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
        
    
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="mb-4 flex items-center justify-between py-4 md:py-8">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
         💸
          FinoPedia
        </a>
        {/* logo - end */}
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex">
          <a href="#" className="text-lg font-semibold text-green-500">
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700"
          >
            Features
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700"
          >
            About
          </a>
        </nav>
        {/* nav - end */}
        {/* buttons - start */}
        <a
          href="#"
          className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          Signup
        </a>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-green-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
        {/* buttons - end */}
      </header>
      <section className="min-h-96 shadow-lg relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 md:py-20 xl:py-48">
        {/* image - start */}
        <img
          src="https://img.freepik.com/free-photo/3d-hand-take-out-paper-money-cash-from-wallet_107791-16211.jpg?w=740&t=st=1707464178~exp=1707464778~hmac=0c50b07dd1d2048f188cee36560fe824afe2e2dd3607d033db3391430d2ff426"
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* image - end */}
        {/* overlay - start */}
        <div className="absolute inset-0 bg-green-400 mix-blend-multiply" />
        {/* overlay - end */}
        {/* text start */}
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-green-200 sm:text-xl md:mb-8">
            Very proud to introduce
          </p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-4xl">
            Revolutionary way to save your earned money
          </h1>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
           
            <Link
              to="/login"
              className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
            >
              Start now
            </Link>
            <a
              href="#"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              Take tour
            </a>
          </div>
        </div>
        {/* text end */}
      </section>
    </div>

  </>
  )
}

export default Homepage