import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';


@Component({
  selector: 'my-app',
  template: `
  <h1> {{ title }}</h1>
  <div class="card card-1" *ngFor="let article of articles">
  <div class="titulo">
    <a href='edicion/articulo/'>{{ article.title }}</a>
  </div>
  <div class="descripcion">
    {{ article.description }}
  </div>


</div>



  `,

  providers: [ArticleService]


})

export class AppComponent implements OnInit{
  title = 'Ultimas Noticias Andina';
  articles: Article[];

  constructor(private articleService: ArticleService){ }
  getArticles(){
    this.articleService.getArticles()
    .then(articles => this.articles = articles);
  }

  ngOnInit(){
    this.getArticles();
  }



}
