import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  TitlePost: string = '5 Dicas para sua carreira profissional.';
  DescriptionPost: string = 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end';
  ColorTitleFirstPost: string = 'text-sky-600';

  constructor() { }

  ngOnInit(): void {
  }

}
