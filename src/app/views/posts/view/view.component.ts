import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { PostResponse, Posts } from 'src/app/interfaces/post-response';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public posts: PostResponse;
  public params;


  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute, private sanitize: DomSanitizer,
    private meta: Meta, private title: Title) {
    this.getParams().then(
      params => {
        this.blogService.getPosts((this.params.page - 1) * 10).subscribe(
          (posts: PostResponse) => {
            console.log(posts);
            this.posts = posts;
            this.meta.addTag({ name: 'description', content: environment.blog.description });
            this.meta.addTag({ name: 'author', content: environment.blog.author });
            this.meta.addTag({ name: 'keywords', content: environment.blog.keywords });
            this.title.setTitle(environment.blog.title);
          }
        );
      }
    );
  }

  ngOnInit() {
    console.log(this.params);
  }

  async getParams() {
    return await this.route.queryParams.subscribe(
      params => this.params = params
    );
  }

  handlePageChange(pageNumber) {
    this.blogService.getPosts((pageNumber - 1) * 10).subscribe(
      (posts: PostResponse) => {
        this.router.navigate(['/posts/list'], { queryParams: { page: pageNumber } })
        console.log(posts);
        this.posts = posts;
      }
    );
  }

  sanitizeUrl(url) {
    this.sanitize.bypassSecurityTrustStyle(url);
  }

  log(item) {
    console.log(item);
    return item;
  }

  getPageURL(page) {
    console.log(page);
    return `/posts/list?page=${page}`;
  }



}
