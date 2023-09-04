import { Component, Input } from '@angular/core';
import { entry } from 'src/app/blog-entry';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() post: entry = new entry('', '', [], '', '', '', '', '');

}
