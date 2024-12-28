import type { UserType } from "./UserType";

export type PostType = {
    id?:  number;
    title?: string;
    body?: string;
    user_id?: number;
    question_id?: number;
    created?: string;
    resume?: string;
    user: UserType[];

}