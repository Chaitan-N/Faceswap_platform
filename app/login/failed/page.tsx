import { LoginFail } from "./components/LoginFail";

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let errorMessage = "Something went wrong, please reach out to support.";

  if (searchParams?.err !== undefined) {
    const errorCode = searchParams["err"];
    switch (errorCode) {
      case "AuthApiError":
        errorMessage =
          "Oeps! Het lijkt erop dat je hebt geprobeerd de magische link te openen vanaf een ander apparaat of in een andere browser.";
        break;
      case "500":
        errorMessage = "Er is iets misgegaan. Neem contact op met support.";
        break;
    }
  }

  return (
    <div className="flex flex-col flex-1 w-full h-[calc(100vh-73px)]">
      <LoginFail errorMessage={errorMessage} />
    </div>
  );
}
