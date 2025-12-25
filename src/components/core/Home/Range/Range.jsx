import style from './Range.module.css';

const infoData = [
    {
        heading: "Jaggery Bricks",
        description: "Blocks – Classic bricks for homes, mithai makers and food manufacturers.",
    },
    {
        heading: "Jaggery Cubes & Bite‑Sized Pieces",
        description: "Convenient portions for direct snacking, tea and coffee or sports use.",
    },
    {
        heading: "Fusion Jaggery Options",
        description: "Custom blends with ingredients like sesame, fennel, ginger and dry fruits, plus the option for buyers to request their own preferred variants.",
    },
    {
        heading: "Pack Sizes",
        description: "Bulk cartons starting from 5 kg (also available in 10 kg and 25 kg), ideal for Amazon buyers, retailers and wholesale customers.",
    },
]

export default function Range() {
    return (
        <section className={style.section}>
            <Box data={[infoData[0], infoData[1]]} showHeading={true} />
            <Box data={[infoData[2], infoData[3]]} showHeading={false} />
        </section>
    );
}


function Box({ showHeading, data }) {
    return (
        <div className={style.box}>
            {showHeading && <h4>Our Jaggery Range</h4>}

            {data.map((item, index) => (
                <div key={index} className={style.item}>
                    <h5>{item.heading}</h5>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
