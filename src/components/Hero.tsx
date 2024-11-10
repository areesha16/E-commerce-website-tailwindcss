"use client";
// import { title } from 'process';//
import React from 'react'
import Slider from "react-slick";
import Slide from './slides';

const Hero = () => {

    const settings = {
        dots: true,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay:true,
        pauseOnMover: false,

    };

    const slideData = [
        {
           id:0,
           img:"/banner5.jpg" ,
           title:"Trending Items",
           mainTitle:"WOMEN'S LATEST FASHION SALE",
           price:"$70",

        },
        {
            id:1,
            img:"/banner4.jpg",
            title:"Trendind Accessories",
            mainTitle:"Modern Necklace",
            price:"$50",
        },
        {
            id:2,
            img:"/bts.jpg",
            title:"Sale Offer",
            mainTitle:"New Fashion Super SALE",
            price:"$199"
        },
        
    ]
  return (
    <main className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide
                 key={item.id}
                 img={item.img}
                 title={item.title}
                mainTitle={item.mainTitle}
                price={item.price} 
                />
    ))}
        </Slider>
    
    </main>
  )
}

export default Hero
