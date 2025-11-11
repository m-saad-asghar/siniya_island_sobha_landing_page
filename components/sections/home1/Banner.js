'use client'
import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}

export default function Banner() {
  
  return (
    <>
    
    <section className="main-slider main-slider-one" id="home">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none" style={{height: "100vh"}}>                    
        <SwiperSlide className="swiper-slide">
          <div className="image-layer main_banner" 
          style={{backgroundImage: 'url(assets/img/slider/s_island.webp)'}}
          >
            </div>
            <div className="container banner_container_main banner_wrapper">
                <div className="main-slider-one__single slider_wrapper">

                 <div>
                  <div style={{marginTop: 20}} className='logo_appear'>
                     <div className='logo_styling'>
  <Image
    src="https://salescenter-siniyaisland.com/images/logo.svg"
    alt="siniya_island_logo"
    height={55}
    width={300}
    className='main_logo_styling'
  />
  
</div>
                  </div>
                  <div className='row row_wrapper center'>
               <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 main_container">

                 <div className='logo_styling small_logo' style={{marginBottom: 10}}>
  <Image
    src="https://salescenter-siniyaisland.com/images/logo.svg"
    alt="siniya_island_logo"
    height={55}
    width={300}
    className='main_logo_styling'
  />
  
</div>
                     <div className="container component_container">

                   

  <div className="row banner_container">
    <div className="col-lg-12 col-md-12">
      <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content'>LUXURY WATERFRONT LIVING IN VIBRANT ISLAND RESIDENCES BY SOBHA REALTY</h1>
        </div>
      </div>
      <div className='resp_usd'>
        <p className="down_styling">
  Own a luxurious waterfront home with open green spaces, unmatched views, and world-class amenities — crafted for modern elegance.
</p>

      </div>
    </div>
  </div>
</div>
<div className="consultation_btn_style btn_cen">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            SCHEDULE YOUR FREE CONSULTATION
          </button>
</div>
                </div>
                </div>
                 </div>

               

                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
};

