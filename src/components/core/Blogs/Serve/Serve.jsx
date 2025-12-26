import Image from "next/image"
import serve from '@/assets/images/blogs/serve.jpg';
import tick from '@/assets/images/home/tick.png';
import style from "./Serve.module.css";

const infoData = [
    {
        description: "Expanding into other organic and Ayurveda‑inspired food products from India."
    },
    {
        description: "Developing sports‑oriented and wellness‑oriented jaggery lines, such as energy cubes and fusion variants."
    },
    {
        description: "Strengthening ties with disabled athletes, wellness initiatives and farmer clusters to ensure that growth remains inclusive and sustainable."
    },
]

export default function Serve() {
    return (
        <section className={style.section}>
            <h5>The Road Ahead</h5>
            <h2>
                Starting with jaggery is only the first chapter for Vijay Overseas. The <span>long‑term roadmap includes:</span>
            </h2>
            <div>
                <div className={style.left}>
                    <div className={style.list}>
                        {infoData.map((data, index) => {
                            return (
                                <div className={style.item} key={index}>
                                    <Image src={tick} alt="tick" />
                                    <p>{data.description}</p>
                                </div>
                            );
                        })}
                        <p style={{textAlign: 'left'}}>At its core, Vijay Overseas exists to prove that a business built on purity, sustainability and respect can compete globally while staying deeply rooted in Indian values.</p>
                    </div>
                </div>

                <div className={style.imageWrap}>
                    <Image src={serve} alt="serve" />
                </div>

            </div>
        </section>
    );
}