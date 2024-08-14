import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navegar(pagina: string): void {
    this.router.navigate([pagina])
  }

  logout() {
    if(confirm("Esta seguro que desea cerrar sesión?")) {
      //completar cuando se tenga el stub usuario
      this.navegar('login')
    }
  }
}
