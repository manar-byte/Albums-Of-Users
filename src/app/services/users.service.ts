import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly myClient: HttpClient) {}

  private readonly Base_URL = 'http://localhost:3000/users';

  //requests(methods)=> get users

  GetAllUsers() {
    return this.myClient.get(this.Base_URL);
  }

  GetUserById(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id);
  }

  AddUSer(newUser:any){
    return this.myClient.post(this.Base_URL,newUser);

  }
}
