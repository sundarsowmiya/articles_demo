import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

import * as config from '../../globalConfig';
import { ArticleTypes } from '../types/article.type';

import { map } from 'rxjs/operators';

const httpHeaders={
    headers: new HttpHeaders(
    {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'

     })
}


@Injectable({
    providedIn: 'root'
})

export class ArticleService{
    
    articleAPIurl: any = config.gServiceUrl+"articles/create_article.php";
    eventsAPIurl:any = config.gServiceUrl+"articles/read_article.php"
    eventseditAPIurl:any = config.gServiceUrl+"articles/update_article.php"
    eventsdeleteAPIurl:any = config.gServiceUrl+"articles/delete_article.php"


    constructor(private http: HttpClient) { }

   addarticle(data): Observable<ArticleTypes[]>{
      console.log(this.articleAPIurl, data, httpHeaders);
       return this.http.post<ArticleTypes[]>(this.articleAPIurl, data, httpHeaders)  
   }
  

    getedit(id:number): Observable<ArticleTypes[]>{
        return this.http.get<ArticleTypes[]>(this.eventsAPIurl+"?id="+id);
    }

    editarticle(data,id:number): Observable<ArticleTypes[]>{
    console.log(data);
        return this.http.put<ArticleTypes[]>(this.eventseditAPIurl+"?id="+id, data, httpHeaders)  
    }


    deletearticle(id:number): Observable<ArticleTypes[]>{
        return this.http.delete<ArticleTypes[]>(this.eventsdeleteAPIurl+"?id="+id, httpHeaders);
    }


}