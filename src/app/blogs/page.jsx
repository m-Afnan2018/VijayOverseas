import Header from "@/components/core/Blogs/Header/Header";
import Blogs from "@/components/core/Blogs/Blogs/Blogs";
import AllBlogs from "@/components/core/Blogs/Blogs/AllBlogs";

export const metadata = {
    title: "Blogs",
    description:
        "Read articles and insights about jaggery, exports, health benefits, and industry trends.",
};

export default function Blog() {
    return (
        <section>
            <Header />
            <AllBlogs />
            <Blogs />
        </section>
    )
}