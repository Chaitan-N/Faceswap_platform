"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import disposableDomains from "disposable-email-domains";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { WaitingForMagicLink } from "./WaitingForMagicLink";

type Inputs = {
  email: string;
};

export const Login = ({
  host,
  searchParams,
}: {
  host: string | null;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const supabase = createClientComponentClient<Database>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMagicLinkSent, setIsMagicLinkSent] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      await signInWithMagicLink(data.email);
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Email verzonden",
          description: "Check in je inbox voor de  magic link om in te loggen.",
          duration: 5000,
        });
        setIsMagicLinkSent(true);
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Er is iets fout gegaan",
        variant: "destructive",
        description:
          "Probeer het nog eens, wanneer het niet lukt, neem dan contact met ons op",
        duration: 5000,
      });
    }
  };

  let inviteToken = null;
  if (searchParams && "inviteToken" in searchParams) {
    inviteToken = searchParams["inviteToken"];
  }

  const protocol = host?.includes("localhost") ? "http" : "https";
  const redirectUrl = `${protocol}://${host}/auth/callback`;

  console.log({ redirectUrl });

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
      },
    });

    console.log(data, error);
  };

  const signInWithMagicLink = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUrl,
      },
    });

    if (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  if (isMagicLinkSent) {
    return (
      <WaitingForMagicLink toggleState={() => setIsMagicLinkSent(false)} />
    );
  }

  return (
    <>
      {" "}
      <div className="  px-8 text-xl text-center">
        <h1 className="font-bold text-3xl pb-6">
          👋 Hallo fijn dat je er bent!
        </h1>
        <div className="text-base">
          Vul je email in en we zenden je een
          <br />
          ✨magic link✨ waarmee je kunt inloggen. <br />
          Hierna kun je credits kopen en beginnen met je fotosessie{" "}
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col gap-4  dark:bg-neutral-900 border border-200 p-4 rounded-xl max-w-sm w-full">
          <h1 className="text-base font-semibold	">Inloggen/ Registeren</h1>
          <p className=" opacity-60">Login of registreer om te beginnen. </p>
          <p className="font-semibold	">Email</p>
          {/* <Button
            onClick={signInWithGoogle}
            variant={"outline"}
            className="font-semibold"
          >
            <AiOutlineGoogle size={20} />
            Continue with Google
          </Button>
          <OR /> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="jij@voorbeeld.com"
                  {...register("email", {
                    required: true,
                    validate: {
                      emailIsValid: (value: string) =>
                        /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ||
                        "Please enter a valid email",
                      emailDoesntHavePlus: (value: string) =>
                        /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ||
                        "Email addresses with a '+' are not allowed",
                      emailIsntDisposable: (value: string) =>
                        !disposableDomains.includes(value.split("@")[1]) ||
                        "Please use a permanent email address",
                    },
                  })}
                />
                {isSubmitted && errors.email && (
                  <span className={"text-xs text-red-400"}>
                    {errors.email?.message || "Email is required to sign in"}
                  </span>
                )}
              </div>
            </div>

            <Button
              isLoading={isSubmitting}
              disabled={isSubmitting}
              variant="outline"
              className="bg-sky-600 border rounded-full  h-12 px-6 m-2 text-lg text-white"
              type="submit">
              Versturen
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export const OR = () => {
  return (
    <div className="flex items-center my-1">
      <div className="border-b flex-grow mr-2 opacity-50" />
      <span className="text-sm opacity-50">OR</span>
      <div className="border-b flex-grow ml-2 opacity-50" />
    </div>
  );
};
