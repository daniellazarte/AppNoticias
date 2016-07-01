"use strict";
var Article = (function () {
    function Article(id, idsecction, title, description) {
        this.id = id;
        this.idsecction = idsecction;
        this.title = title;
        this.description = description;
        console.log('Se ha craedo el Articulo:' + title);
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map