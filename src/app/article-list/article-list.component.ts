import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit,
    Renderer,
    OnDestroy,
    ChangeDetectorRef,
    ViewEncapsulation
}

from '@angular/core';
import {
    Router,
    NavigationEnd
}

from '@angular/router';
import {
    ActivatedRoute
}

from '@angular/router';
import {
    Subscription
}

from 'rxjs';
import * as config from '../../globalConfig';

import {
    SharedService
}

from '../services/shared.service';
@Component( {
    selector: 'app-article-list', templateUrl: './article-list.component.html', styleUrls: ['./article-list.component.css'], encapsulation: ViewEncapsulation.None
}

) export class ArticleListComponent implements OnInit {
    dtOptions:DataTables.Settings= {}
    ;
    constructor( private route: ActivatedRoute, //private titleService:TitleService,
    private renderer: Renderer, private router: Router, private sharedService: SharedService) {}
    ngOnInit() {
        this.renderDatatable();
        this.sharedService.currentData.subscribe((data)=> {
            if(data) {
                console.log(data, "Service change");
            }
        }
        )
    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', (event)=> {
            if (event.target.hasAttribute("article-edit-id")) {
                this.router.navigate(["article-list/edit-article/"+ event.target.getAttribute("article-edit-id")], {
                    queryParams: {
                        app: "article"
                    }
                }
                );
            }
            if(event.target.hasAttribute("article-delete-id")) {
                this.router.navigate(["article-list/delete-article/"+ event.target.getAttribute("article-delete-id")], {
                    queryParams: {
                        app: "article"
                    }
                }
                );
            }
        }
        );
    }
    renderDatatable() {
        this.dtOptions= {
            ajax: {
                "url": config.gServiceUrl+"articles/read_articles.php",
                "dataSrc":function ( json) {
                    console.log(json);
                    let myJson= {data: []};
                    myJson.data.push(json.records) return myJson.data[0];
                }
            }
            ,
            columns: [ {
                title: 'Title', data: 'article_title'
            }
            ,
            {
                title: 'Description', data: 'article_descrip'
            }
            ,
            {
                title: 'Author Name', data: 'article_author_name'
            }
            ,
            {
                title: 'Tags', data: 'article_tag'
            }
            ,
            {
                title: 'Publish Date', data: 'article_publish_date'
            }
            ,
            {
                title: 'Option',
                data: null,
                className: "center",
                render: function (data, type, row) {
                    return `<a article-edit-id="`+data.article_id+`" data-toggle="modal" class="btn default btn-xs purple"><i class="mdi mdi-square-edit-outline"></i> Edit </a> <a article-delete-id="`+data.article_id+`" data-toggle="modal" class="btn default btn-xs black"><i class="mdi mdi-delete"></i> Delete</a> `;
                }
            }
            ]
        }
        ;
    }
}
