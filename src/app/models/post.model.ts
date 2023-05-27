export interface post {
    id: number;
    title: string;
    body: string;
}

export interface VM {
    posts: post[]
}