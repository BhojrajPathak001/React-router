import { json, redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem.js";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export const loader = async ({ request, params }) => {
  //request.url aise kuch krke query params yeh sab get kr skte hai url me se
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );
  if (!response.ok) {
    throw json(
      { message: "couldn't fetch the selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`,{
    method:request.method
  });
  
  if (!response.ok) {
    return json({ message: "could not delete the event" }, { status: 500 });
  }
  return redirect("/events");
}
