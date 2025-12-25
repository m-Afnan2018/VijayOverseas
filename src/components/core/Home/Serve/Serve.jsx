import Image from "next/image"
import serve from '@/assets/images/home/serve.jpg';
import tick from '@/assets/images/home/tick.png';
import style from "./Serve.module.css";

const infoData = [
    {
        description: "Health‑conscious families seeking a better alternative to refined sugar."
    },
    {
        description: "Fitness enthusiasts and athletes wanting natural, fast‑acting energy."
    },
    {
        description: "Organic and natural food lovers who value clean‑label ingredients"
    },
    {
        description: "Bulk and export buyers looking for a dependable Indian partner for jaggery bricks, cubes and fusion variants."
    },
]

export default function Serve() {
    return (
        <section className={style.section}>
            <div className={style.left}>
                <h5>Who We Serve</h5>
                <h2>
                    Vijay Overseas is <span>designed for:</span>
                </h2>

                <div className={style.list}>
                    {infoData.map((data, index) => {
                        return (
                            <div className={style.item} key={index}>
                                <Image src={tick} alt="tick" />
                                <p>{data.description}</p>
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