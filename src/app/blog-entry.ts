
export class entry {
    title: string;
    tags: string[];
    author: string;
    image: string;
    date: Date;
    description: string;
    content: string;

    constructor(title: string, tags: string[], author: string, image: string, date: Date, description: string, content: string) {
        this.title = title;
        this.tags = tags;
        this.author = author;
        this.image = image;
        this.date = date;
        this.description = description;
        this.content = content;
    }

    setDateToNow() {
        this.date = new Date();
    }
}