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
        name: 'Pastries Served',
        value: '12K+'
    }, {
        name: 'Happy Customers',
        value: '3.5K+'
    }, {
        name: 'Signature Recipes',
        value: '25+'
    }, {
        name: 'Years of Craft',
        value: '8+'
    }
]

export default function OurStory() {
    return (
        <section className={style.section}>
            <h5>our story</h5>
            <h2>
                Vijay Overseas was founded in <span>December 2025</span> with a simple
                vision: the world deserves honest, natural sweetness instead of
                over-refined sugar.
            </h2>

            <div className={style.storyGrid}>
                <div className={style.founder}>
                    <Image src={s1} alt="owner" />
                    <h3>Late. Mr Vijay Kumar</h3>
                </div>

                <div className={style.storyContent}>
                    <Image src={s2} alt="sugar" />
                    <p>
                        The company begins its journey with jaggery, India’s classic sweetener used for centuries in everyday meals, winter recipes and Ayurvedic home remedies. In Loving Memory of My Father, This company is founded in honour of my beloved father, whose values of integrity, hard work and humility guide every step of this journey. His legacy lives on through Vijay Overseas, shaping a culture of trust, purpose and excellence in how we source, produce and deliver every batch of jaggery.
                    </p>
                    <button>read more</button>
                </div>
            </div>

            <div className={style.stats}>
                {statsData.map((data, index) => (
                    <div key={index} style={{ borderLeft: index === 0 ? 'none' : '1px solid #6541182E' }}>
                        <h1>{data.value}</h1>
                        <h6>{data.name}</h6>
                    </div>
                ))}
            </div>

            <div className={style.vision}>
                <div>
                    <h5>Our Vision & Purpose</h5>
                    <p>
                        Vijay Overseas aims to become one of India’s leading exporters of pure, organic and Ayurveda‑aligned food products, starting with premium jaggery. The company is led by founder Somya Sharma, who is deeply committed to sustainable development and pure food production and supply. Inspired by the Indian ideal of Vasudhaiva Kutumbakam – “the world is one family” – we see every shipment of jaggery as nourishment for the global family and support for rural communities at home.
                    </p>
                </div>
                <Image src={s3} alt="gudh" />
            </div>
        </section>
    );
}
