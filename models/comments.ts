import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }],
  repliedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Comment = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
export default Comment;
