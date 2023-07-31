import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import New from './New';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Web Design',
      icon: '💻',
    },
    {
      title: 'Graphic Design',
      description: 'Graphic Design',
      icon: '🎨',
    },
    {
      title: 'Digital Marketing',
      description: 'Digital Marketing',
      icon: '📈',
    },
    {
        title: 'UX / UI Design',
        description: 'UX / UI Design',
        icon: '🎫',
      },
      {
        title: 'Javascript',
        description: 'Javascript',
        icon: '🎆',
      },
      {
        title: 'Mern developer',
        description: 'Mern developer',
        icon: '🎃',
      },
  ];

  return (
    <>


{/* <Navbar /> */}
<br /><br />


    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-8 ">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white text-3xl mx-auto mb-4">
              {service.icon}
            </div>
            <h2 className="text-black text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
<br /><br />

<New /> 
    <Footer />

    </>
  );
};

export default ServicesPage;