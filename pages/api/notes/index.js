import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/note";

dbConnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "GET":
			const { sortCategory, order } = req.query;
			try {
				const notes = await Note.find({}).sort({ importance: 1 });
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

		case "DELETE":
			try {
				const deletedNote = await Note.deleteOne({ _id: req.body });

				if (!deletedNote) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: {} });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		case "PUT":
			const { id, status } = req.body;
			const beforeUpdate = await Note.findByIdAndUpdate(id, {
				check: status,
			});
			if (beforeUpdate) {
				res.status(200).json({ success: true });
			} else {
				res.status(400).json({ success: false });
			}
			break;

		default:
			res.status(400).json({ success: false });
	}
};
