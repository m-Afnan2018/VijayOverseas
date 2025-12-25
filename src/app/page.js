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
        </div>
    );
}
