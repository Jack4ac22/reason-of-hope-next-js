import axios from "axios";

export default async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch URL" });
  }
};
