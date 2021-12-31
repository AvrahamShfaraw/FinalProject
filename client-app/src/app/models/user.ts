export interface User {
    userName: string;
    desplayName: string;
    token: string;
    image?: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    desplayName?: string;
    userName?: string;


}