import Authenticated from "@/Layouts/Authenticated/Index";

import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import { data } from "flickity";
import { Inertia } from "@inertiajs/inertia";

export default function Index({ auth,movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <InputError message={errors._all} className="mb-2" />
            <h1 className="text-xl">Update Movie: {movie.name}</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Enter the name of the movie"
                    handleChange={handleOnChange}
                    isError={!!errors.name}
                    errorMessage={errors.name}
                    isFocused={true}
                    defaultValue={movie.name}
                />
                 <InputLabel forInput="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Enter the category of the movie"
                    handleChange={handleOnChange}
                    isError={!!errors.category}
                    errorMessage={errors.category}
                    defaultValue={movie.category}
                    isFocused={true}
                />
                 <InputLabel forInput="video_url" value="Video URL" className="mt-4" />
                <Input
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    placeholder="Enter the video URL of the movie"
                    handleChange={handleOnChange}
                    isError={!!errors.video_url}
                    defaultValue={movie.video_url}
                    errorMessage={errors.video_url}
                    isFocused={true}
                />
                 <InputLabel forInput="thumbnail" value="Thumbnail" className="mt-4" />
                <img src={`/storage/${movie.thumbnail}`} alt="" className="w-40" />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Insert the Thumbnail of the movie"
                    handleChange={handleOnChange}
                    isError={!!errors.thumbnail}
                    errorMessage={errors.thumbnail}
                    isFocused={true}
                />
                 <InputLabel forInput="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    placeholder="Insert the rating of the movie"
                    handleChange={handleOnChange}
                    isError={!!errors.rating}
                    errorMessage={errors.rating}
                    isFocused={true}
                    defaultValue={movie.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                <InputLabel forInput="is_featured" value="Is Featured" className="mt-1 mr-3" />
                <Checkbox
                    name="is_featured"
                    handleChange={(e) => setData("is_featured", e.target.checked)}
                    checked={movie.is_featured}
                />

                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
