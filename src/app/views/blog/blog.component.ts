import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;

  constructor() { }

  ngOnInit() {
  }

}
