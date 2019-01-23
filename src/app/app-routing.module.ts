import {
    NgModule
}

from '@angular/core';
import {
    RouterModule,
    Routes
}

from '@angular/router';
import {
    ArticleListComponent
}

from './article-list/article-list.component';
import {
    EditArticleComponent
}

from './article-list/edit-article/edit-article.component';
import {
    DeleteArticleComponent
}

from './article-list/delete-article/delete-article.component';
import {
    CreateArticleComponent
}

from './article-list/create-article/create-article.component';
const routes:Routes=[ {
    path:'article-list',
    component:ArticleListComponent,
    children:[ {
        path: 'create-article', component: CreateArticleComponent
    }
    ,
    {
        path: 'edit-article/:id', component: EditArticleComponent
    }
    ,
    {
        path: 'delete-article/:id', component: DeleteArticleComponent
    }
    ]
}

,
{
    path: "", redirectTo: '/article-list', pathMatch: 'full'
}

];
@NgModule( {
    exports: [RouterModule], imports: [RouterModule.forRoot(routes)]
}

) export class AppRoutingModule {}
