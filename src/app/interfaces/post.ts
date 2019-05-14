export interface Post {
    _id:       string;
    title:     string;
    content:   string;
    userId:    string;
    createdAt: string;
    updatedAt: string;
    __v:       number;
    posters: Poster;
}

export interface Poster {
    url: string
}