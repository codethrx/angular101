import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Posts } from 'src/interface';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  // template: `<h1>FIrst Component</h1>`,
  styleUrls: ['./firstcomponent.component.css'],
})
export class FirstcomponentComponent implements OnInit {
  @Input() content: string[] = [];
  @Output() log: EventEmitter<string[]> = new EventEmitter();
  id: string = 'main-id';
  red: boolean = true;
  inputVal: string = '';
  show: boolean = false;
  list: number[] = [1, 2, 3, 4];
  data: Posts[] = [];
  // posts: Posts[] | null = [];
  deleteItem(item: number): void {
    this.list = this.list.filter((i) => i !== item);
  }
  onToggle() {
    this.show = !this.show;
  }
  onClick(event: any, name: string): void {
    console.log(event);
    console.log(`Hola ${name}`);
  }
  viewRefVar(variable: string) {
    console.log(variable);
  }
  constructor(private posts: PostsService) {
    // console.log(posts.getData());
  }

  ngOnInit(): void {
    console.log(this.posts.getData());
    this.posts.getPosts().subscribe((data) => {
      console.log(data);
      return (this.data = data);
    });
  }
  emitdata() {
    this.log.emit(['log']);
  }
}
