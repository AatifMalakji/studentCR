import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Istd } from "../../models/student.interface";


@Component({
    selector: 'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.scss']

})
export class StudentComponent{
    cl = console.log;
    title = 'Student Task Using TemplateRef'
stdarr: Istd[] = [{fname: 'Aatif', lname: 'Malakji', email:'malakjiaatifu@gmail.com', contact:'5798472333'}]
onstdadd(fname: HTMLInputElement, lname: HTMLInputElement, email: HTMLInputElement, contact: HTMLInputElement){
let obj : Istd = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    contact: contact.value 
}
this.stdarr.push(obj)
fname.value = ''
lname.value = ''
email.value = ''
contact.value = ''
}

task2 = 'Student Task With ViewChildren Decorator'


stdarr2: Istd[] = []
@ViewChildren('info') stdinfo !: QueryList<ElementRef>
onstdadd2(){
    const stdinfoarr = Array.from(this.stdinfo)
    let obj : Istd ={
        fname: stdinfoarr[0].nativeElement.value,
        lname: stdinfoarr[0].nativeElement.value,
        email: stdinfoarr[0].nativeElement.value,
        contact: stdinfoarr[0].nativeElement.value,
    }
    this.stdarr2.unshift(obj)
    stdinfoarr.forEach(ele => ele.nativeElement.value = '')
}
}