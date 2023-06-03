import { NextApiRequest, NextApiResponse } from "next";

export const API_URL = "http://localhost:3001";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const feedback = req.body;

    const response = await fetch(`${API_URL}/feedback`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(feedback),
    });
    if (response) {
      res.status(201).json({ message: "Success!", feedback: feedback });
    }
  } else if (req.method === "GET") {
    await fetch(`${API_URL}/feedback`)
      .then((response) => response.json())
      .then((data) => res.status(200).json(data))
      .catch((error) => {
        console.error(error);
        res.status(400).json({ feedback: [] });
      });
  }
}

export const getFeedbacks = async () => {
  const response = await fetch(`${API_URL}/feedback`);
  const feedbacks = await response.json();
  return feedbacks;
};

export const findFeedbak = async (id: number) => {
  const response = await fetch(`${API_URL}/feedback/${id}`);
  const feedback = await response.json();
  return feedback;
};
