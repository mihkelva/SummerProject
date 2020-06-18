import { Project } from 'src/app/new-project/project.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByYear'
})
export class FilterByYearPipe implements PipeTransform {

  transform(value: Project[], year: number): Project[] {
    // let filteredArray = value.forEach()
    return null;
  }

}
