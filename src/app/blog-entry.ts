
export class entry {
    id: string;
    title: string;
    tags: string[];
    author: string;
    image: string;
    date: string;
    description: string;
    content: string;

    constructor(id: string, title: string, tags: string[], author: string, image: string, date: string, description: string, content: string) {
        this.title = title;
        this.tags = tags;
        this.author = author;
        this.image = image;
        this.date = date;
        this.description = description;
        this.content = content;
        this.id = id;
    }
}