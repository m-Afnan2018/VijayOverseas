import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/core/Home/Hero/Hero";
import OurStory from "@/components/core/Home/OurStory/OurStory";
import Jaggery from "@/components/core/Home/Jaggery/Jaggery";
import Store from "@/components/core/Home/Store/Store";
import Difference from "@/components/core/Home/Difference/Difference";
import Serve from "@/components/core/Home/Serve/Serve";
import GetStarted from "@/components/core/Home/GetStarted/GetStarted";
import Testimonials from "@/components/core/Home/Testimonials/Testimonials";
import FAQ from "@/components/core/Home/FAQ/FAQ";
import Blogs from "@/components/core/Home/Blogs/Blogs";
import Vision from "@/components/core/Home/Vision/Vision";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero />
            <Vision />
            <OurStory />
            <Store />
            <Jaggery />
            <Difference />
            <Serve />
            <GetStarted />
            <Testimonials />
            <FAQ />
            <Blogs />
        </div>
    );
}
