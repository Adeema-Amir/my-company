/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Error() {
  return (
    <>

{/* <Navbar /> */}

<br /><br />

    <body className='bg-stone-100'>
      
    </body>
      <center>
        <img src="notfound.gif" className='h-[497px]' title='Page Not Found' alt="notfound" />
    <h1 className='text-3xl font-bold'>Sorry ! Page Not Found</h1>
    <br />
    <a href="/" className="inline-flex items-center 
                     hover:border-gray-600 hover:font-semibold 
                     duration-300 justify-center px-5 py-3 
                     text-base font-medium text-center text-white
                     border-gray-300 rounded-lg bg-lime-300 hover:bg-lime-400 focus:ring-4
                     focus:ring-gray-100">
                    Go Back
                    </a> 
      </center>
    
<br /><br />

      <Footer />


    </>
  )
}

export default Error
