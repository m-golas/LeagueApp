import { Type } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Challange, ChallangeTypes } from 'src/app/core/_models/challange';

@Pipe({
  name: 'challangeType'
})
export class ChallangeTypePipe implements PipeTransform {

  transform(values: Challange[] | null, type: Challange["type"]): Challange[] | null {
    return values ? values.filter((value) => value.type === type) : null;
  }

}
