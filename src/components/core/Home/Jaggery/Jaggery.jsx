import Image from 'next/image';
import style from './Jaggery.module.css'
import jaggery from '@/assets/images/home/jaggery.png'

const data = [
    {
        heading: "Traditional taste, real flavour",
        description: "Jaggery is slow‑cooked from fresh sugarcane juice, without refining or bleaching, preserving a deep caramel sweetness and warm, comforting notes that refined sugar can never offer."
    }, {
        heading: "Ayurveda‑aligned & mineral rich",
        description: "Unlike white sugar, jaggery retains iron, calcium, magnesium and trace minerals from sugarcane, and is traditionally used to support digestion, detox and seasonal wellness."
    }, {
        heading: "Perfect for daily life and sports",
        description: "Jaggery provides quick yet steady energy, making it ideal for tea, coffee, desserts and as a natural pre‑workout or mid‑workout booster for athletes and fitness enthusiasts. Vijay Overseas also prepares special jaggery gift boxes to support disabled athletes with clean, energy‑boosting nutrition"
    }
]

const image = jaggery;

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
                            <Image src={image} alt="jaggery" />
                            <h3>{value.heading}</h3>
                            <p>{value.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
