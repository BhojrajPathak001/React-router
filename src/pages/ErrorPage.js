import { useRouteError } from "react-router";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function Errorpage() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "someting went wrong";
  console.log(error.status,"hello hello");
  if (error.status === 500) message = error.data.message;

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
