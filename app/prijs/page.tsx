import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title:
    "AI Portetfoto Prijzen | Betaalbare Bedrijfsoplossing | AiFotosessie.nl",

  description:
    " Ontdek de betaalbare prijzen van AiFotosessie.nl, de AI-app voor professionele portetfoto's voor je hele team. Bespaar op dure fotografen en creëer een consistente uitstraling. Bekijk pakketten & bespaar tijd en geld!",
};
export default function PricingSection() {
  return (
    <div className="w-full max-w-6xl mt-16 mb-16 p-8 rounded-lg space-y-8 ">
      <h2 id="Prijs" className="text-3xl max-w-6xl font-bold text-center mb-8">
        Professionele zakelijke portetfoto's voor iedereen{" "}
      </h2>
      <p className="text-xl max-w-6xl  text-center mb-8">
        Vernieuw je linkedin, update je cv, actualiseer de bedrijfswebsite of
        laat mooie portetfotos afdrukken.
      </p>
      <div className="flex flex-wrap justify-center lg:space-x-4 space-y-4 lg:space-y-0 items-stretch">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col border rounded-lg p-4 w-full lg:w-1/4 ${option.bgColor}`}>
            <div className="flex-grow space-y-4">
              <h3 className="text-2xl font-semibold text-center">
                {option.title}
              </h3>
              <p className="text-5xl font-bold text-center mb-2">
                {option.price}
              </p>
              <p className="text-sm text-gray-600 text-center">
                {option.description}
              </p>
              <ul className="space-y-2 mb-4 pl-4">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>{" "}
            </div>
            <div className="mt-10 text-center">
              <Link href="/login">
                {" "}
                <Button className="w-3/4 text-white hover:bg-sky-700 bg-sky-600">
                  {option.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pricingOptions = [
  {
    title: "Individueel",
    price: "29€",
    description:
      "Perfect voor personen die hun online aanwezigheid willen verbeteren.",
    features: [
      "1 individuele fotosessie",
      " 32 HD AI Foto's",
      "20+ stijlen",
      "Klaar in 20 minuten",
    ],
    buttonText: "Selecteer",
    bgColor: "bg-white",
  },
  {
    title: "Kleine teams",
    price: "59€ ",
    description:
      "Ideal voor kleine teams van 3 personen die hun online aanwezigheid willen verbeteren.",
    features: [
      "3 individuele fotosessies",
      " Ieder 32 HD AI Foto's",
      "20+ stijlen",
      "Klaar in 20 minuten",
    ],

    buttonText: "Selecteer ",
    bgColor: "bg-blue-50",
  },
  {
    title: "Teams",
    price: "99€",
    description:
      "Ideal voor teams van 5 personen die hun online aanwezigheid willen verbeteren.",
    features: [
      "5 individuele fotosessies",
      " Ieder 32 HD AI Foto's",
      "20+ stijlen",
      "Klaar in 20 minuten",
    ],
    buttonText: "Selecteer ",
    bgColor: "bg-white",
  },
];
