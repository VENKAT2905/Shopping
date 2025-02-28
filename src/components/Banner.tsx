import React from 'react';

export function Banner() {
  return (
    <div className="relative bg-purple-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-medium text-white">
            <span className="md:hidden">Summer sale now on!</span>
            <span className="hidden md:inline">Big news! Summer sale is now live — Up to 50% off on all items.</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="text-white font-bold underline">
                Shop now <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}