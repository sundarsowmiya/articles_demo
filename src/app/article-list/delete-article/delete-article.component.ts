import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';

import { ArticleService } from '../../services/article.service'

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {
  DeleteArticlForm;
  
  constructor(
    private _location: Location, 
    private route: ActivatedRoute, 
    private deleteService:ArticleService, f:FormBuilder) {
    
    this.DeleteArticlForm=f.group({
    });
  }

  ngOnInit() {
  }
   backClicked() {
    this._location.back();
  }
  deleteArticle(){
    this.deleteService.deletearticle(this.route.snapshot.params.id).subscribe(
      (response)=> {window.location.href = "/article-list";
        //this.sharedService.changeData(true);
        this.backClicked();
      },
      (error) => console.log(error)
    )    
  }

}
