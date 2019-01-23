import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { ArticleService } from '../../services/article.service'
import { SharedService } from '../../services/shared.service';
const httpHeaders={
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}
  
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  AddArticleForm;
  article_title;
  article_author_name;
  article_descrip;
  article_tag;
  article_publish_date;
     items;
  public dateValue: Date = new Date();


constructor( 
  private _location:Location,
  private articleService: ArticleService,
  fb: FormBuilder,
  private http: HttpClient,
  private sharedService:SharedService) {

  this.AddArticleForm =fb.group({
        article_title: ["",[ Validators.required]],
        article_author_name: ["", Validators.required],
        article_descrip: ["", Validators.required],
        article_tag: ["", Validators.required],
        article_publish_date: ["", Validators.required],
    })

   	  this.article_title = this.AddArticleForm.get('article_title');
      this.article_author_name = this.AddArticleForm.get('article_author_name');
      this.article_descrip = this.AddArticleForm.get('article_descrip');
      this.article_tag = this.AddArticleForm.get('article_tag');
      this.article_publish_date = this.AddArticleForm.get('article_publish_date');
     }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

   addArticle(form){   

  

   this.AddArticleForm.value.article_publish_date = this.AddArticleForm.value.article_publish_date.toLocaleDateString();
   this.AddArticleForm.value.article_id= new Date().getUTCMilliseconds();
   
    this.articleService.addarticle(this.AddArticleForm.value).subscribe(
      response=> {window.location.href = "/article-list";      
      },
      error => console.log(error,"error")
    )
  }

}
