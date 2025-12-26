import style from './Store.module.css'
import storeData from '@/assets/data/store.js'
import Image from 'next/image'

export default function Store() {
    return (
        <section className={style.section}>
            <h5>our menu</h5>
            <h2>
                Discover a collection of <br /><span>MULTIPLE JAGGERY</span>
            </h2>

            <button className={style.viewAll}>view all menu</button>

            <div className={style.grid}>
                {storeData.slice(0, 5).map((data, index) => {
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

                {/* Custom Column Card */}
                <div className={style.customCard}>
                    <div>
                        <h4>Custom Column–</h4>
                        <p>{'On enquiry/checkout forms, add a "Preferred Variant" field where buyers can specify:'}</p>
                        <ul>
                            <li>{'Cardamom, Tulsi, Coffee, Chocolate or other flavours'}</li>
                            <li>{'Combination blends like "Sesame–Fennel Fusion" or "Sports Mix (ginger + dry fruits)"'}</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Formats & Packs–</h4>
                        <ul>
                            <li>Available in cubes / bite-sized pieces and small bricks.</li>
                            <li>Supplied in <strong>5 kg, 10 kg and 25 kg</strong> cartons for re-packing or institutional use.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}