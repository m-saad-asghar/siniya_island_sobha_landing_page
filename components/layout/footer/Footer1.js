import Link from "next/link"
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaSnapchatGhost, FaTwitter } from "react-icons/fa";

export default function Footer1() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-one custom_container" id="emaar-footer">

                 <div className="logo-box centerize shiro_logo_container">
  <Image
    src="/assets/img/shiro_images/logo.png"
    alt="shiro_logo"
    height={30}
    width={300}
    style={{ height: "50px", width: "auto", cursor: "pointer" }}
  />
                                    </div>
                <div className="footer-main">
                    <div>
                            <div className="number-box centerize footer_content">
                                            <span style={{color: "#ffffff"}}>TL: 1447657</span>
                                            <span style={{color: "#ffffff", marginLeft: 30, marginRight: 30}}>|</span>
                                            <span style={{color: "#ffffff"}}>RERA: 47486</span>
                                        </div>
                        <p className="footer_content_middle">
                            &copy; {currentYear} Shiro Estate. All Rights reserved.
                        </p>
                        <p className="footer_content_middle">
                           Disclaimer: We are an officially authorized channel partner of the respective Dubai property developers featured on this website. All information provided, including project details, prices, and availability, is for general information purposes only and is subject to change without notice. The images and visual representations used on this landing page are for illustration purposes only and may not accurately reflect the actual properties. For the latest project details, please contact us directly or refer to the official developer sources.
                        </p>
                        <div className="footer_link_container">
                            <a className="footer_link" href="https://www.shiroestate.ae/privacy-policy" target="_blank">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
