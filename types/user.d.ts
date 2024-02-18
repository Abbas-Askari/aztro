import mongoose from "mongoose"
import { HttpsUrl } from "./url"

export type UserType = {
  _id: mongoose.ObjectId,
  name: string,
  email: string,
  password: string,
  bio: string,
  avatarLink?: HttpsUrl,
  bannerLink?: HttpsUrl,
  friends: UserType[]
}