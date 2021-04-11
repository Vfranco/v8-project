import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighting'
})
export class HighlightingPipe implements PipeTransform {

  transform(text: string, search: string, value: string): string {
    const pattern = search
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
      .split(' ')
      .filter(word => word.length > 0)
      .join('|');

    const regex = new RegExp(pattern, 'gi');
    return (search && value) ? text.replace(regex, match => `<b>${match}</b>`) : text;
  }
}
