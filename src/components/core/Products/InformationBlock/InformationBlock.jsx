import Image from 'next/image';
import styles from './InformationBlock.module.css';
import image1 from '@/assets/images/product/block1.jpg'

export default function InformationBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h2> 1. JAGGERY BRICKS
                        <span> / BLOCKS</span>
                    </h2>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Product Name Ideas–</h2>
                        <ul className={styles.list}>
                            <li>Vijay Overseas Classic Jaggery Brick</li>
                            <li>Vijay Overseas Pure Desi Gur Block</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Description–</h2>
                        <p className={styles.description}>
                            Traditional rectangular bricks of unrefined jaggery, ideal for homes, sweet
                            makers and food manufacturers. The slow-cooked process keeps the rich
                            caramel taste and earthy aroma associated with authentic Indian gur while
                            offering predictable quality for large-scale use.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Pack Sizes–</h2>
                        <ul className={styles.list}>
                            <li>5 kg carton (minimum order)</li>
                            <li>10 kg carton</li>
                            <li>25 kg carton</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Use Cases–</h2>
                        <ul className={styles.list}>
                            <li>Household use (breaking pieces for chai, laddoos, kheer).</li>
                            <li>Halwai / bakery / confectionery production</li>
                            <li>Industrial recipes needing bulk jaggery input</li>
                        </ul>
                    </div>
                </div>
                <Image
                    src={image1}
                    alt="Sugarcane field with farmer"
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <Image
                    src={image1}
                    alt="Sugarcane field with farmer"
                    className={styles.image}
                />
                <div className={styles.textSection}>
                    <h2>2. Jaggery <span> Cubes & Bite‑Sized</span> Pieces
                    </h2>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Product Name Ideas–</h2>
                        <ul className={styles.list}>
                            <li>Vijay Overseas Classic Jaggery Brick</li>
                            <li>Vijay Overseas Pure Desi Gur Block</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Description–</h2>
                        <p className={styles.description}>
                            Traditional rectangular bricks of unrefined jaggery, ideal for homes, sweet
                            makers and food manufacturers. The slow-cooked process keeps the rich
                            caramel taste and earthy aroma associated with authentic Indian gur while
                            offering predictable quality for large-scale use.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Pack Sizes–</h2>
                        <ul className={styles.list}>
                            <li>5 kg carton (minimum order)</li>
                            <li>10 kg carton</li>
                            <li>25 kg carton</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Special Angle–</h2>
                        <ul className={styles.list}>
                            <li>Ideal for gyms, sports academies and wellness stores as a clean alternative to synthetic pre‑workout products.</li>
                            <li>Can be packed into smaller consumer pouches by B2B/private‑label buyers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}