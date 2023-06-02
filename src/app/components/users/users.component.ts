import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
  users:any;
  closeResult="";
  

  constructor(public serviceOne:UsersService,private modalService:NgbModal){

    serviceOne.GetAllUsers().subscribe(
      {
        next:(data)=>{this.users=data},
        error:(err)=>{}
      }
    );

  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(name:any,email:any,phone:any,city:any,suite:any,street:any) {

    let newUser={name,email,phone,city,suite,street}
    this.serviceOne.AddUSer(newUser).subscribe(
      {
        next:(data)=>{console.log(data)},
        error:(err)=>{console.log(err)}
      }
    );

  }

}
