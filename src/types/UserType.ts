export type UserType =  {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    created?: string;
    description?: string;
    birth?: string | null; 
    followed?: UserType[];
    follower?: UserType[]; 
}