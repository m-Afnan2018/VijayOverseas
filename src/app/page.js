import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/core/Home/Hero/Hero";
import OurStory from "@/components/core/Home/OurStory/OurStory";
import Jaggery from "@/components/core/Home/Jaggery/Jaggery";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero />
            <OurStory/>
            <Jaggery/>
        </div>
    );
}
