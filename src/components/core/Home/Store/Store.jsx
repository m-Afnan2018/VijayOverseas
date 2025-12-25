import style from './Store.module.css'
import storeData from '@/assets/data/store.js'
import Image from 'next/image'

export default function Store() {
    return (
        <section className={style.section}>
            <h5>our menu</h5>
            <h2>
                Discover a collection of <br/><span>MULTIPLE JAGGERY</span>
            </h2>

            <button className={style.viewAll}>view all menu</button>

            <div className={style.grid}>
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
            </div>
        </section>
    );
}
