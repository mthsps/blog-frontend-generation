import { Theme } from "./Theme"
import { User } from "./User"

export class Post {
    public id: number
    public title: string
    public content: string
    public createdAt: Date
    public updatedAt: Date
    public user: User
    public theme: Theme
}