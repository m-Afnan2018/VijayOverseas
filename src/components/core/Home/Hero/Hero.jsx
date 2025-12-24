import style from './Hero.module.css'

import heroMain from '@/assets/images/home/hero-main.jpg'
import hero1 from '@/assets/images/home/hero1.png'
import hero2 from '@/assets/images/home/hero2.jpg'
import hero3 from '@/assets/images/home/hero3.png'
import Image from 'next/image'

export default function Hero() {
    return (
        <section
            className={style.hero}
            style={{ backgroundImage: `url(${heroMain.src})` }}
        >
            <h2>welcome to Vijay Overseas</h2>
            <h3>Natural Jaggery from India – Vijay Overseas</h3>
            <h5>
                Vijay Overseas brings India’s most loved natural sweetness, jaggery (gur),
                to homes, athletes and businesses in India and across the world.
            </h5>
            <button>learn more</button>

            <div className={style.cards}>
                <div className={style.mainCard}>
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
                </div>

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
