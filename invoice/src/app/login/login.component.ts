import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import on from 'await-handler';
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';

  constructor(private authService: AuthService){}

  ngOnInit() {
  }

  onClick(){
     //console.log("Click detected");
     this.authorize();
  }

  async authorize(){
    const email = this.username;
    const password = this.password;

    const [err, result] = await on(this.authService.doLogin({email, password}));
   // console.log(err);
    //console.log(result)

    //console.log(JSON.parse(JSON.stringify(result)))

  }
}
