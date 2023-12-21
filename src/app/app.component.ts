import { Post } from './interfaces/post.interface';
import { RequestService } from './services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

   post: Post= {
    id:1,
    title:'foo',
    body:'bar',
    userId:1
  }

  //importacion del servicio 
  constructor(private  requestService: RequestService ){

  }
  ngOnInit(): void {
   /* this.getData();
    this.createData();
    this.pacthData();
    this.updateData();
    this.deleteData(); */
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  createData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  updateData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  pacthData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  deleteData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
  }

  //funcion para obtenr data desde el service 
  getAllData(){
    this.requestService.getdata().subscribe({
      next: response =>{
        console.log(response, ' funcion GetData desde el service ');
      }
    })
  }

  createPost(){

    this.requestService.createPost(this.post).subscribe({
      next: response =>{ console.log(response)},
      error: error => {console.log(error)}
    })
  }


  updatePost( ){
    return this.requestService.updatePost(this.post).subscribe({
      next: response =>{ console.log(response)}
    })
  }

  deletePost(){
   
    return this.requestService.deletePost(this.post.id).subscribe({
      next: response =>{ console.log(response)}
    })
  }


}
