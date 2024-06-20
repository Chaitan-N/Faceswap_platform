"use client"

import React from "react";



function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "791ff4c5-47a8-40df-87f4-81e4619d5086");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Je bericht is verstuurd");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-indigo-600 font-semibold">
                        Contact
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Kom in contact met ons                    </p>
                    <p>
                        We horen het graag! Vul onderstaand formulier in.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={onSubmit}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">

                        </div><div>
                            <label className="font-medium">
                                Naam

                            </label>
                            <input
                                type="text" name="name"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email" name="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="font-medium">
                                Bericht                            </label>
                            <textarea name="message" required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button className="w-full px-4 py-2 text-white font-medium  hover:bg-sky-700 bg-sky-600 active: hover:bg-sky-700 bg-sky-600 rounded-lg duration-150">

                            Versturen

                        </button>
                    </form>
                </div><span>{result}</span>
            </div>
        </main>
    )
} export default Contact
