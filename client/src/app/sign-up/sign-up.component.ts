import { Component, OnInit } from '@angular/core';
import{ UsersService} from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name;
  email;
  password;
  address;
  city;
  constructor(private us: UsersService) { }
 
  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.email,this.password,this.address,this.city);
    // console.log(this.name)
}
  }


