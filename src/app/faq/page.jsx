import Header from "@/components/core/FAQ/Header/Header";
import FAQ from "@/components/core/Home/FAQ/FAQ";

export const metadata = {
    title: "FAQ",
    description:
        "Frequently asked questions about our jaggery products, export process, and quality standards.",
};

export default function Faq() {
    return (
        <section>
            <Header />
            <FAQ />
        </section>
    )
}