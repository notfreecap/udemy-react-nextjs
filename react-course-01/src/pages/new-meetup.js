import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/new-meetup-form";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch("https://react-fe5d9-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log("meetup created", result);
        navigate("/");
      })
      .catch((error) => {
        throw new error();
      });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
