import style from './Blogs.module.css'
import image1 from '@/assets/images/home/blog1.jpg'
import image2 from '@/assets/images/home/blog2.jpg'
import image3 from '@/assets/images/home/blog3.jpg'
import folder from '@/assets/images/home/folder.svg'
import Image from 'next/image'

const blogs = [
    {
        type: "Recipes",
        image: image1,
        title: "Why Jaggery Is Healthier Than Refined Sugar",
    },
    {
        type: "Recipes",
        image: image2,
        title: "Health Benefits of Jaggery You Should Know",
    },
    {
        type: "Recipes",
        image: image3,
        title: "How Traditional Jaggery Is Made Naturally",
    },
]

export default function Blogs() {
    return <section>
        <h5>blog post</h5>
        <h2>Latest posts and insights</h2>
        <div>
            {blogs.map((blog, index) => {
                return <div key={index}>
                    <Image src={blog.image} alt={blog.title} />
                    <div>
                        <Image src={folder} alt={folder} />
                        <h3>{blog.type}</h3>
                    </div>
                    <h4>{blog.title}</h4>
                </div>
            })}
        </div>
    </section>
}