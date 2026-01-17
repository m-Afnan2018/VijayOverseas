import Header from "@/components/core/Choose/Header/Header"
import Reason from "@/components/core/Choose/Reasons/Reasons"

export const metadata = {
    title: "Why Choose Us",
    description:
        "Discover why global buyers trust Vijay Overseas for quality, consistency, and ethical sourcing.",
};

export default function ChooseUs() {
    return (
        <section>
            <Header />
            <Reason />
        </section>
    )
}