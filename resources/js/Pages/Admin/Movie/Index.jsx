import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="List of Movies" />
            <Link href={route("admin.dashboard.movie.create")}>
                <Button className="w-[10rem] mb-8" type="button">
                    Insert New Movie
                </Button>
            </Link>

            {flashMessage.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-center mt-3">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((data) => (
                        <tr key={data.id}>
                            <td>
                                <img
                                    src={`/storage/${data.thumbnail}`}
                                    className="w-32 rounded-md"
                                    alt=""
                                />
                            </td>
                            <td>{data.name}</td>
                            <td>{data.category}</td>
                            <td>{data.rating.toFixed(1)}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        data.id
                                    )}
                                >
                                    <Button type="button" variant="warning">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <div
                                    onClick={() => {
                                        data.deleted_at
                                            ? put(
                                                  route(
                                                      "admin.dashboard.movie.restore",
                                                      data.id
                                                  )
                                              )
                                            : destroy(
                                                  route(
                                                      "admin.dashboard.movie.delete",
                                                      data.id
                                                  )
                                              );
                                    }}
                                >
                                    <Button type="button" variant="danger">
                                        {data.deleted_at ? "Restore" : "Delete"}
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
