import { Link } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function Topbar({name}) {
    const [dropdownOpen, setDropdownOpen] = useState(false); // State untuk mengontrol keadaan dropdown
    const dropdownTarget = useRef();

    // Fungsi untuk menampilkan atau menyembunyikan dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Mengubah keadaan dropdown
    };

    return (
        <div className="flex justify-between items-center cursor-pointer">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>

                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <div
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                    >
                        <img
                            src="/assets/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                            onClick={toggleDropdown} // Mengubah state dropdown saat tombol avatar diklik
                        />
                    </div>
                    {/* Menerapkan kelas "hidden" untuk menyembunyikan dropdown */}
                    <div
                        className={`bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px]  overflow-hidden ${dropdownOpen ? "" : "hidden"}`}
                        ref={dropdownTarget}
                    >
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </a>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button" type="submit"
                            className="transition-all hover:bg-sky-100 p-4 text-start"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
                    .top-search {
                        background-image: url("/assets/icons/ic_search.svg");
                    }
                `}
            </style>
        </div>
    );
}
