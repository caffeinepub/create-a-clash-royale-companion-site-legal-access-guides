import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DiscussionThread {
    id: bigint;
    title: string;
    content: string;
    author: Principal;
    timestamp: bigint;
    comments: Array<Comment>;
}
export interface Comment {
    id: bigint;
    content: string;
    parentCommentId?: bigint;
    children: Array<Comment>;
    author: Principal;
    timestamp: bigint;
}
export interface UserProfile {
    name: string;
}
export interface Feedback {
    name: string;
    email: string;
    message: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addComment(threadId: bigint, parentCommentId: bigint | null, content: string): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createThread(title: string, content: string): Promise<bigint>;
    getAllFeedback(): Promise<Array<Feedback>>;
    getAllThreads(): Promise<Array<DiscussionThread>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getThread(threadId: bigint): Promise<DiscussionThread | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitFeedback(name: string, email: string, message: string): Promise<void>;
}
