import { IUser } from "../stores/AuthStore";
import { IComment } from "./comment";

export interface IPost {
  _id?: string;
  content: string;
  code: string;
  language: string;
  topicTag: string;
  author: IUser;
  comments?: IComment[];
  likes?: number;
}
