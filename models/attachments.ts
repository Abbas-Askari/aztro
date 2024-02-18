import mongoose from "mongoose";

const AttachmentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  size: {type: Number, required: true},
  url: {type: String, required: true}
});

const Attachment = mongoose.models.Attachment || mongoose.model("Attachment", AttachmentSchema);
export default Attachment;
