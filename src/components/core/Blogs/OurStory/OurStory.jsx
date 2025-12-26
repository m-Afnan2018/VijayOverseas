import style from './OurStory.module.css';
import story1 from '@/assets/images/blogs/story1.jpg'
import story2 from '@/assets/images/blogs/story2.jpg'
import story3 from '@/assets/images/blogs/story3.jpg'
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
            <h5>About Vijay Overseas</h5>
            <h2>
                Vijay Overseas is a food and agri‑export company from <span>India</span>
            </h2>

            <div className={style.storyGrid}>
                <div className={style.founder}>
                    <Image src={s1} alt="owner" />
                </div>

                <div className={style.storyContent}>
                    <Image src={s2} alt="sugar" />
                    <p>
                        dedicated to taking natural, organic and Ayurveda‑inspired products—starting with jaggery—to customers around the world. Founded in December 2025, the company focuses on clean‑label, minimally processed foods that preserve traditional Indian flavour, nutrition and wisdom.

                        This journey begins with jaggery (gur), India’s iconic natural sweetener made by slowly concentrating fresh sugarcane juice. Jaggery’s deep caramel sweetness, warm earthy notes and comforting aroma have seasoned Indian homes for generations, in everything from winter sweets and festive desserts to daily chai and homemade remedies. Vijay Overseas turns this age‑old staple into an export‑ready product line that serves modern homes, athletes and global buyers.
                    </p>
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
                    <h5>Founded in Loving Memory</h5>
                    <p>
                        Vijay Overseas is founded in loving memory of the founder’s father, whose values of integrity, hard work and humility shape every part of the business. His legacy lives on in the way the company treats farmers, team members and customers—building relationships based on trust, responsibility and long‑term commitment.
                        Every consignment of jaggery shipped, every new partnership formed and every athlete or family who chooses this natural sweetness is seen as a continuation of that legacy.
                    </p>
                </div>
                <Image src={s3} alt="gudh" />
            </div>
        </section>
    );
}
