'use client'

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Booking() {
  return (
    <div className="bg-[#f2f4dd] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold">Booking</h1>
        <p className="mt-4 text-gray-600">This is the booking page.</p>
      </main>

      <Footer />
    </div>
  );
}
