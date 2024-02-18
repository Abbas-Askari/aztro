import { HttpsUrl } from "./url"

export type UserType = {
  _id: mongoose.ObjectId,
  name: string,
  email: string,
  password: string,
  avatarLink: HttpsUrl,
  friends: UserType[]
}