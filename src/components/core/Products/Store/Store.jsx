import style from './Store.module.css'
import storeData from '@/assets/data/store.js'
import Image from 'next/image'

export default function Store() {
    return (
        <div className={style.container}>
            <section className={style.section}>
                {/* Header */}
                <div className={style.header}>
                    <h5>OUR MENU</h5>
                    <h2>
                        DISCOVER A COLLECTION OF <br />
                        <span>MULTIPLE JAGGERY</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className={style.grid}>
                    {storeData.slice(0, 5).map((data, index) => (
                        <div className={style.card} key={index}>
                            {/* Ribbon */}
                            {data.offer && (
                                <div className={style.ribbon}>
                                    <span>{data.offer}</span>
                                </div>
                            )}

                            {/* Image Container */}
                            <div className={style.imageContainer}>
                                <div className={style.imageWrap}>
                                    <Image src={data.image} alt={data.heading} fill />
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className={style.content}>
                                {/* Title */}
                                <h3 className={style.heading}>{data.heading}</h3>

                                {/* Description */}
                                <p className={style.description} style={{ fontWeight: index === 2 || index === 3 ? '600' : '500' }}>{data.description}</p>

                                {/* Pricing table or MRP */}
                                {data.table && (
                                    <table className={style.priceTable}>
                                        <thead>
                                            <tr>
                                                <th style={{ color: '#0EACC3' }}>Pack size</th>
                                                <th>5kg</th>
                                                <th>10kg</th>
                                                <th>25kg</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ color: '#0EACC3' }}>MRP</td>
                                                {data.map.map((p, i) => (
                                                    <td key={i}>₹{p}</td>
                                                ))}
                                            </tr>
                                            <tr className={style.discountRow}>
                                                <td>Discount</td>
                                                {data.discount.map((p, i) => (
                                                    <td key={i}>₹{p}</td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                )}
                                {data.cutPrice && <h6 className={style.cutPrice}>{data.cutPrice}</h6>}

                                {data.cta && <button className={style.cta}>{data.cta}</button>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}