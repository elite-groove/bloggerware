import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Meta, Title } from '@angular/platform-browser';
import { Post } from 'src/app/interfaces/post';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  params;
  post: Post;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private meta: Meta, private title: Title) {
    this.getParams().then(
      params => {
        this.blogService.getPost(this.params['id']).subscribe(
          (post: Post) => {
            this.post = post;
            this.meta.addTag({ name: 'description', content: this.post.content });
            this.meta.addTag({ name: 'author', content: environment.blog.author });
            this.meta.addTag({ name: 'keywords', content: this.post.content });
            this.title.setTitle(this.post.title);
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
