import { Component, Input } from '@angular/core';
import { entry } from '../blog-entry';
import { test } from '../blog/blog.component';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent {

  post: entry = {
    id: '1',
    title: 'First Entry',
    content: 'This is the first entry',
    tags: ['first', 'entry'],
    author: 'John Doe',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'This is the first entry'
  };

  @Input() id: string = "";
  postinfo = test.find((post) => post.id == this.id);
  formattedDate = "";

  ngOnInit(): void {
    this.postinfo = test.find((post) => post.id == this.id);
    this.formattedDate = this.postinfo? this.formatDate(this.postinfo.date) : "";
  }

  formatDate(date: string): string {
    let d = new Date(Number(date));
    //Get Month name
    let months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    return month + " " + d.getDate() + ", " + d.getFullYear();
  }

}
