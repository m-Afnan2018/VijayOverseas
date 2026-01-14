import Header from "@/components/core/Blogs/Header/Header";
import Blogs from  "@/components/core/Blogs/Blogs/Blogs";
import AllBlogs from "@/components/core/Blogs/Blogs/AllBlogs";

export default function Blog() {
    return (
        <section>
            <Header />
            <AllBlogs/>
            <Blogs/>
        </section>
    )
}