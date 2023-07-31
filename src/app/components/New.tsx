"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Slideshow from './SlideShow'

function New() {
	return (
		<>
			<html>
				<head>

				</head>
			</html>

			<section className="testimonials">

				<h2 className='h2'>What Our Fans Are Saying</h2>
				<div className="testimonials-wrapper">
					<div className="testimonial">
						<img className="code" src="https://assets.codepen.io/619833/testimonial_2.png" alt="" />
						<h3 className='text-xl font-bold text-black'>Lorem, ipsum dolor sit</h3><br />
						<p className='text-black'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
					</div>
					<div className="testimonial">
						<img className="code" src="https://assets.codepen.io/619833/testimonial_3.png" alt="" />
						<h3 className='text-xl font-bold text-black'>Lorem, ipsum dolor sit</h3><br />
						<p className='text-black'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
					</div>
					<div className="testimonial">
						<img className="code" src="https://assets.codepen.io/619833/testimonial_2.png" alt="" />
						<h3 className='text-xl font-bold text-black'>Lorem, ipsum dolor sit</h3><br />
						<p className='text-black'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
					</div>
				</div>
			</section>

			<br /><br />
			<Slideshow />

			<br /><br /><br /><br /><br />

			<h1 className='text-2xl font-extrabold ml-72 mb-5'>Title Is Here</h1>

			<center className='flex flex-wrap gap-x-32'>
				<p className='ml-32 text-xl font-sans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Natus laudantium adipisci sequi molestiae <br /> in architecto perspiciatis culpa qui animi <br /> aut autem minima atque reiciendis omnis at, <br /> commodi earum ullam ipsum!</p>
				<div className="sketchfab-embed-wrapper"> <iframe title="Personal Computer" width={400} height={350} allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/aa398650fe6e4baa8771c71266d842f4/embed?autospin=1&autostart=1&preload=1"> </iframe> </div>
			</center>

			<script>
				AOS.init();
			</script>

		</>
	)
}

export default New