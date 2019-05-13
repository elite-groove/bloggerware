import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public domain = /^http/.test(environment.domain) ? environment.domain : alert('domain must have http(s)');

  constructor() { }

  ngOnInit() {
  }

}
