import style from './Blogs.module.css'
import image1 from '@/assets/images/blogs/blog1.jpg'
import image2 from '@/assets/images/blogs/blog2.jpg'
import image3 from '@/assets/images/blogs/blog3.jpg'
import image4 from '@/assets/images/blogs/blog4.jpg'
import image5 from '@/assets/images/blogs/blog5.jpg'
import image6 from '@/assets/images/blogs/blog6.jpg'
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
        type: "Bread",
        image: image3,
        title: "How Traditional Jaggery Is Made Naturally",
    },
    {
        type: "Bread",
        image: image4,
        title: "Jaggery in Ayurveda: A Natural Source of Energy",
    },
    {
        type: "Pastries",
        image: image5,
        title: "Why Global Markets Are Choosing Indian Jaggery",
    },
    {
        type: "Pastries",
        image: image6,
        title: "Sustainable Farming Behind Every Block of Jaggery",
    },
]

export default function Blogs() {
    return (
        <section className={style.section}>
            <h5>blog post</h5>
            <h2>
                Latest posts and <span>insights</span>
            </h2>

            <div className={style.grid}>
                {blogs.map((blog, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <div className={style.imageWrap}>
                                <Image src={blog.image} alt={blog.title} />
                            </div>

                            <div className={style.content}>
                                <div className={style.meta}>
                                    <Image src={folder} alt="folder" />
                                    <h3>{blog.type}</h3>
                                </div>

                                <h4>{blog.title}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
