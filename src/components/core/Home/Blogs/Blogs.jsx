import style from './Blogs.module.css'
import image1 from '@/assets/images/home/blog1.jpg'
import image2 from '@/assets/images/home/blog2.jpg'
import image3 from '@/assets/images/home/blog3.jpg'
import folder from '@/assets/images/home/folder.svg'
import Image from 'next/image'

const blogs = [
    {
        type: "Jaggery",
        image: image1,
        title: "Why Jaggery Is Healthier Than Refined Sugar",
    },
    {
        type: "Jaggery",
        image: image2,
        title: "Health Benefits of Jaggery You Should Know",
    },
    {
        type: "Jaggery",
        image: image3,
        title: "How Traditional Jaggery Is Made Naturally",
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
