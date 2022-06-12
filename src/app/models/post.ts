export class Post {
    id?: number;
    title: string;
    body: string;
    vote: number;

    constructor(){
        this.id = 1;
        this.title = '';
        this.body = '';
        this.vote = 0;
    }
}