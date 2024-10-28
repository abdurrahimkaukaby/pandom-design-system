import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDecodeBase64Password'
})
export class TransformDecodeBase64PasswordPipe implements PipeTransform {

  transform(base64Data: string): string {
      return atob(base64Data);    
  }

}
