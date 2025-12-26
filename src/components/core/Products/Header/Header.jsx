import Image from 'next/image';
import style from './Header.module.css'
import heroMain from '@/assets/images/blogs/hero.jpg'
import arrow from '@/assets/images/common/arrow.svg';

export default function Header() {
    return (
        <section
            className={style.header}
            style={{ backgroundImage: `url(${heroMain.src})` }}
        >
            <h3>Home <span><Image src={arrow} alt='arrow' /></span> Products</h3>
            <h5>Our Jaggery Products</h5>
            <h2>Vijay Overseas offers a focused range of pure, chemical‑free jaggery products in consistent shapes and export‑friendly formats. All products are made from sugarcane juice without sulphur, artificial colours or preservatives, preserving traditional <span>flavour and natural minerals.</span>​</h2>
        </section>
    );
}
