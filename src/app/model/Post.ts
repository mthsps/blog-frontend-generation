import { Theme } from "./Theme"
import { User } from "./User"

export class Post {
    public id: number
    public title: string
    public content: string
    public createAt: Date
    public updateAt: Date
    public user: User
    public theme: Theme
}