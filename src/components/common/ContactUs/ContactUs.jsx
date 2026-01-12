import Image from "next/image";
import callIcon from "@/assets/images/common/phone.svg";
import messageIcon from "@/assets/images/common/mail.svg";
import style from "./ContactUs.module.css";

export default function ContactUs() {
    return (
        <section className={style.section}>
            <div className={style.wrapper}>
                {/* LEFT */}
                <div className={style.left}>
                    <h2>
                        Get In <span>Touch !</span>
                    </h2>

                    <p>
                        Experience the purity of nature with Vijay Overseas. Whether you&apos;re looking for premium jaggery for your home, bulk orders for your business, or export inquiries—we&apos;re here to help. Reach out today!
                    </p>

                    <div className={style.contactItem}>
                        <Image src={callIcon} alt="call-icon" />
                        <span>+91 +91 9217848056</span>
                    </div>

                    <div className={style.contactItem}>
                        <Image src={messageIcon} alt="message-icon" />
                        <span>info@vijayoverseas.com</span>
                    </div>
                </div>

                {/* RIGHT */}
                <form className={style.form} action="https://formsubmit.co/info@vijayoverseas.com" method="POST" >
                    <div className={style.row}>
                        <input type="text" name="firstName" placeholder="First Name" />
                        <input type="text" name="lastName"  placeholder="Last Name" />
                    </div>

                    <input type="email" name="email" placeholder="Email Address" />

                    <div className={style.row}>
                        <input type="text" name="contactNumber" placeholder="Contact No" />
                        <input type="text" name="zip code" placeholder="Zip/Postal" />
                    </div>

                    <textarea type="message" placeholder="Message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}
