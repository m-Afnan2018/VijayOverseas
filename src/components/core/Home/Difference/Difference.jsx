import Image from 'next/image'
import mainImage from '@/assets/images/home/difference.svg'
import style from './Difference.module.css'

const infoData = [
    {
        heading: "Pure & Chemical‑Free ",
        description: "No sulphur, no preservatives, no artificial colours or flavours – just authentic jaggery in consistent shapes and sizes.",
    },
    {
        heading: "Sustainability‑Focused Sourcing –  ",
        description: "We work with modern, efficient plants that reduce smoke, fuel use and water wastage compared with traditional open‑furnace jaggery units.",
    },
    {
        heading: "Export‑Ready Quality ",
        description: "Hygienic handling, reliable specifications and professional packaging for both domestic buyers and international importers.",
    },
    {
        heading: "Farmer & Community Centric ",
        description: " Every order helps strengthen rural livelihoods and encourages more sustainable agriculture in India. ",
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