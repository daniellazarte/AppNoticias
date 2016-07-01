export class Article {
  constructor(
    public id: number,
    public idsecction: number,
    public title: string,
    public description: string) {
    console.log('Se ha craedo el Articulo:' + title);
  }

}
