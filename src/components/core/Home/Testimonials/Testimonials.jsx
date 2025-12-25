import Image from 'next/image'
import style from './Testimonials.module.css'

import quoteIcon from '@/assets/images/home/quote.svg'

const reviews = [
    {
        review: "",
        author: ""
    },
    {
        review: "",
        author: ""
    },
    {
        review: "",
        author: ""
    },
]

export default function Testimonials(){
    return <section>
        <h5>testimonials</h5>
        <h2>What Our Customers Say</h2>
        <div>
            {reviews.map((r, index)=>{
                return <div key={index}>
                    <div>
                        <Image src={quoteIcon} alt='quoteIcon'/>
                        <p>{r.review}</p>
                    </div>
                    <h3>{r.author}</h3>
                </div>
            })}
        </div>
    </section>

}