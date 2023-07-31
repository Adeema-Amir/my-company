/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactForm: React.FC = () => {
  return (
    <>

      {/* <Navbar /> */}

      <br /><br />

      <div className="text-center w-full">
      </div>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl dark:text-white lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
          </div>
          <div className="mt-8 text-center">
            <img src="contact.jpg" alt="" />
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm dark:text-white text-gray-600 font-bold">Full Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline " required
              type="text" placeholder="" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-white text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline " required
              type="text" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-white text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline " required></textarea>
          </div>
          <div className="mt-8">
            <button type="submit"
              className="uppercase text-sm font-bold tracking-wide dark:text-white bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </div>
      </div>

      <br /><br />

      <Footer />
    </>
  );
};

export default ContactForm;
