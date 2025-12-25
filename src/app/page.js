import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/core/Home/Hero/Hero";
import OurStory from "@/components/core/Home/OurStory/OurStory";
import Jaggery from "@/components/core/Home/Jaggery/Jaggery";
import Store from "@/components/core/Home/Store/Store";
import Range from "@/components/core/Home/Range/Range";
import Difference from "@/components/core/Home/Difference/Difference";
import Serve from "@/components/core/Home/Serve/Serve";
import GetStarted from "@/components/core/Home/GetStarted/GetStarted";
import Testimonials from "@/components/core/Home/Testimonials/Testimonials";
import FAQ from "@/components/core/Home/FAQ/FAQ";
import Blogs from "@/components/core/Home/Blogs/Blogs";
import ContactUs from "@/components/common/ContactUs/ContactUs";
import Footer from "@/components/common/Footer/Footer";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero />
            <OurStory/>
            <Jaggery/>
            <Store/>
            <Range/>
            <Difference/>
            <Serve/>
            <GetStarted/>
            <Testimonials/>
            <FAQ/>
            <Blogs/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}
