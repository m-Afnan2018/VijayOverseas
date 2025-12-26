import Image from 'next/image';
import style from './Jaggery.module.css'
import diamond from '@/assets/images/blogs/diamond.svg';
import recycle from '@/assets/images/blogs/recycle.svg';
import sprout from '@/assets/images/blogs/sprout.svg';
import earth from '@/assets/images/blogs/earth.svg';

const data = [
    {   
        icon: diamond,
        heading: "Purity & Authenticity",
        description: "Only natural jaggery, free from sulphur, artificial colours and preservatives. The focus is on preserving traditional taste and character while meeting modern quality expectations."
    },
    {   
        icon: recycle,
        heading: "Sustainable Sourcing",
        description: "Partnerships with units that favour resource‑efficient, lower‑emission technology over conventional smoke‑heavy furnaces, saving water, fuel and reducing environmental impact."
    },
    {   
        icon: sprout,
        heading: "Farmer & Community Focus",
        description: "Long‑term relationships with farming and production communities, aiming to create stable demand and better incomes through consistent export orders."
    },
    {   
        icon: earth,
        heading: "Global Quality, Indian Roots",
        description: "Export‑friendly formats, documentation and quality control, without losing the soul of Indian food. From packaging to logistics, the company is built to work smoothly with international buyers while keeping products authentically Indian."
    },
]

export default function Jaggery() {
    return (
        <section className={style.section}>
            <h5>Why Choose Jaggery?</h5>
            <h2>
                Why Choose <span>Jaggery?</span>
            </h2>

            <div className={style.cards}>
                {data.map((value, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <Image src={value.icon} alt="jaggery" />
                            <h3>{value.heading}</h3>
                            <p>{value.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
