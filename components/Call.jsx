import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import blocta from "/public/blogcta.png";


function Call() {
    return (
        <div>

            <div className=" text-black shadow-md  border-2 w-full">
                <div className="grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden">
                    <div className="relative w-full h-full">
                        <img src="/blogcta.png" className="w-full h-full object-cover shrink-0" />
                        <span className="w-full h-full absolute inset-0 bg-blue-600 opacity-50"></span>
                    </div>
                    <div className="p-6 max-w-xl  mx-auto">
                        <h1 className="sm:text-4xl text-2xl font-bold text-blue-500">Vandaag nog jouw fotosessie zonder gedoe?</h1>
                        <div className="mt-6">
                            <p className="text-m text-gray-300">Vergeet dure studio's en ongemakkelijke fotosessies!
                                Genereer professionele zakelijke portetfoto's met AiFotosessie.nl in HD studio kwaliteit die veel goedkoper zijn en geen tijd en reizen in beslag nemen, makkelijk vanaf thuis of je werk.
                            </p>

                        </div>
                        <Link href="/">
                            <Button className="border rounded-full  h-12 px-6 m-2 text-lg text-white bg-sky-600 hover:bg-sky-700 w-full lg:w-1/2">
                                Begin nu{" "}
                            </Button>
                        </Link>                    </div>
                </div>
            </div></div>
    )
}

export default Call