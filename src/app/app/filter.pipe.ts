import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
   
  transform(value: Array<any>, filterString: String): any[] {
    if (!value) {return []; }
    if (!filterString) {return value; }
    console.warn(filterString);
    filterString = filterString.toString().toLowerCase();
    return value.filter( it => {
        //return it.name.toLowerCase().includes(filterdata);
        return it.email.includes(filterString);
    });
}

}
