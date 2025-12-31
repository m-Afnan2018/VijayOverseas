import style from './Hero.module.css'

import heroMain from '@/assets/images/home/hero-main.png'
import hero1 from '@/assets/images/home/hero1.png'
import hero2 from '@/assets/images/home/hero2.jpg'
import hero3 from '@/assets/images/home/hero3.png'
import Image from 'next/image'

export default function Hero() {
    return (
        <section
            className={style.hero}
            style={{ background: `radial-gradient(#81400e8a, #2f19085c), url(${heroMain.src})`, backgroundSize: 'cover' }}
        >
            <h2>welcome to Vijay Overseas</h2>
            <h3>PURE, ORGANIC & SUSTAINABLE FOODPRODUCTS FROM INDIA</h3>
            <h5>
                Bringing India&apos;s finest natural food products to the world. Starting with premium jaggery, we&apos;re committed to purity, sustainability, and traditional wisdom.
            </h5>
            <div className={style.buttons}>
                <button>Our Story</button>
                <button>Explore Product</button>
            </div>

            <div className={style.cards}>
                <div className={style.mainCard}>
                    <div className={style.mainCardContent}>
                        <h4>JAI SHREE KRISHNA</h4>
                        <p>
                            Honoring the legacy of Swargiya Vijay Kumar Ji, whose vision laid the foundation for Hans Heritage&apos;s commitment to purity, sustainability, and innovation in jaggery production.
                        </p>
                    </div>
                </div>
                {/* <div className={style.mainCard}>
                    <div className={style.mainCardContent}>
                        <h4>Where Every Bite Feels Special</h4>
                        <p>
                            Crafted from pure sugarcane juice and minimally processed, our
                            jaggery keeps its traditional caramel-like flavour, earthy aroma
                            and mineral richness – with no chemicals and no preservatives.
                        </p>
                    </div>
                    <div
                        className={style.mainCardMedia}
                        style={{ backgroundImage: `url(${hero1.src})` }}
                    >
                        ▶
                    </div>
                </div> */}

                <div className={style.sideImage}>
                    <Image src={hero2} alt="hero2" />
                </div>

                <div className={style.sideImage}>
                    <Image src={hero3} alt="hero3" />
                </div>
            </div>
        </section>
    );
}
