import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-coding-challenge',
  templateUrl: './coding-challenge.component.html',
  styleUrls: ['./coding-challenge.component.css']
})
export class CodingChallengeComponent implements OnInit {

  posts: any = [];
  public show: boolean = false;

  constructor(public crudService: CrudService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.spinner.show();
    this.posts = [];
    this.crudService.getPosts().subscribe((data: {}) => { 
      this.posts = data;    
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  deletePost(id) {
    this.spinner.show();
    this.crudService.deletePost(id).subscribe(result => {
        this.getAllPosts();     
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }, (err) => {
        console.log(err);    
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }
    );
  }

  toggle(id) {
    let post = this.posts.find(item => item.id == id);
    post.show = !post.show;
  }

  onScroll() {
    console.log('Infinite scroll!!!');
  }

}
