// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         messages: [
//           { role: "system", content: "You are a helpful assistant." },
//           { role: "user", content: req.body.message },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );

//     res.status(200).json({ message: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// }
