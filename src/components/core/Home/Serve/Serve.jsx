import Image from "next/image"
import serve from '@/assets/images/home/serve.jpg';
import tick from '@/assets/images/home/tick.png';
import style from "./Serve.module.css";

const infoData = [
    {
        heading: "Health-Conscious Families: ",
        description: "Families looking for a clean, natural alternative to refined sugar for daily cooking, beverages, and traditional recipes."
    },
    {
        heading: "Fitness Enthusiasts & Athletes: ",
        description: "Individuals who prefer natural, fast-acting energy to support workouts, training, and active lifestyles."
    },
    {
        heading: "Organic & Natural Food Lovers: ",
        description: "Consumers who value clean-label ingredients, minimal processing, and honest sourcing."
    },
    {
        heading: "Bulk & Export Buyers: ",
        description: "Retailers, wholesalers, and international buyers seeking a dependable Indian partner for consistent jaggery supply."
    },
]

export default function Serve() {
    return (
        <section className={style.section}>
            <div className={style.left}>
                <h5>Who We Serve</h5>
                <h2>
                    Vijay Overseas is <br /><span>designed </span>for:
                </h2>

                <div className={style.list}>
                    {infoData.map((data, index) => {
                        return (
                            <div className={style.item} key={index}>
                                <Image src={tick} alt="tick" />
                                <p><span>{data.heading}</span>{data.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={style.imageWrap}>
                <Image src={serve} alt="serve" />
            </div>
        </section>
    );
}