import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Input() postData = { id: null, userId: 1, title: '', body: '' };

  constructor(public crudService: CrudService, private route: ActivatedRoute, private router: Router, private _location: Location, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  addPost() {
    this.spinner.show();
    this.crudService.addPost(this.postData).subscribe((result) => {    
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.router.navigate(['/coding-challenge']);
    }, (err) => {
      console.log(err);
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  cancel() {
    this._location.back();
  }

}
