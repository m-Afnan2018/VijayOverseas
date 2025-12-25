import Image from "next/image";
import style from "./Footer.module.css";

import logo from "@/assets/images/logos/logo.svg";
import phone from "@/assets/images/common/phone.svg";
import mail from "@/assets/images/common/mail.svg";
import facebook from "@/assets/images/common/facebook.svg";
import twitter from "@/assets/images/common/twitter.svg";
import instagram from "@/assets/images/common/instagram.svg";
import linkedin from "@/assets/images/common/linkedin.svg";
import youtube from "@/assets/images/common/youtube.svg";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.top}>
                {/* COLUMN 1 */}
                <div className={style.col}>
                    <Image src={logo} alt="Vijay Overseas" className={style.logo} />
                    <p>
                        Vijay Overseas brings India’s most loved natural sweetness, jaggery
                        (gur), to homes, athletes and businesses in India and across the
                        world.
                    </p>

                    <div className={style.socials}>
                        <Image src={facebook} alt="facebook" />
                        <Image src={twitter} alt="twitter" />
                        <Image src={instagram} alt="instagram" />
                        <Image src={linkedin} alt="linkedin" />
                        <Image src={youtube} alt="youtube" />
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className={style.col}>
                    <h4>Get Started</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                    </ul>
                </div>

                {/* COLUMN 3 */}
                <div className={style.col}>
                    <h4>Resources</h4>
                    <ul>
                        <li>Why choose</li>
                        <li>Blogs</li>
                        <li>FAQs</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                {/* COLUMN 4 */}
                <div className={style.col}>
                    <h4>Contact Us</h4>
                    <div className={style.contact}>
                        <span>
                            <Image src={phone} alt="phone" /> +91-9217848056
                        </span>
                        <span>
                            <Image src={mail} alt="mail" /> info@vijayoverseas.com
                        </span>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className={style.bottom}>
                <p>
                    All Rights Reserved | <span>Terms and Conditions</span> |{" "}
                    <span>Privacy Policy</span>
                </p>
            </div>
        </footer>
    );
}
