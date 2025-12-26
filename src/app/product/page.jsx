import FAQ from "@/components/core/Home/FAQ/FAQ";
import Header from "@/components/core/Products/Header/Header";
import InformationBlock from "@/components/core/Products/InformationBlock/InformationBlock";
import Store from "@/components/core/Products/Store/Store";


export default function Product() {
    return (
        <section>
            <Header />
            <InformationBlock />
            <Store />
            <FAQ />
        </section>
    )
}