import { ObjectId } from "mongoose"

export default class User {
  constructor(public username: String, public password: String, public role: String, public id?: ObjectId) {}
}