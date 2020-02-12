import { AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import { resolve, reject } from 'q';

export class UsernameValidators{

    static cannotContainSpace(control: AbstractControl):ValidationErrors|null{
        if((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpace: true};
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value === 'Hemant')
                    return resolve({ shouldBeUnique : true});
                else
                    return resolve(null);
            },2000)
        });

    }

    
}