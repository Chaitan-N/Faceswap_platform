import TrainModelZone from "@/components/TrainModelZone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function Index() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        id="train-model-container"
        className="flex flex-1 flex-col gap-2 px-2">
        <Link href="/overview" className="text-sm w-fit">
          <Button className="bg-sky-600 hover:bg-sky-700">
            <FaArrowLeft className="mr-2" />
            Terug
          </Button>
        </Link>
        <Card>
          <CardHeader>
            <CardTitle>Begin jouw fotosessie</CardTitle>
            <CardDescription>
              Kies een naam, een type en upload enkele foto's om aan de slag te
              gaan.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <TrainModelZone />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
