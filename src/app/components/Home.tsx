/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Card from '../components/Card';

const cardsData = [
  {
    title: 'Mobile Application',
    description: 'RanaVerse develops usable, engaging apps and games for Android, iOS, and Windows Mobile. We focus on human centered designs and Smart stack technology to accelerate your digital journey.',
    image: 'https://www.zoondia.com/wp-content/uploads/2021/11/imgMobApplication.webp',
  },
  {
    title: 'Web Application',
    description: 'Affordable, Robust and Engaging Web Applications. RanaVerse provides innovative, full-service web development solutions for your media and marketing needs.',
    image: 'https://www.zoondia.com/wp-content/uploads/2021/11/imgWebApplication.webp',
  },
  {
    title: 'RPA',
    description: 'RanaVerse RPA as a service is designed to help organizations integrate RPA with technologies like Artificial Intelligence, Machine Learning and knowledge based system to drive enterprise-wide transformation.',
    image: 'https://www.zoondia.com/wp-content/uploads/2021/11/RPA.webp',
  },
  {
    title: 'CMS',
    description: 'RanaVerse develops usable, engaging apps and games for Android, iOS, and Windows Mobile. We focus on human centered designs and Smart stack technology to accelerate your digital journey.',
    image: 'https://www.zoondia.com/wp-content/uploads/2021/11/cmsIMG.webp',
  },
  {
    title: 'Search Engine Optimization',
    description: 'Affordable, Robust and Engaging Web Applications. RanaVerse provides innovative, full-service web development solutions for your media and marketing needs.',
    image: 'https://www.zoondia.com/wp-content/uploads/2021/11/seoImg.webp',
  },
  {
    title: 'Web Development',
    description: 'Its time to rethink the web presence. In the era of Smartphones, Web must be more mobile friendly. Zoondia provides innovative web development services in vast reaches of outer space with expert supervision in core technologies including social networking sites, eCommerce, B2B, Healthcare etc.',
    image: 'https://www.zoondia.com/wp-content/uploads/2021/11/WebDevImg.webp',
  },
];


