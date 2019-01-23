import {
    BrowserModule
}

from '@angular/platform-browser';
import {
    NgModule
}

from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
}

from '@angular/forms';
import {
    TagInputModule
}

from 'ngx-chips';
import {
    BrowserAnimationsModule
}

from '@angular/platform-browser/animations';
import {
    DataTablesModule
}

from 'angular-datatables';
import {
    CarouselModule
}

from 'ngx-bootstrap/carousel';
import {
    AppComponent
}

from './app.component';
import {
    AppRoutingModule
}

from './app-routing.module';
import {
    HttpClientModule
}

from '@angular/common/http';
import {
    DateTimePickerModule
}

from '@syncfusion/ej2-angular-calendars';
import {
    ArticleListComponent
}

from './article-list/article-list.component';
import {
    HeaderComponent
}

from './componets/header/header.component';
import {
    FooterComponent
}

from './componets/footer/footer.component';
import {
    TagInputComponent
}

from './shared/tag-input/tag-input.component';
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
@NgModule( {
    declarations: [ AppComponent, ArticleListComponent, HeaderComponent, FooterComponent, EditArticleComponent, DeleteArticleComponent, CreateArticleComponent, TagInputComponent], imports: [ BrowserModule, DataTablesModule, AppRoutingModule, HttpClientModule, DateTimePickerModule, TagInputModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule], providers: [], bootstrap: [AppComponent]
}

) export class AppModule {}
