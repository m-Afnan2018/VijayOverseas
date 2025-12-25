import Image from 'next/image';
import style from './Header.module.css'
import heroMain from '@/assets/images/about/hero.jpg'
import arrow from '@/assets/images/common/arrow.svg';

export default function Header() {
    return (
        <section
            className={style.header}
            style={{ backgroundImage: `url(${heroMain.src})` }}
        >
            <h2>Home <span><Image src={arrow} alt='arrow'/></span> About</h2>
            <h3>About Us</h3>
        </section>
    );
}
