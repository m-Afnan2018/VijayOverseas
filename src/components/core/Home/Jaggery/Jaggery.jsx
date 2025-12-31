import Image from 'next/image';
import style from './Jaggery.module.css'
import jaggery from '@/assets/images/home/jaggery.png'
import trust from '@/assets/images/home/why1.svg'
import seal from '@/assets/images/home/why2.svg'
import youth from '@/assets/images/home/why3.svg'

const data = [
    {
        image: trust,
        heading: "Purpose-Driven Indian Brand",
        description: "Vijay Overseas was founded with a clear vision — to deliver honest, natural sweetness to the world. Inspired by strong family values of integrity, hard work, and humility, our brand stands for trust, transparency, and long-term commitment in everything we do."
    }, {
        image: seal,
        heading: "Quality You Can Rely On",
        description: "We follow strict quality standards across sourcing, processing, and packaging. From chemical-free production to hygienic handling, every batch is prepared to meet both Indian and international expectations — making Vijay Overseas a dependable partner for bulk and export buyers."
    }, {
        image: youth,
        heading: "Sustainable & People-Focused",
        description: "Vijay Overseas works closely with efficient production partners to reduce environmental impact while strengthening rural livelihoods. Guided by the philosophy of “Vasudhaiva Kutumbakam”, we believe every shipment supports not just customers worldwide, but communities at home."
    }
]

const image = jaggery;

export default function Jaggery() {
    return (
        <section className={style.section}>
            <h2>
                WHY CHOOSE VIJAY <span>OVERSEAS</span>?
            </h2>

            <div className={style.cards}>
                {data.map((value, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <Image src={value.image} alt="jaggery" />
                            <h3>{value.heading}</h3>
                            <p>{value.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
