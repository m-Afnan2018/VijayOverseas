import style from './OurStory.module.css';
import story1 from '@/assets/images/home/story1.jpg'
import story2 from '@/assets/images/home/story2.jpg'
import story3 from '@/assets/images/home/story3.jpg'
import Image from 'next/image';

const s1 = story1;
const s2 = story2;
const s3 = story3;

const statsData = [
    {
        name: 'Pure & Natural ',
        value: '100%'
    }, {
        name: 'Satisfied Customers ',
        value: '500+'
    }, {
        name: 'Premium Variants',
        value: '6+'
    }, {
        name: 'ARTIFICIAL ADDITIVES',
        value: '0'
    }
]

export default function OurStory() {
    return (
        <section className={style.section}>
            <h5>our story</h5>
            <h2>
                FOUNDED IN LOVING <span>MEMORY</span>, DRIVEN BY PURPOSE
            </h2>

            <div className={style.storyGrid}>
                <div className={style.founder}>
                    <Image src={s1} alt="owner" />
                    <h3>Late. Mr Vijay Kumar</h3>
                </div>

                <div className={style.storyContent}>
                    <p>Vijay Overseas was founded in December 2025 with a simple yet powerful vision: the world deserves honest, natural sweetness instead of over-refined sugar.</p>

                    <h4>In Loving Memory of My Father</h4>
                    <p>his company is founded in honour of my beloved father, whose values of integrity, hard work and humility guide every step of this journey. His legacy lives on through Vijay Overseas, shaping a culture of trust, purpose and excellence in how we source, produce and deliver every batch.</p>
                    <h4>Founded by Somya Sharma</h4>
                    <p>Led by founder Somya Sharma, who is deeply committed to sustainable development and pure food production. Every decision we make is rooted in creating long-term value for farmers, communities, and customers worldwide.
                    </p>
                    <button>Explore Product</button>
                </div>
            </div>

            <div className={style.philosophy}>
                <h5>Our Philosophy</h5>
                <h2>VASUDHAIVA KUTUMBAKAM</h2>
                <h6>“The World is One Family”</h6>
                <p>Inspired by this ancient Indian ideal, we believe that nourishing people everywhere with clean, ethical food from India is both a business and a responsibility. Every product we ship serves not just customers, but farmers, communities, and the environment.
                    We are building a bridge between India&apos;s agricultural heritage and the world&apos;s dinner tables—with purity, sustainability, and respect at every step. </p>
            </div>

            <div className={style.stats}>
                {statsData.map((data, index) => (
                    <div key={index} style={{ borderLeft: index === 0 ? 'none' : '1px solid #6541182E' }}>
                        <h1>{data.value}</h1>
                        <h6>{data.name}</h6>
                    </div>
                ))}
            </div>
        </section>
    );
}
