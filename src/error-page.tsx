import { useRouteError } from "react-router-dom";
import { Center, Headline } from "./components";

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Center id="error-page">
      <Headline>Oops!</Headline>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Center>
  );
}
