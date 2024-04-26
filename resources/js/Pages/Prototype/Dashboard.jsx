import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px] " options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            name="Batman movie is god"
                            category={"Action"}
                            thumbnail={"/assets/images/featured-1.png"}
                            rating={i + 1}
                            slug={`batman ${i}`}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px] " options={flickityOptions}>
                    {[1,2,3,4,5,6].map(i => (
                       <MovieCard
                        key={i}
                        name={`Browse Movie ${i}`}
                        category={"Horror"}
                        thumbnail={"/assets/images/featured-1.png"}
                        slug={`browse ${i}`}
                       />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
