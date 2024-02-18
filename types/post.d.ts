import mongoose from "mongoose"
import { UserType } from "./user"
import { AttachmentType } from "./attachment"
import { CommentType } from "./comment"

export type PostType = {
  _id: mongoose.ObjectId,
  user: UserType,
  caption: string,
  attachments: AttachmentType[],
  comments: CommentType[],
  likedBy: UserType[]
}