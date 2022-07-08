import { api } from "@services/api";
import { searchUserPath } from "../paths";
import { UserInfo } from "./types";


export async function searchUser(searchTherm: string) {
  return api.get<UserInfo>(searchUserPath.replace("{{userName}}", searchTherm));
}