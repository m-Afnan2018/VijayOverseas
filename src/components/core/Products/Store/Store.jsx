'use client'

import style from './Store.module.css'
import storeData from '@/assets/data/store.js'
import Image from 'next/image'
import FormPopup from '../../PopupForm/PopupForm';
import { useState } from 'react';

const openWhatsApp = (product) => {
    const phone = "919217848056"; // ← your WhatsApp number (no +, no spaces)

    const message = `
Hello, I am interested in this product:

Product: ${product.heading}
Description: ${product.description}

Please share more details.
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};

export default function Store() {

    const showTable = false;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className={style.container}>
            <FormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
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
                    {storeData.slice(0, 4).map((data, index) => (
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

                                {data.cta && <button className={style.cta} onClick={() => openWhatsApp(data)}>{data.cta}</button>}
                            </div>
                        </div>
                    ))}

                    <div className={style.card}>
                        {/* Image Container */}
                        <div className={style.imageContainer}>
                            <div className={style.imageWrap}>
                                <Image src={storeData[4].image} alt={storeData[4].heading} fill />
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className={style.content}>
                            {/* Title */}
                            <h3 className={style.heading}>{storeData[4].heading}</h3>

                            {/* Description */}
                            <p className={style.description} style={{ fontWeight: '600' }}>{storeData[4].description}</p>

                            {/* Pricing table or MRP */}
                            {showTable ? (
                                <table className={style.priceTable}>
                                    <thead>
                                        <tr>
                                            <th style={{ color: '#0EACC3' }}>Product Type</th>
                                            <th>FOB Price (₹/kg)</th>
                                            <th>CIF Price (₹/kg)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ color: '#0EACC3' }}>Brick</td>
                                            <td>₹125</td>
                                            <td>₹135</td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: '#0EACC3' }}>Cube</td>
                                            <td>₹135</td>
                                            <td>₹145</td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: '#0EACC3' }}>Fusion Cube</td>
                                            <td>₹150</td>
                                            <td>₹160</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : <button className={style.cta} onClick={() => setIsPopupOpen(true)}>View Price</button>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}