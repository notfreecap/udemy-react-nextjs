import { FormEvent, useRef, useState } from "react";

export type feedback = {
  id?: number;
  email: string;
  feedback: string;
};

export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState<feedback[]>([]);
  const email = useRef<HTMLInputElement>(null);
  const feedback = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!email && !feedback) {
      return;
    }

    const newFeedback = {
      email: email.current?.value,
      feedback: feedback.current?.value,
    };

    fetch("/api/feedback", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const updateFeedbacks = () => {
    fetch("/api/feedback")
      .then((res: any) => res.json())
      .then((data) => {
        setFeedbackItems(data);
      });
  };

  return (
    <div>
      <h1>Hi</h1>
      <div>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email">Your email address</label>
            <input type="text" id="email" ref={email} />
          </div>
          <div>
            <label htmlFor="feedback">Your feedback</label>
            <textarea id="feedback" ref={feedback}></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
      <hr />
      <button onClick={updateFeedbacks}>Load feedbacks?</button>
      {feedbackItems?.map((item) => {
        return (
          <ul>
            <li key={Math.floor(Math.random() * 999999999999)}>{item.id}</li>
            <li key={Math.floor(Math.random() * 999999999999)}>{item.email}</li>
            <li key={Math.floor(Math.random() * 999999999999)}>
              {item.feedback}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
