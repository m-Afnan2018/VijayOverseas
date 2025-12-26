import style from './Reason.module.css'
import image1 from '@/assets/images/choose/reason1.jpg'
import image2 from '@/assets/images/choose/reason2.jpg'
import image3 from '@/assets/images/choose/reason3.jpg'
import image4 from '@/assets/images/choose/reason4.jpg'
import image5 from '@/assets/images/choose/reason5.jpg'
import Image from 'next/image'

const data = [
    {
        heading: "Pure, Chemical‑Free Jaggery",
        description: "Vijay Overseas focuses on jaggery that is free from sulphur, artificial colours, flavours and preservatives. The aim is to keep jaggery as close as possible to its traditional form so it retains its caramel‑like taste, natural colour and mineral profile. This makes it suitable for families, wellness‑focused consumers and brands that prefer clean‑label ingredients.",
        image: image1
    },
    {
        heading: "Sustainable, Modern Production",
        description: "Instead of relying on old open‑furnace methods that emit heavy smoke, waste fuel and consume large amounts of water, Vijay Overseas works with plants that use more efficient, lower‑emission technology. These units save fuel and water, cut down visible pollution and allow better temperature control, which helps preserve flavour and nutrition while reducing environmental impact.",
        image: image2
    },
    {
        heading: "Athlete‑Friendly, Everyday Friendly",
        description: "The product range is designed both for daily kitchen use and for performance needs. Jaggery cubes and bite‑sized pieces offer quick, natural energy for athletes before or during training, while bricks and blocks work well for traditional sweets and home cooking. Special gift boxes for disabled athletes reflect a commitment to inclusive, sustainable development in sports as well as nutrition.",
        image: image3
    },
    {
        heading: "Export‑Ready Reliability",
        description: "Vijay Overseas positions itself as a dependable partner for domestic bulk buyers and international importers. Consistent shapes and sizes, clear specifications, carton‑based packing (5 kg, 10 kg, 25 kg) and a transparent pricing framework make it easier for wholesalers, retailers and private‑label brands to plan, repack and distribute. The focus on documentation, hygiene and standardisation supports smooth export operations.",
        image: image4
    },
    {
        heading: "Values Rooted in Legacy",
        description: "The company is founded in loving memory of the founder’s father, whose values of integrity, hard work and humility shape every decision. Combined with the guiding idea of Vasudhaiva Kutumbakam—the world is one family—this legacy drives Vijay Overseas to treat farmers, partners and customers with long‑term respect, ensuring that growth benefits both people and planet.",
        image: image5
    },
]

export default function Reason() {
    return <section className={style.reasonSection}>
        {data.map((item, index) => (
            <div
                key={index}
                className={`${style.reasonItem} ${index % 2 === 1 ? style.reverse : ''}`}
            >
                <div className={style.textContent}>
                    <h2 className={style.heading}>{item.heading}</h2>
                    <p className={style.description}>{item.description}</p>
                </div>
                <div className={style.imageContent}>
                    <Image src={item.image} alt={item.heading} />
                </div>
            </div>
        ))}
    </section>
}