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
          style={{backgroundImage: 'url(assets/img/slider/sobha_siniya_island.jpg)'}}
          >
            </div>
            <div className="container banner_container_main banner_wrapper">
                <div className="main-slider-one__single slider_wrapper">

                 <div>
                  <div style={{marginTop: 20}}>
                     <Link href="/" passHref className='logo_styling'>
  <Image
    src="https://salescenter-siniyaisland.com/images/logo.svg"
    alt="siniya_island_logo"
    height={55}
    width={300}
    className='main_logo_styling'
  />
  
</Link>
                  </div>
                   <div className='row slider_wrapper'>
<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
 <div className='row row_wrapper center'>
               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 main_container">
                     <div className="container component_container">

                   

  <div className="row banner_container">
    <div className="col-lg-12 col-md-12">
      <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content'>FIND YOUR DREAM HOME TODAY</h1>
        </div>
      </div>
      <div className='resp_usd'>
        <p className="down_styling">
  Invest in Sobha Siniya Island with Shiro Estate and unlock exclusive projects, prime waterfront living, and exceptional investment opportunities. Secure your preferred residence now.
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
{/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
   <div className='row row_wrapper'>
                 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                     <div className="btn_style btn_cen">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
           <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        viewBox="0 0 22 22"
        fill="none"
        className="logo_header"
      >
        <path
          d="M15.1175 7.38242L20.9998 1.50012M20.9998 1.50012H16.294M20.9998 1.50012V6.20596M3.35292 1.50012H8.05876L10.4117 7.38242L7.47053 9.14711C8.73047 11.7018 10.7981 13.7695 13.3528 15.0294L15.1175 12.0883L20.9998 14.4412V19.147C20.9998 19.7711 20.7519 20.3695 20.3107 20.8108C19.8694 21.252 19.2709 21.4999 18.6469 21.4999C14.0578 21.2211 9.72952 19.2723 6.47857 16.0214C3.22763 12.7704 1.27888 8.4421 1 3.85304C1 3.22901 1.2479 2.63053 1.68915 2.18928C2.13041 1.74802 2.72889 1.50012 3.35292 1.50012Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
            GET AN INSTANCE CALL BACK
          </button>
</div>
                </div>
                </div>
</div> */}
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

