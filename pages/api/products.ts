import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "GET") {
    return res.status(405).end("Mehtod not allowed!");
  }

  const products = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=5");
  const json = await products.json();
  

  return res.status(200).json({
    success: true,
    data: json,
    message: "products fetched successfully.",
  });
};

export default handler;
