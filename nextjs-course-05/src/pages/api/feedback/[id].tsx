import { NextApiRequest, NextApiResponse } from "next";
import { findFeedbak } from ".";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;

  if (!id) {
    return;
  }

  const feedback = await findFeedbak(+id);
  console.log(feedback);
  res.status(200).json(feedback);
}
