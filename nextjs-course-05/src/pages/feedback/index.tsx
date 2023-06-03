import { useState } from "react";
import { getFeedbacks } from "../api/feedback";
import { feedback } from "../index";

type props = {
  feedback: feedback[];
};

const DetailFeedbackPage = (props: props) => {
  const [detail, setDetail] = useState<feedback>();
  const { feedback } = props;

  const showDetails = (id: any) => {
    fetch(`/api/feedback/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDetail(data));
  };

  return (
    <div>
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>
            {item.email}{" "}
            <button onClick={showDetails.bind(null, item.id)}>
              Show details
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        <li>
          <p>{detail?.email}</p>
          <p>{detail?.feedback}</p>
        </li>
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const feedback = await getFeedbacks();
  return {
    props: {
      feedback,
    },
  };
};

export default DetailFeedbackPage;
