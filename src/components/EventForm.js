import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigation = useNavigation();
  const navigate = useNavigate();
  //jese loader ka data useLoaderData se nikalte hai same action k liye useActionData() function use kar skte hai
  const data = useActionData();

  console.log(data, "action data");
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    /*Yeh form kya krega ki form by default server ko request bhej deta hai wo request
      action pas jayega aab aur wo requset ke pas pura form ka data hoga */
    <Form method="post" className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          //name attribute hone jruri hai for using action and Form by react-router-dom kyuki data hum name se he retrieve krnge
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving...." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
