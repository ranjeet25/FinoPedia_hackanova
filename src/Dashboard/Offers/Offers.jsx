import React from 'react'

function Offers() {
  return (
    <div className='w-4/5'>
      <div className="flex mx-4 ">
        <div class="m-2 mr-2 container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div class="text-3xl font-bold mb-4">Special Offer!</div>
          <div class="text-lg mb-4">
            Get <span class="text-yellow-400 font-bold">25% OFF</span> on your 
            purchase!
          </div>
          <div class="text-base mb-4">Use coupon code:</div>
          <div class="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
            <span class="text-2xl font-semibold">TAILOFFER25</span>
            <button class="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Copy
            </button>
          </div>
          <div class="text-sm mt-4">
            <p>
              Valid until <span class="font-semibold">December 31, 2024</span>
            </p>
            <p>Terms and conditions apply.</p>
          </div>
        </div>

        <div  class=" m-2 mr-2 container bg-gradient-to-r from-blue-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div class="text-3xl font-bold mb-4">Special Offer!</div>
          <div class="text-lg mb-4">
            Get <span class="text-yellow-400 font-bold">35% OFF</span> on your 
            purchase!
          </div>
          <div class="text-base mb-4">Use coupon code:</div>
          <div class="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
            <span class="text-2xl font-semibold">FEB2024</span>
            <button class="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Copy
            </button>
          </div>
          <div class="text-sm mt-4">
            <p>
              Valid until <span class="font-semibold">December 31, 2024</span>
            </p>
            <p>Terms and conditions apply.</p>
          </div>
        </div>

        <div class=" m-2 container bg-gradient-to-r from-pink-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div class="text-3xl font-bold mb-4">Special Offer!</div>
          <div class="text-lg mb-4">
            Get <span class="text-yellow-400 font-bold">20% OFF</span> on your
            purchase!
          </div>
          <div class="text-base mb-4">Use coupon code:</div>
          <div class="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
            <span class="text-2xl font-semibold">LAP2024</span>
            <button class="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Copy
            </button>
          </div>
          <div class="text-sm mt-4">
            <p>
              Valid until <span class="font-semibold">December 31, 2024</span>
            </p>
            <p>Terms and conditions apply.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers