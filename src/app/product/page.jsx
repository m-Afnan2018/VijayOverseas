import FAQ from "@/components/core/Home/FAQ/FAQ";
import Header from "@/components/core/Products/Header/Header";
import InformationBlock from "@/components/core/Products/InformationBlock/InformationBlock";
import Store from "@/components/core/Products/Store/Store";

export const metadata = {
    title: "Our Products",
    description:
        "Explore our range of premium jaggery products including bricks, cubes, and fusion cubes.",
};


export default function Product() {
    return (
        <section>
            <Header />
            <Store />
            <FAQ />
        </section>
    )
}