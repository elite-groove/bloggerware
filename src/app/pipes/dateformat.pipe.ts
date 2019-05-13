import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../interfaces/post-response';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(posts: Array<Posts>, args?: any): any {
    // console.log(posts);
    if (!posts) { return []; }
    const datedPosts = posts.map(
      post => {
        // console.log(post.createdAt);
        post.createdAt = new Date(post.createdAt).toLocaleString();
        return post;
      });

    return datedPosts;
  }

}
