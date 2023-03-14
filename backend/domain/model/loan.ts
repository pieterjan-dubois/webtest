import {User} from "./user";

export class Loan {
    id?: number;
    title: string;
    author: string;
    begindate: Date;
    enddate: Date;
    user: User;

    constructor(title: string, author: string, begindate: Date, enddate: Date, user: User) {
        this.title = title;
        this.author = author;
        this.begindate = begindate;
        this.enddate = enddate;
        this.user = user;
    }

    static create({id, title, author, begindate, enddate, user}: {id?: number, title: string, author: string, begindate: Date, enddate: Date, user: User}): Readonly<Loan> {
        return {
            id,
            title,
            author,
            begindate,
            enddate,
            user
        } as const;
    }
}