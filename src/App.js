/* we can use useLoaderData() in the element that's assigned to a route 
And in all components that might be used inside that element.*/

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage, {
  action as eventDeleteAction,
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventLayout from "./pages/EventLayout";
import { loader as eventsLoader } from "./pages/EventsPage";
import Errorpage from "./pages/ErrorPage";
import { loader as eventDetailLoader } from "./pages/EventDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            // react router dom loader async function jo promise return krta hai usko khud he resolve kr deta hai yiedl krke aur humko direct data milta hai
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            // agar aise loader use kr rha hai tou id deke useRouterLoaderData hook use krna padhta hai .Aur wo saare children me use kr skte hai
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDeleteAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
