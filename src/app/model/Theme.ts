import { Post } from "./Post"

export class Theme {
    public id: number
    public description: string 
    public posts: Post[]
    public createdAt: Date
}