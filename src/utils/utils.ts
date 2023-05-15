import axios from "axios";
import { PostAdd } from "@/types";
import { AxiosResponse } from "axios";

export function showLinkDialog(id: any){
    
}

export function createPost(post: PostAdd): Promise<AxiosResponse<string>> {
    return axios.post("/api/post/create", post);
  }