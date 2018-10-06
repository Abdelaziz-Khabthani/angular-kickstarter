import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // execute filter when the data changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterText: string): any {
    let tmp: any[] = [];
    value.forEach(obj => {
      if (obj.value === filterText) {
        tmp.push(obj);
      }
    });
    return tmp;
  }

}
