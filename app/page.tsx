import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Faq from "@/components/Faq";
import hero2 from "/public/hero2.png";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Guia from "@/components/Guia";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div className="flex flex-col items-center pt-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold ">
            Sesión de fotos <br />
            usando IA✨
          </h1>
          <p className="text-gray-600 text-xl">
            Genere fotografías de retratos profesionales de negocios con calidad
            de estudio HD que son mucho más baratos y no requieren tiempo ni
            desplazamientos, fácilmente desde casa o trabajo.
          </p>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="border rounded-full  h-12 px-6 m-2 text-lg text-white bg-sky-600 hover:bg-sky-700 w-full lg:w-1/2">
                Iniciar sesión de fotos{" "}
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img
            src={hero2.src}
            alt="AI Headshot Illustration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <ExplainerSection />
      <PricingSection /> <Faq />
      <Guia />
    </div>
  );
}
