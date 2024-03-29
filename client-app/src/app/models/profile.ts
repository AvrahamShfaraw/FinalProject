import { User } from "./user";

export interface Profile {
    userName: string;
    desplayName: string;
    image?: string;
    bio?: string;
    followersCount: number;
    followingCount: number;
    following: boolean;
    photos?: Photo[];

}
export class Profile implements Profile {
    constructor(user: User) {
        this.userName = user.userName;
        this.desplayName = user.desplayName;
        this.image = user.image;

    }
}

export interface Photo {
    id: string;
    url: string;
    isMain: boolean;
}

export interface UserActivity {
    id: string;
    title: string;
    category: string;
    date: Date;
}