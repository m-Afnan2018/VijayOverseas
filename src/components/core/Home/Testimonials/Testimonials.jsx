import Image from 'next/image'
import style from './Testimonials.module.css'

import quoteIcon from '@/assets/images/home/quote.svg'

const reviews = [
    {
        review: "Vijay Overseas stands out for its consistency and professionalism. The quality is excellent, and their communication and packaging make them a reliable supplier.",
        author: "Rahul"
    },
    {
        review: "We were looking for a dependable Indian brand for natural jaggery, and Vijay Overseas delivered exactly what they promised. Clean quality and timely delivery. ",
        author: "Sunita"
    },
    {
        review: "From enquiry to delivery, Vijay Overseas handled everything smoothly. A trustworthy company with strong values and export-ready standards",
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