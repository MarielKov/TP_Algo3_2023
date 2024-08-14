import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  password: string = ""

  constructor(private router: Router) { }

  ngOnInit() { }

  intentoLogin() {
    //completar cuando se tenga el stub usuario
    this.router.navigate(['main'])
  }
}
