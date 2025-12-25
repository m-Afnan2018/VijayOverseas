import Image from 'next/image';
import style from './Header.module.css'
import heroMain from '@/assets/images/choose/hero.jpg'
import arrow from '@/assets/images/common/arrow.svg';

export default function Header() {
    return (
        <section
            className={style.header}
            style={{ backgroundImage: `url(${heroMain.src})` }}
        >
            <h2>Home <span><Image src={arrow} alt='arrow' /></span> Why Choose Us</h2>
            <h3>Why Choose Us</h3>
        </section>
    );
}
