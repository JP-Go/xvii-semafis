import type { NextApiRequest, NextApiResponse } from "next";

type indexResponse = {
  is_working: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<indexResponse>
) {
  return res.json({ is_working: true });
}
