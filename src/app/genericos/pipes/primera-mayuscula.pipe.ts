import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraMayuscula'
})
export class PrimeraMayusculaPipe implements PipeTransform {

  transform(value: string): string {
   return value.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
  }

}