function One() {
  return (
    <>
      {/* Navbar ******************************** */}


      {/* Hero Section ******************************** */}

      {/* <Navbar /> */}

      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-24">
        {/* Left Side */}
        <div className="md:text-left text-center md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            We will provide here latest projects.
          </h1>
          <p className="text-xl md:text-lg mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Omnis nesciunt, cumque error nulla quam voluptatem vitae. <br />
            quis possimus itaque autem nisi sequi magnam eti dolores.
          </p>
          <div className="flex flex-wrap gap-4 md:opacity-100 opacity-0">
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              <a href="/services">Get started</a>
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              <a href="/about">Learn more</a>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 ">
          <video id="tv" className='border-black dark:border-white' autoPlay loop muted playsInline>
            <source src='hacke.mp4' >
            </source>
          </ video>
          <center>
            <div className="bg-black dark:bg-white" id="divbottomlinedd"></div>
          </center>
          <center>
            <div className="bg-black dark:bg-white" id="divbottombiglineddrgr"></div>
          </center>
        </div>
      </div>


      {/* What We Do ************************** */}

      <center>
        <h1 className="max-w-2xl mb-4 text-gray-500 text-4xl font-extrabold tracking-tight 
        leading-none md:text-5xl xl:text-6xl dark:text-white">
          What We Do</h1>
      </center>
      <center>
        <p className="max-w-2xl mb-6 hover:font-medium  text-gray-500 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-white">
          We translate ideas into Custom software.

          We pride ourselves in our capability to breathe life to your brand, from creation to execution and validation.
        </p>
        <br />
        <marquee scrollamount="5">
          <div className="flex gap-x-24">
            <img src="https://www.zoondia.com/wp-content/uploads/2018/03/imgUI.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/05/iconIoT.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/05/iconVRnAR.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/05/iconBlockChain.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/05/iconChatbot.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/05/iconCloudInfrastructure.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/05/iconGames.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2020/07/iconrobot.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/03/imgAnalytics.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/03/imgDigitalMarketing.png" alt="" />
            <img src="https://www.zoondia.com/wp-content/uploads/2018/03/imgQA.png" alt="" />
          </div>
        </marquee>

        <marquee scrollamount="5">
          <div className="flex gap-x-24">
            <p>UI/UX <br /> Design</p>
            <p>IoT</p>
            <p>VR / AR</p>
            <p>Blockchain</p>
            <p>Chatbot</p>
            <p>Cloud <br /> and <br /> Infrastructure</p>
            <p>Games</p>
            <p>RPA</p>
            <p>Big <br /> Data <br /> Analytics</p>
            <p>Digital <br /> Marketing</p>
            <p>QA</p>
          </div>
        </marquee>

      </center>


      <br /><br />

      {/* Card Group  ***************************/}



      <br /><br />


      {/* <div className="sm:ml-24 flex flex-wrap gap-x-16 md:ml-[195px]" id="maindivofcards">
      
          <div className="flex flex-wrap justify-center -mx-4" id="iamaloneffgfg">

            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-80 hover:w-full duration-300"
                src="imgMobApplication.webp"
                alt="Card"
                id="imgmobileapplicatingghddl"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-500 dark:text-white">Mobile Application</div>
                <p className="text-gray-500 dark:text-white">
                  Affordable, Robust and Engaging Web Applications. <br /> Zoondia provides innovative, full-service web development solutions for your media and marketing needs.
                </p>
              </div>
              <br />
            </div>

          </div>
          <div className="flex flex-wrap justify-center -mx-4" id="iamaloiooneffgfg">

            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-80 hover:w-full duration-300"
                src="imgWebApplication.webp"
                alt="Card"
                id="imgWebApplicationdfrft"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-500 dark:text-white">Web Application</div>
                <p className="text-gray-500 dark:text-white">
                  Affordable, Robust and Engaging Web Applications. <br /> Zoondia provides innovative, full-service web development solutions for your media and marketing needs.
                </p>
              </div>
              <br />
            </div>

          </div>

        <br /><br />
        <div className="flex flex-wrap justify-center relative right-[-13px] -mx-4" id="mymaindivdffjfgj">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img
              className="w-80 hover:w-full duration-300"
              src="RPA.webp"
              alt="Card"
              id="rpaimgWebApplicationdfrft"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-500 dark:text-white">RPA</div>
              <p className="text-gray-500 dark:text-white">
                Zoondia’s RPA as a service is designed to help organizations integrate RPA with technologies like Artificial Intelligence, Machine Learning and knowledge based system to drive enterprise-wide transformation.
              </p>
            </div>
            <br />
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img
              className="w-80 hover:w-full duration-300"
              src="cmsIMG.webp"
              alt="Card"
              id="cmsimgdaokl"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-500 dark:text-white">CMS</div>
              <p className="text-gray-500 dark:text-white">
                Zoondia develops usable, engaging apps and games for Android, iOS, and Windows Mobile. We focus on human centered designs and Smart stack technology to accelerate your digital journey.
              </p>
            </div>
          </div>

        </div>

        <br /><br />
        <div className="flex flex-wrap justify-center relative right-[-13px] -mx-4" id="mymaindivdffjfgjtiuot">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img
              className="w-80 hover:w-full duration-300"
              src="seoImg.webp"
              alt="Card"
              id="seoimgssdalfjdkdfjsd"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-500 dark:text-white">Search Engine Optimization</div>
              <p className="text-gray-500 dark:text-white">
                Affordable, Robust and Engaging Web Applications. Zoondia provides innovative, full-service web development solutions for your media and marketing needs.
              </p>
            </div>
            <br />
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img
              className="w-80 hover:w-full duration-300"
              src="WebDevImg.webp"
              id="webdevimgsddfkkdoef"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-500 dark:text-white">Web Development</div>
              <p className="text-gray-500 dark:text-white">
                It time to rethink the web presence. In the era of Smartphones, Web must be more mobile friendly. Zoondia provides innovative web development services in vast reaches of outer space with expert supervision in core technologies including social networking sites, eCommerce, B2B, Healthcare etc.
              </p>
            </div>
          </div>
        </div>
      </div> */}

<div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-5">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>

      {/* Grid Layout ******************** */}

      <br /><br /><br /><br /><br />

      <center>
        <h1 className="max-w-2xl mb-4 text-gray-500  
        text-2xl font-extrabold tracking-tight 
        leading-none md:text-5xl xl:text-6xl onScroll dark:text-white">
          Using Technologies</h1>
      </center>
      <br /><br />
      <br /><br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="Microsoft.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="Microsoft.jpg" />
          <h2 className="text-xl text-gray-500 font-bold mb-2">Microsoft</h2>
        </div>
        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="Java.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="Java.jpg" />
          <h2 className="text-xl text-gray-500 font-bold mb-2">Java</h2>
        </div>
        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="OpenSource.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="OpenSource.jpg" />
          <h2 className="text-xl text-gray-500 font-bold mb-2">Open-Source</h2>
        </div>
        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="Frontend.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="Frontend.jpg" />
          <h2 className="text-xl text-gray-500 font-bold mb-2">Frontend</h2>
        </div>

        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="Databases.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="Databases.jpg" />
          <h2 className="text-xl text-gray-500 font-bold mb-2">Databases</h2>
        </div>

        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="Internetofthings.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="Internetofthings.jpg" />
          <h2 className="text-xl text-gray-500 font-bold mb-2">Internet of Things</h2>
        </div>

        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="BigDataAnalytics.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="BigDataAnalytics.jpg" />
          <h2 className="text-xl text-gray-500  font-bold mb-2">Big Data & Analytics</h2>
        </div>

        <div className="p-4 bg-white flex gap-x-4 shadow">
          <img src="CloudInfrastructure.jpg" className='w-10 h-10 rounded-xl hover:rounded-2xl duration-300 hover:w-14 hover:h-14' alt="CloudInfrastructure.jpg" />
          <h2 className="text-xl text-gray-500 font-bold mb-2">Cloud Infrastructure</h2>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <center>
        <h1 className="max-w-2xl mb-4 text-gray-500 dark:text-white text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          OUR TECHNOLOGY STACK</h1>
      </center>
      <center>
        <p className="max-w-2xl mb-6 hover:font-medium  font-light text-gray-500 dark:text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Our technology expertise spans technologies such as
          ReactJS, Angular, .NET Core, Java, PHP, Ruby on Rails, AWS, Azure, ML, etc.
        </p>
        <marquee scrollamount="10">
          <div className="flex gap-x-24">
            <img src="custom-software-development-service-azure.png" alt="" />
            <img src="custom-software-development-service-amazone.png" alt="" />
            <img src="custom-software-development-service-google-cloud-platform.png" alt="" />
            <img src="custom-software-development-service-net-core.png" alt="" />
            <img src="custom-software-development-service-php.png" alt="" />
            <img src="custom-software-development-service-java.png" alt="" />
            <img src="custom-software-development-service-ios.png" alt="" />
            <img src="custom-software-development-service-swift.png" alt="" />
            <img src="custom-software-development-service-android.png" alt="" />
            <img src="custom-software-development-service-kotlin.png" alt="" />
            <img src="custom-software-development-service-react.png" alt="" />
            <img src="custom-software-development-service-graph-ql.png" alt="" />
            <img src="custom-software-development-service-firebase.png" alt="" />
            <img src="custom-software-development-service-sendgrid.png" alt="" />
            <img src="custom-software-development-service-swagger.png" alt="" />
            <img src="custom-software-development-service-redoc.png" alt="" />
            <img src="custom-software-development-service-react-native.png" alt="" />
            <img src="custom-software-development-service-flutter.png" alt="" />
            <img src="custom-software-development-service-mysql.png" alt="" />
            <img src="custom-software-development-service-sql.png" alt="" />
            <img src="custom-software-development-service-postgre-sql.png" alt="" />
            <img src="custom-software-development-service-mongo-db.png" alt="" />
          </div>
        </marquee>
        <br />
      </center>

      <br /><br />

      <div className="ml-[10px] sm:ml-24 flex flex-wrap gap-x-16">
        <center>
          <div className="fancy-border-radius mt-[10px] sm:mt-0 secondffggnmk">
            <img src="contact.jpg" className='mt5' id='contactimages' alt="free" />

            <br /><br />

            <p>
              Lorem ipsum dolor sit ametamet <br />
              conconsectetur adipisicing elitv. <br />
              um asperiores ex quas omnis ea <br />
              illum, porro doloribus unde atqu <br />
              recusandae aliquid commodi ulu <br />
              consequatur iure. Officiis invent <br />
              f type and scrambled it to makea <br />
              survived not only five centuriesa <br />
              electronic typesetting, remaining <br />
              <br />
            </p>
          </div>
        </center>

        <center>
          <div className="fancy-border-radius mt-[10px] sm:mt-0 secondffggnmk">
            <img src="contact.jpg" className='mt5' id='contactimages' alt="free" />

            <br /><br />

            <p>
              Lorem ipsum dolor sit ametamet <br />
              conconsectetur adipisicing elitv. <br />
              um asperiores ex quas omnis ea <br />
              illum, porro doloribus unde atqu <br />
              recusandae aliquid commodi ulu <br />
              consequatur iure. Officiis invent <br />
              f type and scrambled it to makea <br />
              survived not only five centuriesa <br />
              electronic typesetting, remaining <br />
              <br />
            </p>
          </div>
        </center>

        <center>
          <div className="fancy-border-radius mt-[10px] sm:mt-0">
            <img src="contact.jpg" className='mt5' id='contactimages' alt="free" />

            <br /><br />

            <p>
              Lorem ipsum dolor sit ametamet <br />
              conconsectetur adipisicing elitv. <br />
              um asperiores ex quas omnis ea <br />
              illum, porro doloribus unde atqu <br />
              recusandae aliquid commodi ulu <br />
              consequatur iure. Officiis invent <br />
              f type and scrambled it to makea <br />
              survived not only five centuriesa <br />
              electronic typesetting, remaining <br />
              <br />
            </p>
          </div>
        </center>

      </div>

      <br /><br /><br /><br /><br /><br />

      <center>
        <div className="flex flex-wrap gap-x-20">
          <div className="text-left ml-4">
            <h1 className="text-5xl font-bold text-black">
              Full Stack Web
            </h1>
            <h1 className="text-5xl font-bold mt-7 text-violet-600">
              Development Course
            </h1>
            <p className="text-xl mt-8">Lorem ipsum dolor sit emet</p>

            <button className="text-xl mt-8 w-44 h-14 bg-sky-400 rounded-md">Join Us</button>
          </div>
          <div className='' id='laptopdiv'>
            <video id="laptopvideo" className='bg-black relative h-[277px] w-[386px] bottom-[-89px] right-[-2px]' autoPlay loop muted playsInline>
              <source src='inde.mp4' >
              </source>
            </ video>

            {/* <iframe id="laptopvideo" className='relative h-[277px] w-[386px] bottom-[-89px] right-[-2px]' src=""></iframe> */}
          </div>
        </div>

      </center>

      {/* FOOTER ******************************** */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,261.3C640,267,800,245,960,245.3C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <footer className="bg-gray-900">
        <br />
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src="logo.png" className="w-40 mr-3" alt="Logo" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:mr-32 gap-8 sm:gap-20 space- sm:grid-cols-5">
              <br />
              <br />
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Learn React</h2>
                <ul className="text-gray-400 font-medium text-left ml-[12px]">
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Quick Start</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Installation</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Describing the UI</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Adding Interactivity</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Managing State</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">API Reference</h2>
                <ul className="text-gray-400 font-medium text-left ml-[4px]">
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">React APIs</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">React DOM APIs</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase duration-300 text-white">Follow us</h2>
                <ul className="text-gray-400 font-medium text-left ml-[19px]">
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Code of Conduct</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Meet the Team</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Docs Contributors</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Acknowledgements</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">More</h2>
                <ul className="text-gray-400 font-medium text-left ml-[40px]">
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Blog</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">React Native</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Privacy</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 duration-300 hover:text-white">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-gray-400">© 2023 <a href="/" className="hover:underline">RanaVerse™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/profile.php?id=100087931331816&sk=friends&_rdc=1&_rdr" className="text-gray-500 duration-300 hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://twitter.com/amir_adeema" className="text-gray-500 duration-300 hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://github.com/Adeema-Amir" className="text-gray-500 duration-300 hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="https://www.instagram.com/adeemaamir240/" className="text-gray-500 duration-300 hover:text-white bi bi-instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg>
                <span className="sr-only">Instagram account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>



    </>
  )
}

export default One;




