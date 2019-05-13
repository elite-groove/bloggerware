import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Payload } from '../interfaces/payload';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
import { AuthenticationService } from './auth/authentication.service';
import { Observable } from 'rxjs';
import { PostResponse } from '../interfaces/post-response';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private authService: AuthenticationService) { }

  createPost(blogValues) { 
    console.log(this.getPayload());
    blogValues.userId = this.getPayload().userId || this.authService.getUserId();
    return this.http.post(environment.host + '/blog-posts', blogValues);
  }

  getPayload(): Payload {
    return this.jwtHelper.decodeToken(window.localStorage['token']);
  }

  uploadBlogPosters(data) {
    return this.http.post(environment.host + '/storage', data);
  }
  uploadBlogPostersRequest(req) {
    return this.http.request(req);
  }

  getPosts(skip?: number): Observable<PostResponse> {
    return this.http.get(environment.host + `/blog-posts?$skip=${skip || 0}`) as Observable<PostResponse>;
  }

  getPost(id) {
    return this.http.get(environment.host + `/blog-posts/${id}`);
  }
}
