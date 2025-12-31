import style from './Store.module.css'
import storeData from '@/assets/data/store.js'
import Image from 'next/image'

export default function Store() {
    return (
        <section className={style.section}>
            <h5>Our Products</h5>
            <h2>
                EXPLORE OUR  <br /><span>PRODUCT RANGE</span>
            </h2>

            <p>Starting with premium jaggery, we&apos;re building a diverse portfolio of pure, natural food products from India. Click on any category to explore more</p>

            <div className={style.card}>
                <Image src={storeData[0].image} alt={storeData[0].heading} />
                <h3> jaggery</h3>
                <p className={style.description}>Pure, chemical-free jaggery in multiple formats—bricks, cubes, and fusion variants. Our flagship product bringing traditional sweetness to modern homes.</p>

                <div className={style.cardFooter}>
                    <button className={style.orderBtn}>Explore Jaggery</button>
                </div>
            </div>

            {/* <div className={style.grid}>
                {storeData.map((data, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <Image src={data.image} alt={data.heading} />
                            <h3>{data.heading}</h3>
                            <p className={style.description}>{data.description}</p>

                            <div className={style.cardFooter}>
                                <button className={style.orderBtn}>Order Now</button>
                                <span className={style.price}>{data.price}</span>
                            </div>
                        </div>
                    );
                })}
            </div> */}
        </section>
    );
}
