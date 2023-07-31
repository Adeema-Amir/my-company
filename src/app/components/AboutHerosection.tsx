/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AboutHerosection = () => {
  return (
   <>


        {/* <Navbar /> */}
<br /><br />
<br /><br />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center justify-center">
        <img
          className="object-cover ml-0 sm:ml-[1.25] sm:mb-5 mb-0 w-[431px] h-full max-h-80 rounded-lg"
          src="Is-the-Company-Youre-Working-for-Stable.jpg"
          alt="Image"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-md ml-[16px] sm:ml-0">
          <h2 className="text-2xl font-bold mb-4">Text Title</h2>
          <p className="text-gray-700 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            in ex pulvinar, varius dui id, accumsan nulla. Curabitur auctor
            commodo est, id rhoncus arcu fringilla a. Nulla dapibus ac velit
            sit amet pellentesque.
          </p>
          <a
            href="#"
            className="text-indigo-500 font-bold mt-4 inline-block"
          >
            Read More
          </a>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-[16px] sm:ml-[1.25]">
      <div className="flex items-center justify-center">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Text Title</h2>
          <p className="text-gray-700 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            in ex pulvinar, varius dui id, accumsan nulla. Curabitur auctor
            commodo est, id rhoncus arcu fringilla a. Nulla dapibus ac velit
            sit amet pellentesque.
          </p>
          <a
            href="#"
            className="text-indigo-500 font-bold mt-4 inline-block"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="object-cover w-[431px] mr-5 h-full max-h-80 rounded-lg"
          src="Registered-Office-of-a-Company.jpg"
          alt="Image"
        />
      </div>
    </div>

    <br /><br />

    <div id="team">
       <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center lg:text-7xl md:text-6xl">
          Our Team
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center font-normal leading-relaxed fs521 lg:w-2/3">
          Here is Our Team.
        </p>
       </div>
       <br /><br /><br /><br />
        <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3 slide">
          <div className="flex flex-wrap gap-x-20">
          <div className="ktq4 bg-zinc-100 w-[364px] rounded overflow-hidden shadow-lg m-4 p-9">
            <img className="w-10 hover:w-14 duration-300 rounded-full" src="https://avatars.githubusercontent.com/u/105167729?v=4"/>
            <h3 className="pt-3 font-semibold text-lg dark:text-black">
            Adeema Amir
            </h3>
            <p className="pt-2 value-text text-md fkrr1 dark:text-black">
              Project Manager
            </p>
          </div>
          <div className="ktq4 bg-zinc-100 rounded overflow-hidden shadow-lg m-4 p-9 sm:mt-5 mt-0">
            <img className="w-10 hover:w-14 duration-300 rounded-full" src="https://avatars.githubusercontent.com/u/113040207?v=4"/>
            <h3 className="pt-3 font-semibold text-lg dark:text-black">
              Rana Muhammad Reebaal Hussain
            </h3>
            <p className="pt-2 value-text text-md fkrr1 dark:text-black">
             Director
            </p>
          </div>
          </div>
          <br /><br />
          <div className="flex flex-wrap gap-x-20">
            <div className="ktq4 bg-zinc-100 rounded overflow-hidden shadow-lg m-4 p-9">
                <img className="w-10 hover:w-14 duration-300 rounded-full" src="https://avatars.githubusercontent.com/u/104692519?v=4"/>
                <h3 className="pt-3 font-semibold text-lg dark:text-black">
                Rana Muhammad Rabees Hussain
                </h3>
                <p className="pt-2 value-text text-md fkrr1 dark:text-black">
                Marketer
                </p>
            </div>
            <div className="ktq4 bg-zinc-100 w-[364px] ml-[16px] rounded overflow-hidden shadow-lg m-4 p-9 sm:mt-5 mt-0">
                <img className="w-10 hover:w-14 duration-300 rounded-full" src="https://avatars.githubusercontent.com/u/104395071?v=4"/>
                <h3 className="pt-3 font-semibold text-lg dark:text-black">
                Rana Amir Hussain
                </h3>
                <p className="pt-2 value-text text-md fkrr1 dark:text-black">
                Ceo
                </p>
            </div>
          </div>
        </div>




        <Footer />
   </>
  );
};

export default AboutHerosection;