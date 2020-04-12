import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {
  TYPES = {
    'undefined'        : 'undefined',
    'number'           : 'number',
    'boolean'          : 'boolean',
    'string'           : 'string',
    '[object Function]': 'function',
    '[object RegExp]'  : 'regexp',
    '[object Array]'   : 'array',
    '[object Date]'    : 'date',
    '[object Error]'   : 'error'
  };
  TOSTRING = Object.prototype.toString;
  transform(value, args:string[]) : any {


    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key], type: this.getType(value[key])});
    }
    return keys;
    
  }
  getType(o) {
    if(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i.test(o)) {
      return 'date';
    }
    return this.TYPES[typeof o] || this.TYPES[this.TOSTRING.call(o)] || (o ? 'object' : 'null');
  };
}





