import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

// yeh dono ko clean rakhega app.js ko bhi aur jo function hai usko bhi
//yeh functon yeh route component k render hone se pehele he chal jayega aur componetn data ke sath he fetch hoga
export const loader = async () => {
  //react hook use ni kr skte hai kyuki yeh koi react component nhi hai
  const response = await fetch("http://localhost:8080/events  ");
  if (!response.ok) {
    // nearest error element throw krega yeh


    // throw new Response(JSON.stringify({ message: "Coult not fetch events" }), {
    //   status: 500,
    // });

    // or

    throw new json(
      { message: "Coult not fetch events" },
      {
        status: 500,
      }
    );



  } else {
    return response;
    //yaha par ek response object bhi return kr skte hai kyu ki react-router data extract kr leta hai apne aap resposne object se response =new Reponse()
    //bina json me convert kre bina kuch kre data extract kr deta hai react router dom .
  }
};
