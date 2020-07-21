import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/note";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const notes = await Note.find({});
        res.json({ notes: notes });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: true });
      }
      break;
    case "POST": 
      try {
        await Note.create(req.body);
        res.status(201).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default: 
      res.status(400).json({ success: false });
  }
}