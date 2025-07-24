import axios from "axios";
import { mapArrToUppercase } from "../mapArrToUppercase/mapArrToUppercase";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const titleArr = response.data.map((post: Post) => post.title);
    return mapArrToUppercase(titleArr);
  } catch (error) {
    console.log(error);
  }
};
