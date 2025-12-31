import style from './Vision.module.css'
import Image from "next/image";
import vision from '@/assets/images/home/vision.png'


export default function Vision() {
    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.content}>
                <h5>Our Vision & Mission</h5>
                <h2>BUILDING A GLOBAL BRIDGE OF PURE,<span>NATURAL FOOD</span></h2>

                <div className={style.block}>
                    <h3>🌟 Our Vision</h3>
                    <p>To become one of India&apos;s leading large-scale exporters of pure, organic and Ayurveda-aligned food products, showcasing the richness of Indian agriculture and traditional wisdom through honest, minimally processed foods.</p>
                    <p>We envision a world where natural, sustainable food from India nourishes families globally, creating prosperity for farmers and health for consumers.</p>
                </div>

                <div className={style.block}>
                    <h3>🎯 Our Mission</h3>
                    <p>
                        <span>• Start with Excellence:</span> Begin with jaggery as our flagship product, creating reliable formats for domestic and international markets.
                    </p>
                    <p>
                        <span>• Build Transparent Ecosystem:</span> Connect Indian farmers and sustainable manufacturing with global importers, retailers and brands.
                    </p>
                    <p>
                        <span>• Continuous Expansion:</span> Add more natural, organic and sustainable products while ensuring fair value for producers and safe nutrition for consumers.
                    </p>
                </div>
            </div>

            <div className={style.imageWrap}>
                <Image src={vision} alt="vision" />
            </div>
        </div>
    </section>
}