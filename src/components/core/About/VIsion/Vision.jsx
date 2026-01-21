import Image from 'next/image'
import styles from './Vision.module.css'
import vision1 from '@/assets/images/about/vision1.svg';
import vision2 from '@/assets/images/about/vision2.svg';
import vision3 from '@/assets/images/about/vision3.svg';

export default function Vision() {
    return <section className={styles.Vision}>
        <h2>Vision, Mission & <span>Philosophy</span></h2>

        <div className={styles.vennDiagram}>
            <div className={`${styles.circle} ${styles.visionCircle}`}>
                <h5>Vision</h5>
                <Image src={vision1} alt='vision' />
                <p>To establish Vijay Overseas as a globally trusted import–export company from India, recognized for reliability, compliance, and consistency in agricultural and food commodity trade. We envision building strong international trade bridges that connect Indian sourcing capabilities with global markets through structured operations and long‑term partnerships.</p>
            </div>

            <div className={styles.bottomCircles}>
                <div className={`${styles.circle} ${styles.missionCircle}`}>
                    <Image src={vision2} alt='mission' />
                    <h5>Mission</h5>
                    <p>Our mission is to manage import and export operations with precision, transparency, and accountability. Through structured sourcing, export‑ready quality systems, and compliant logistics, we strive to deliver consistent value to global buyers while strengthening supply networks across India. We are committed to ensuring reliability in every shipment and building trust through dependable trade execution.</p>
                </div>

                <div className={`${styles.circle} ${styles.philosophyCircle}`}>
                    <Image src={vision3} alt='philosophy' />
                    <h5>Guiding Philosophy</h5>
                    <p>Inspired by the principle of Vasudhaiva Kutumbakam — the belief that the world is one family — our guiding philosophy centers on ethical trade, responsible sourcing, and shared progress. We believe that successful international trade should create value for all stakeholders, including farmers, supply partners, global buyers, and the environment, while upholding integrity, fairness, and long‑term sustainability.</p>
                </div>
            </div>
        </div>
    </section>
}