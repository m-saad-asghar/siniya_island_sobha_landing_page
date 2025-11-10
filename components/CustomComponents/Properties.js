"use client";
import Link from "next/link"
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaHouseUser, FaChartLine, FaCity, FaGolfBall, FaTree, FaStore, FaBiking, FaTruckMonster, FaHotel, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaStar } from "react-icons/fa6";
import { Home, Building, Trees, Umbrella, UmbrellaIcon, TreePine, Activity, Dumbbell, Sailboat, MapPin, Leaf, TrendingUp } from "lucide-react";
export default function Properties() {
    return (
        <>
            <section className="custom_container properties_section" id="why-invest-in-sobha">
              <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>Featured Sobha Siniya Island Projects</h1>
        </div>
      </div>
      <div className='resp_usd'>
        <p className="down_styling para_styling">
 Explore exclusive residences designed with world-class amenities, unmatched views, and resort-style living at Sobha Siniya Island.
</p>

      </div>

      <div className="row apartment_row_styling margin_left_null">
            <div className="why_invest_wrapper why_invest_mobile_container col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <div className="apartment_container">
  <Image
    src="https://salescenter-siniyaisland.com/images/yachtside/2.jpg?v=1"
    alt="Apartment Image"
    width={1200}
    height={800}
    className="apartment_image_styling"
  />
</div>
            </div>
             <div className="why_invest_wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Apartments
                </div>
                <h3 className="project_title">Waterfront Apartments starting from AED 1.31</h3>
                <div className="currency_container">
                    <div className="property_price">
                        <span className="property_price_span">
                          <Image
                                                    src="/assets/icon/sobha_icons/inr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> INR 3.0 Cr*
                        </span>
                    </div>
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/usd.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 30 }}
                                                  /> USD 359 K*
                        </span>
                    </div>
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/eur.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> EUR 355 K*
                        </span>
                    </div>
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/gbp.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> GBP 292 K*
                        </span>
                    </div>
                </div>

                <div className="consultation_btn_style btn_cen btn_mobile_resp">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            I AM INTERESTED
          </button>
</div>

                 {/* <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Apartments
                </div>
            </div>
             <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Apartments
                </div>
            </div>
                 </div> */}
            </div>
      </div>

      <div className="row apartment_row_styling margin_left_null">
             <div className="why_invest_wrapper_villa col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Villas
                </div>
                <h3 className="project_title">Waterfront Villas starting from AED 10.61</h3>
                <div className="currency_container_villa">
                    <div className="property_price">
                        <span className="property_price_span">
                            INR 24.6 Cr*
                        </span>
                    </div>
                    <div className="property_price">
                         <span className="property_price_span">
                            USD 2.91 M*
                        </span>
                    </div>
                    <div className="property_price">
                         <span className="property_price_span">
                            EUR 2.87 M*
                        </span>
                    </div>
                    <div className="property_price">
                         <span className="property_price_span">
                            GBP 2.36 M*
                        </span>
                    </div>
                </div>

                <div className="consultation_btn_style btn_cen btn_mobile_resp">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            I AM INTERESTED
          </button>
</div>
            </div>

            <div className="why_invest_wrapper_villa col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <div className="villa_container">
  <Image
    src="https://salescenter-siniyaisland.com/images/coral/1.jpg?v=1"
    alt="Apartment Image"
    width={1200}
    height={800}
    className="apartment_image_styling"
  />
</div>
            </div>
      </div>
            </section>
        </>
    )
}