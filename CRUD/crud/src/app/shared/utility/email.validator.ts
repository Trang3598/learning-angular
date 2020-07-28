import {AbstractControl} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {map} from "rxjs/operators";

export function uniqueValidator(userService: ApiService) {
  return (control: AbstractControl) => {
    const email = control.value;
    console.log(email);
    return userService.getUsers().pipe(
      map(user => {
        const isMailNotUnique = user.map(user => user.email).some(value => value === email);
        console.log(isMailNotUnique);
        if (isMailNotUnique) {
          return {duplicatedEmail: true};
        }
        return null
      })
    )
  }
}
