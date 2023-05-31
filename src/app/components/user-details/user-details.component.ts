import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  ID=0;
  user:any;
  constructor(myRoute:ActivatedRoute,public myService:UsersService){
    this.ID=myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //used to make sure that the id is already intialized
    this.myService.GetUserById(this.ID).subscribe(
      {
        next:(data)=>{this.user=data},
        error:(err)=>{console.log(err)}
        
      }
    )

  }

}
