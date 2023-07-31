/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const ProductPage: React.FC = () => {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'product1.jpg',
      link: 'https://rana-reebaal-hackathon.vercel.app/',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 149.99,
      description: 'Nulla pretium elit vel ante posuere rhoncus.',
      image: 'product2.jpg',
      link: 'https://achieve-with-me.vercel.app/',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 99.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'product3.jpg',
      link: 'https://furniture-advertisement.vercel.app/',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 149.99,
      description: 'Nulla pretium elit vel ante posuere rhoncus.',
      image: 'product4.jpg',
      link: 'https://panaverse-iota.vercel.app/',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 199.99,
      description: 'Sed faucib tellus nec lorem iaculis vestibulum.',
      image: 'product5.jpg',
      link: 'https://a-i-o-shopping-mart.vercel.app/',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 99.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'product6.jpg',
      link: 'https://react-full-project.vercel.app/',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 149.99,
      description: 'Nulla pretium elit vel ante posuere rhoncus.',
      image: 'product7.jpg',
      link: 'https://fullstack-ecommerce-site.vercel.app/',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 149.99,
      description: 'Nulla pretium elit vel ante posuere rhoncus.',
      image: 'product8.jpg',
      link: 'https://adeema-amir.github.io/DjangoWithHtml/templates/home',
    },
  ];

  return (
    <>
    
{/* <Navbar /> */}
<br /><br />
<br /><br />

    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md">
            <a href={product.link}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 mb-4 rounded-md"
              />
            </a>
            <h1 className="text-3xl font-bold text-center mb-8 dark:text-black">{product.name}</h1>
        </div>
        ))}
      </div>
    </div>
<br /><br />

<Footer />
    </>
  );
};

export default ProductPage;