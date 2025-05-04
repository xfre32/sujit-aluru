import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'leadingZero',
    standalone: false
})
export class LeadingZeroPipe implements PipeTransform {

  transform(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

}
