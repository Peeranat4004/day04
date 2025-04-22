'use client';

import React from 'react';
import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f2f4dd] pt-4 pr-8 pb-4 pl-8">
      <nav className="w-full">
        <div className="border flex w-full justify-between max-w-screen-2xl mx-auto md:flex-row">
          {/* Desktop Navigation */}
          <div className="flex flex-row justify-between items-center mt-2 mb-2 md:m-0 hidden md:flex bg-[#f2f4dd]">
            {['Home', 'Booking', 'Profile'].map((text, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-600 text-center mr-6 font-medium text-base"
                style={{ fontFamily: 'Raleway' }}
              >
                {text}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex flex-row items-center justify-center order-first md:order-none bg-white">
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center">
            <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white rounded-lg text-lg font-normal mr-6 hover:bg-gray-900 hover:border-gray-900 hover:text-white">
              Sign in
            </button>
            <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 border-blue-700 rounded-lg text-lg font-normal">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="outline-none mobile-menu-button">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-500 hover:text-green-500"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col items-center">
              {['Product', 'Features', 'Pricing'].map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-600 text-center mt-2 font-medium text-base"
                  style={{ fontFamily: 'Raleway' }}
                >
                  {text}
                </a>
              ))}
              <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white rounded-lg text-lg font-normal mt-2">
                Sign in
              </button>
              <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 border-blue-700 rounded-lg text-lg font-normal mt-2">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
      <section className="mx-auto py-20 max-w-screen-2xl p-4 sm:pt-0">
  <p className=" p-4 mb-2 text-gray-600 font-medium tracking-wide text-center lg:text-left uppercase">
    HOMEPAGE
  </p>

  <div className="mb-4 lg:mb-8 lg:gap-y-0 lg:flex-row lg:justify-between justify-center items-center flex flex-col gap-x-0 gap-y-6 max-md:max-w-lg max-md:mx-auto">
    <div className="w-full text-center lg:text-left lg:w-2/4">
      <p className="text-4xl lg:text-6xl lg:mb-6 lg:max-w-2xl lg:mx-0 font-bold tracking-tight leading-[3.25rem] mx-auto max-w-max">
        Enjoy a better stay experience with our service
      </p>
    </div>
    <div className="w-full text-center lg:text-left lg:w-2/4">
      <p className="text-lg font-normal text-gray-600 mb-5">
        We offer everything to make your booking simple, fast, and hassle-free—
        making every trip more comfortable.
      </p>
      <a
        href="#"
        className="items-center justify-center text-base font-semibold text-black lg:justify-start flex flex-row gap-2"
      >
        Booking here!
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
        </svg>
      </a>
    </div>
  </div>
  <img
  alt="content image"
  src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  className="mt-2 rounded-xl object-cover w-250 h-auto mx-auto sm:rounded-2xl sm:object-cover sm:max-h-[600px] sm:max-w-[1200px] lg:max-h-[700px] lg:max-w-[1400px] lg:rounded-3xl lg:object-cover lg:max-h-[800px] lg:max-w-[1600px]"
/>

  <div className="relative">
    <img
      alt="content image"
      src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="max-h-full object-top object-cover w-full sm:bg-orange-700 sm:text-amber-500 hidden"
    />
  </div>
</section>
<section className="max-w-screen-2xl mx-auto mt-6 px-8 text-center">
  <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Raleway' }}>
    Welcome to Our Website
  </h1>
  <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
    Discover the best experiences, book appointments, and manage your profile—all in one place.
  </p>
  <div className="mt-6 flex justify-center gap-4">
    <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
      Get Started
    </button>
    <button className="bg-white text-blue-700 border border-blue-700 px-6 py-2 rounded-lg hover:bg-blue-50">
      Learn More
    </button>
  </div>
</section>
<section className="mt-20 bg-[#f2f4dd] py-12">
  <div className="max-w-screen-2xl mx-auto px-8 grid gap-8 md:grid-cols-3 text-center">
    {[
      { title: 'Easy Booking', desc: 'Book appointments in just a few clicks.' },
      { title: 'User Profile', desc: 'Manage your profile and preferences easily.' },
      { title: 'Secure & Reliable', desc: 'Your data is safe and protected.' }
    ].map((feature, i) => (
      <div key={i} className="p-6 bg-white rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
        <p className="mt-2 text-gray-600">{feature.desc}</p>
      </div>
    ))}
  </div>
</section>
<div className="border mb-3 xl:grid xl:grid-cols-3 xl:gap-8 bg-[#f2f4dd] pt-10 px-8 max-w-screen-2xl mx-auto">
  <div className="mt-10 xl:mt-0">
    <p className="text-sm font-semibold leading-6 text-black">Subscribe to our newsletter</p>
    <p className="mt-2 text-sm leading-6 text-gray-800">
      The latest news, articles, and resources, sent to your inbox weekly.
    </p>
    <form className="mt-6 sm:flex sm:max-w-md">
      <label htmlFor="email-address" className="sr-only">Email address</label>
      <input
        type="email"
        placeholder="Enter your email"
        name="email-address"
        autoComplete="email"
        required
        className="min-w-0 appearance-none border-0 ring-1 ring-inset ring-white/10 placeholder:text-gray-500 
        focus:ring-2 focus:ring-inset focus:ring-black focus:outline-none w-full rounded-md bg-gray-50 
        px-3 py-1.5 text-base text-black shadow-sm sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
        id="email-address"
      />
      <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <button
          type="submit"
          style={{ fontFamily: "Arial" }}
          className="flex hover:bg-black focus-visible:outline focus-visible:outline-2 
          focus-visible:outline-offset-2 focus-visible:outline-black w-full items-center justify-center 
          rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>

  {/* Grid links */}
  <div className="mt-10 xl:mt-0 xl:col-span-2 grid grid-cols-2 gap-8 mb-6">
    {/* Column 1 */}
    <div className="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <p className="text-sm font-semibold leading-6 text-black">Explore</p>
        <ul className="mt-6 space-y-4">
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Marketing</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Analytics</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Commerce</a></li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0">
        <p className="text-sm font-semibold leading-6 text-black">Support</p>
        <ul className="mt-6 space-y-4">
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Pricing</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Guides</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Mission and Values</a></li>
        </ul>
      </div>
    </div>

    {/* Column 2 */}
    <div className="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <p className="text-sm font-semibold leading-6 text-black">Company</p>
        <ul className="mt-6 space-y-4">
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">About</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Blog</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Team</a></li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0">
        <p className="text-sm font-semibold leading-6 text-black">Legal</p>
        <ul className="mt-6 space-y-4">
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Claim</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Privacy</a></li>
          <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Terms</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
