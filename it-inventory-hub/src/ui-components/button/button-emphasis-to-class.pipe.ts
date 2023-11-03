import { Pipe, PipeTransform } from '@angular/core';
import { ButtonEmphasis } from './button.types';

@Pipe({
  name: 'toBootstrapClass',
})
export class ButtonEmphasisToClassPipe implements PipeTransform {
  public transform(emphasis: ButtonEmphasis): string {
    switch (emphasis) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'info';
      default:
        throw new Error(`Emphasis: ${emphasis} cannot be mapped to bootstrap class!`);
    }
  }
}
