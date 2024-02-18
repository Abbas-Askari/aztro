import mongoose from "mongoose"
import { UserType } from "./user"
import { AttachmentType } from "./attachment"

export type CommentType = {
  _id: mongoose.ObjectId,
  user: UserType,
  content: string,
  attachments?: AttachmentType[],
  repliedTo?: CommentType,
  likedBy: UserType[]
}