import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import InputLabel from "@/Components/InputLabel";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError"; // Import the InputError component

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="assets/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="assets/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                {/* Full Name Input */}
                                <div>
                                    <InputLabel
                                        htmlFor="fullname"
                                        value="Full Name"
                                    />
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your Fullname"
                                        value={data.name}
                                        handleChange={handleOnChange}
                                        isError={!!errors.name}
                                        errorMessage={errors.name}
                                        required
                                    />
                                </div>
                                {/* Email Input */}
                                <div>
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={data.email}
                                        handleChange={handleOnChange}
                                        isError={!!errors.email}
                                        errorMessage={errors.email}
                                        required
                                    />
                                </div>
                                {/* Password Input */}
                                <div>
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={data.password}
                                        handleChange={handleOnChange}
                                        isError={!!errors.password}
                                        errorMessage={errors.password}
                                        required
                                    />
                                </div>
                                {/* Confirm Password Input */}
                                <div>
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Enter your password"
                                        value={data.password_confirmation}
                                        handleChange={handleOnChange}
                                        isError={!!errors.password_confirmation}
                                        errorMessage={errors.password_confirmation}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    processing={processing}
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                {/* Link to Login Page */}
                                <Link href={route("login")}>
                                    <Button type="button" variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
