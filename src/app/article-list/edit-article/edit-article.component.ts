import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router, Route, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


import { ArticleService } from '../../services/article.service'
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
currentEvents = {};
EditArticleForm;
article_title;
article_author_name;
article_descrip;
article_tags;
article_publish_date;
 currentUrl;

  constructor(private _location: Location, 
    private editService:ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private sharedService:SharedService
  ) {  }

 backClicked() {
      this._location.back();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
       	 this.currentUrl = event.url;
      }
    });

    this.editService.getedit(this.route.snapshot.params.id).
    subscribe((events)=>{
      this.currentEvents = events
    });
	
	this.EditArticleForm =this.fb.group({
        article_title: ["", Validators.required],
        article_author_name: ["", Validators.required],
        article_descrip: ["",Validators.required],
        article_tags: ["",Validators.required],
        article_publish_date: ["", Validators.required]
      })

      this.article_title= this.EditArticleForm.get('article_title');
      this.article_author_name= this.EditArticleForm.get('article_author_name');
      this.article_descrip = this.EditArticleForm.get('article_descrip');
      this.article_tags = this.EditArticleForm.get('article_tags');
      this.article_publish_date = this.EditArticleForm.get('article_publish_date');
    
  }
  editarticle(currentEvents){

  


    this.editService.editarticle(currentEvents, this.route.snapshot.params.id).subscribe(
      response=> {window.location.href = "/article-list";
       // this.sharedService.changeData(true);
      //  this.backClicked();
      },
      error => console.log(error)
    )
  }



}
