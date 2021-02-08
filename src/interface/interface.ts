export interface RootObjectUser {
    user: User;
}
export interface RootObjectPost{
    post:[Post]
}
export interface User {
    id: string;
    name: string;
    avatar: string;
    username: string;
    email: string;
    password: string;
    surname: string;
    descriptionProfile: string;
    followers: number;
    followed: number;
    token :String;
}

export interface Post {
    id: string;
    userId: string;
    createdAt: Date;
    description: string;
    image: string;
    like: number;
}

export interface Comment {
    id: string;
    postId: string;
    createdAt: Date;
    message: string;
    likeMessage: number;
}


