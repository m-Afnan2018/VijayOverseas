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
            <h3>Home <span><Image src={arrow} alt='arrow' /></span> Why Choose</h3>
            <h5>Why Choose Vijay Overseas</h5>
            <h2>Vijay Overseas is built on purity, <span>sustainability</span> and <span>trust</span>, bringing traditional Indian jaggery to <span>modern homes</span>, athletes and global buyers with professional export standards.​</h2>
        </section>
    );
}
