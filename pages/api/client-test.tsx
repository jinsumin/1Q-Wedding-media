import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      name: "tester2",
      email: "tester2@naver.com",
    },
  });

  res.json({
    ok: true,
  });
}
