import { reject, resolve } from 'q';
import {AbstractControl,Validators,ValidationErrors} from '@angular/forms'

export class PasswordValidators{

    static shouldBeValid(control: AbstractControl):Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value != '1234')
                 return resolve({shouldBeValid:true});
                else
                 return resolve(null);
            },2000)
        });
    }

    static passwordShouldMatch(control: AbstractControl): ValidationErrors | null{
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if(newPassword.value !== confirmPassword.value)
            return {passwordMismatch:true};
        return null;
    }
}