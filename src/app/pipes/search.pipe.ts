import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchTitle: string): any[] {
    if(!value || !searchTitle) {
      return value;
    } 
    return value.filter(posts=> posts.title.toLowerCase().indexOf(searchTitle.toLowerCase()) != -1);
  }

}
