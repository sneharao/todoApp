import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: any[], status: string): Todo[] {

    if (!tasks) return [];
    if (status == 'all') return tasks;

    return tasks.filter(eachtask => {
      if (status == 'active') {
        if (eachtask.isComplete == false)
          return eachtask;

      }
      else if (status == 'completed') {
        if (eachtask.isComplete == true)
          return eachtask;
      }
    })

  }

}
