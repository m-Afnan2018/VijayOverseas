import Header from "@/components/core/About/Header/Header";
import Jaggery from "@/components/core/About/Jaggery/Jaggery";
import OurStory from "@/components/core/About/OurStory/OurStory";
import Serve from "@/components/core/About/Serve/Serve";
import FAQ from "@/components/core/Home/FAQ/FAQ";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Vijay Overseas, our mission, values, and commitment to delivering premium jaggery worldwide.",
};

export default function About() {
    return <section>
        <Header />
        <OurStory />
        <Jaggery />
        <Serve />
        <FAQ />
    </section>
}