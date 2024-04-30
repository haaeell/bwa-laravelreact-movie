import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button className="w-[10rem] mb-8" type="button">
                    Insert New Movie
                </Button>
            </Link>

            {flashMessage.message && (
                <FlashMessage message={flashMessage.message} />
            )}
        </Authenticated>
    );
}
