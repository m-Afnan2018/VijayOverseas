import Image from 'next/image'
import style from './Testimonials.module.css'

import quoteIcon from '@/assets/images/home/quote.svg'

const reviews = [
    {
        review: "I’ve tried many jaggery brands, but this one truly stands out. The taste is rich, natural, and reminds me of traditional homemade gud. Highly recommended!",
        author: "Rahul"
    },
    {
        review: "I switched from refined sugar to this jaggery and I can already feel the difference. Digestion is better and the quality is excellent. Will definitely reorder.",
        author: "Sunita"
    },
    {
        review: "I’ve tried many jaggery brands, but this one truly stands out. The taste is rich, natural, and reminds me of traditional homemade gud. Highly recommended!",
        author: "Rahul"
    },
]

export default function Testimonials() {
  return (
    <section className={style.section}>
      <h5>testimonials</h5>
      <h2>
        What Our <span>Customers</span> Say
      </h2>

      <div className={style.grid}>
        {reviews.map((r, index) => {
          return (
            <div className={style.card} key={index}>
              <div className={style.quote}>
                <Image src={quoteIcon} alt="quoteIcon" />
                <p>{r.review}</p>
              </div>
              <h3 className={style.author}>{r.author}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}