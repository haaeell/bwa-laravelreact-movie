import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import { data } from "flickity";
import Flickity from "react-flickity-component";

export default function Dashboard({auth, errors,movies, featuredMovies}) {
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
        <Authenticated 
            auth={auth}
        >
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
                    {featuredMovies.map((data) => (
                        <FeaturedMovie
                            key={data.id}
                            name={data.name}
                            category={data.category}
                            thumbnail={data.thumbnail}
                            rating={data.rating}
                            slug={data.slug}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px] " options={flickityOptions}>
                    {movies.map((data) => (
                       <MovieCard
                        key={data.id}
                        name={data.name}
                        category={data.category}
                        thumbnail={data.thumbnail}
                        slug={data.slug}
                       />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
