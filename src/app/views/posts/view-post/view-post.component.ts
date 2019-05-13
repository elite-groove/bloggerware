import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  params;
  post;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.getParams().then(
      params => {
        this.blogService.getPost(this.params['id']).subscribe(
          post => {
            this.post = post;
          }
        );
      }
    );

  }

  async getParams() {
    await this.route.params.subscribe(
      params => {
        this.params = params;
      }
    );
  }

  ngOnInit() {
  }

}
