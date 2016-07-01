import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './all-articles';

@Injectable()

export class ArticleService{
  getArticles(){
    return Promise.resolve(ARTICLES);
  }
}
