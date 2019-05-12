import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Payload } from '../interfaces/payload';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  createPost(blogValues) { 
    console.log(this.getPayload());
    blogValues.userId = this.getPayload().userId || this.getPayload()._id;
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
}
