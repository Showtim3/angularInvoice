import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import on from 'await-handler';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
  }

  onClick(){
     this.authorize();
  }

  async authorize(){
    const email = this.username;
    const password = this.password;
    const [error, data] = await on(this.authService.doLogin({email, password}));

    if(!error) {
      this.router.navigateByUrl('/invoice');
    } else {
      alert("Incorrect credentials")
    }
  }

 async registerHandler() {
    console.log("register Fired");
   const[err,result] =  await on(this.authService.insertData());
   if(err) console.log("THE ERROR IS : " + err);
   else console.log("Worked" + result);
  }
}
