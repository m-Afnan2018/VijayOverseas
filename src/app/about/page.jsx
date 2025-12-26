import Header from "@/components/core/About/Header/Header";
import Jaggery from "@/components/core/Blogs/Jaggery/Jaggery";
import OurStory from "@/components/core/Blogs/OurStory/OurStory";
import Serve from "@/components/core/Blogs/Serve/Serve";
import FAQ from "@/components/core/Home/FAQ/FAQ";


export default function About() {
    return <section>
        <Header />
        <OurStory />
        <Jaggery />
        <Serve />
        <FAQ />
    </section>
}