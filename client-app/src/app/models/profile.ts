import { User } from "./user";

export interface Profile {
    userName: string;
    desplayName: string;
    image?: string;
    bio?: string;
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