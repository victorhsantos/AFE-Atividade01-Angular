import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() Title: string = '';
  @Input() Description: string = '';
  @Input() ColorTitle: string = 'text-black';

  constructor() { }

  ngOnInit(): void {
  }

}
