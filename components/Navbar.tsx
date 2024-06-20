import { AvatarIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  MenuIcon,
  CreditCard,
  ShieldQuestion,
  RssIcon,
  MailIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { Database } from "@/types/supabase";
import ClientSideCredits from "./realtime/ClientSideCredits";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const dynamic = "force-dynamic";

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: credits } = await supabase
    .from("credits")
    .select("*")
    .eq("user_id", user?.id ?? "")
    .single();

  return (
    <div className=" flex w-full px-4 lg:px-40 py-4  border-b text-center gap-8 justify-between ">
      <div className="flex gap-2 h-full ">
        <Link href="/">
          <h2 className=" font-medium  text-2xl items-center   flex">
            <Image src="/logo7.png" width={30} height={30} alt="Logo" />{" "}
            <span className="mt-1 ml-1 pb-1 px-2"> Sesiondefotos.ai</span>{" "}
          </h2>
        </Link>
      </div>
      <div className="md:block hidden  lg:ml-auto align-items: flex-end; flex justify-end">
        <Link href="/#Prijs">
          <Button variant={"ghost"}>Prijs</Button>
        </Link>
        <Link href="/#Faq">
          <Button variant={"ghost"}>Faq</Button>
        </Link>
        <Link href="/blog">
          <Button variant={"ghost"}>Blog</Button>
        </Link>
        <Link href="/contact">
          <Button variant={"ghost"}>Contact</Button>
        </Link>{" "}
      </div>
      {user && (
        <div className=" flex flex-row lg:ml-auto  gap-2 ">
          {stripeIsConfigured && (
            <Link href="/get-credits">
              <Button variant={"ghost"}>Credits kopen</Button>
            </Link>
          )}
        </div>
      )}
      <div className=" flex gap-4 lg:ml-auto scroll-smooth">
        {!user && (
          <Link href="/login" className="md:block hidden">
            <Button className="text-white bg-sky-600 hover:bg-sky-700 w-full border rounded-full">
              Inloggen / Registreren
            </Button>
          </Link>
        )}{" "}
        {user && (
          <div className="flex flex-row gap-4 text-center align-middle justify-center">
            {stripeIsConfigured && (
              <ClientSideCredits creditsRow={credits ? credits : null} />
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <AvatarIcon height={24} width={24} className="text-sky-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="text-primary text-center overflow-hidden text-ellipsis">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <form action="/auth/sign-out" method="post">
                  <Button
                    type="submit"
                    className="w-full text-left"
                    variant={"ghost"}>
                    Uitloggen
                  </Button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}{" "}
        <Sheet>
          <div className="bg-white md:hidden ">
            <SheetTrigger>
              <MenuIcon className="mr-2 mt-3" />
            </SheetTrigger>
            <div className="bg-white">
              <SheetContent className="w-[220px] h-[250px] p-1 text-align: leftsm:w-[240px]">
                {" "}
                <div className="overflow-anchor: none;">
                  <ul>
                    <li className="flex flex-col pt-4   ">
                      {" "}
                      <Link href="/prijs" className="items-cemter">
                        <Button
                          variant={"ghost"}
                          className="text-l	text-align: left">
                          Prijs
                        </Button>
                      </Link>
                      <Link href="/faq">
                        <Button variant={"ghost"} className="text-l	">
                          Faq
                        </Button>
                      </Link>
                      <Link href="/blog">
                        <Button variant={"ghost"} className="text-l	">
                          Blog
                        </Button>
                      </Link>{" "}
                      <Link href="/contact">
                        <Button variant={"ghost"} className="text-l	">
                          Contact
                        </Button>{" "}
                      </Link>{" "}
                      <SheetClose asChild>
                        {!user && (
                          <Link href="/login" className="pl-4 pt-4">
                            <Button className="bg-sky-600 hover:bg-sky-700 pl-4">
                              Inloggen / Registreren
                            </Button>
                          </Link>
                        )}
                      </SheetClose>
                    </li>
                  </ul>
                </div>{" "}
              </SheetContent>{" "}
            </div>
          </div>
        </Sheet>
      </div>
    </div>
  );
}
