import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(this.url);
  }

  createPost(post: Post){
    return this.http.post( this.url, post)
  }

  updatePost( post: Post){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

  deletePost(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}
