import { Component } from '@angular/core';
import { entry } from '../blog-entry';

export const test: entry[] = [
  {
    title: 'Test Title 1 probando',
    id: 'test1',
    tags: ['tag1', 'tag2'],
    author: 'Lucas Vidmar',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore.',
    content: `<h1><span style="font-family:Arial,Helvetica,sans-serif">Hola como estas todo bien que hacias</span></h1>

    <table border="1" cellpadding="1" cellspacing="1" style="width:500px">
      <tbody>
        <tr>
          <td>Esto</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>es</td>
          <td>prueba</td>
        </tr>
        <tr>
          <td>una</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    
    <p style="text-align:right">Probando</p>
    
    <p style="text-align:center"><a href="https://picsum.photos/200/300"><img alt="" src="https://picsum.photos/200/300" style="float:left" /></a></p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center">&Ntilde;</p>
    `

  },
  {
    title: 'Test Title 2',
    id: 'test2',
    tags: ['tag1', 'tag3'],
    author: 'Lucas Vidmar',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore.',
    content: 'Lorem ipsum dolor prueba sit amet consectetur adipisicing elit. Laudantium ullam tempore qui suscipit totam dicta voluptate optio, itaque reprehenderit dolorem. Consectetur quis, minus provident perferendis deleniti vel ab maiores cum!'
  },
  {
    title: 'Test Title 3',
    id: 'test3',
    tags: ['tag1', 'tag4'],
    author: 'Lucas Vidmar',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'Lorem ipsum dolor sit amet probation consectetur adipisicing elit. Omnis, tempore.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam tempore qui suscipit totam dicta voluptate optio, itaque reprehenderit dolorem. Consectetur quis, minus provident perferendis deleniti vel ab maiores cum!'
  },
  {
    title: 'Test Title 4',
    id: 'test4',
    tags: ['tag1', 'tag0'],
    author: 'Lucas Vidmar',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam tempore qui suscipit totam dicta voluptate optio, itaque reprehenderit dolorem. Consectetur quis, minus provident perferendis deleniti vel ab maiores cum!'
  },
  {
    title: 'Test Title 5',
    id: 'test5',
    tags: ['tag1', 'tag0'],
    author: 'Lucas Vidmar',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam tempore qui suscipit totam dicta voluptate optio, itaque reprehenderit dolorem. Consectetur quis, minus provident perferendis deleniti vel ab maiores cum!'
  },
  {
    title: 'Test Title 6',
    id: 'test6',
    tags: ['tag1', 'tag2'],
    author: 'Lucas Vidmar',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam tempore qui suscipit totam dicta voluptate optio, itaque reprehenderit dolorem. Consectetur quis, minus provident perferendis deleniti vel ab maiores cum!'
  },
  {
    title: 'Test Title 7',
    id: 'test7',
    tags: ['tag1', 'tag2'],
    author: 'Lucas Vidmar',
    image: 'https://picsum.photos/200/300',
    date: Date.now().toString(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam tempore qui suscipit totam dicta voluptate optio, itaque reprehenderit dolorem. Consectetur quis, minus provident perferendis deleniti vel ab maiores cum!'
  }
]

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  searchtext: string = '';
  loadedCards: entry[] = [];
  loadNumber: number = 5;
  tags: {
    tag: string,
    selected: boolean,
    weight: number
  }[] = [];

  searchbox(ev: any){
    this.searchtext = ev.target.value;
    this.filter();
  }

  ngOnInit(): void {
    //Get tags from blog entries
    test.forEach((entry) => {
      entry.tags.forEach((tag) => {
        let found = false;
        this.tags.forEach((t) => {
          if (t.tag == tag) {
            found = true;
            t.weight++;
          }
        });
        if (!found) {
          this.tags.push({
            tag: tag,
            selected: false,
            weight: 1
          });
        }
      });
    });

    //Get 5 blog entries to display, sorted by date
    this.loadedCards = test.sort((a, b) => {
      return parseInt(b.date) - parseInt(a.date);
    }).slice(0, this.loadNumber);
  }

  toggleTag(tag: any){
    // Toggle state of tag
    tag.selected = !tag.selected;
    // Filter blog entries by currently selected tags
    this.filter();
  }

  filter(){
    // Filter blog entries by currently selected tags
    let tagFiltered: entry[] = [];
    test.forEach((entry) => {
      let hasAllTags = true;
      this.tags.forEach((tag) => {
        if (tag.selected) {
          if (!entry.tags.includes(tag.tag))
            hasAllTags = false;
        }
      });
      if (hasAllTags)
      tagFiltered.push(entry);
    });

    // Filter blog entries by search text
    let searchFiltered: entry[] = [];
    if (this.searchtext != '' && this.searchtext != null){
      test.forEach((entry) => {        
        JSON.stringify(entry).toLowerCase().includes(this.searchtext.toLowerCase()) ? searchFiltered.push(entry) : null;
      });
    }

    // Merge both filters
    let filtered: entry[] = [];
    if (searchFiltered.length > 0){
      searchFiltered.forEach((entry) => {
        if (tagFiltered.includes(entry))
          filtered.push(entry);
      });
    } else {
      filtered = tagFiltered;
    }

    this.loadedCards = filtered.slice(0, this.loadNumber);
  }

}