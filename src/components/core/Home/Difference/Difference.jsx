import Image from 'next/image'
import mainImage from '@/assets/images/home/difference.svg'
import style from './Difference.module.css'

const infoData = [
    {
        heading: "Pure & Chemical‑Free ",
        description: "We deliver clean, authentic jaggery with no sulphur, preservatives, or artificial additives. Every batch reflects our commitment to honesty, purity, and consistent quality.",
    },
    {
        heading: "Sustainability‑Focused Sourcing –  ",
        description: "We work with efficient production partners that reduce smoke, fuel use, and water wastage. Our sourcing practices support environmental responsibility and long-term sustainability.",
    },
    {
        heading: "Export‑Ready Quality ",
        description: "Hygienic handling, reliable specifications, and professional packaging make our products suitable for both domestic and international markets with confidence.",
    },
    {
        heading: "Farmer & Community Centric ",
        description: "Each order supports rural livelihoods and encourages sustainable agriculture. We grow by empowering farmers and strengthening local communities.",
    },
]

export default function Difference() {
    return (
        <section className={style.section}>
            <div className={style.left}>
                <h1>
                    What Makes Vijay Overseas <span>Different</span>
                </h1>
                <Image src={mainImage} alt="difference" />
            </div>

            <div className={style.right}>
                {infoData.map((data, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <h2>{data.heading}</h2>
                            <p>{data.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}