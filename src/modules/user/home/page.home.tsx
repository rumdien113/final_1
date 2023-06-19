import Learn from "../learn/page.learn"
import Share from "../share/page.share"

const HomePage = () => {
    return(
        <main className="bg-color-1">
            <Learn />
            <div className="relative">
                <div className="mt-10 flex flex-col space-y-20">
                    <p className="text-4xl font-extrabold text-start text-white absolute pl-40">Bài viết nổi bật</p>
                    <Share />
                </div>
            </div>
        </main>
    )
}

export default HomePage