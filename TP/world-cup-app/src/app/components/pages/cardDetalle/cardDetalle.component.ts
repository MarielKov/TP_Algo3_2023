import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cardDetalle',
  templateUrl: './cardDetalle.component.html',
  styleUrls: ['./cardDetalle.component.css']
})

export class CardDetalleComponent implements OnInit {
  /* cardElegida!: Card */

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarAMain(): void {
    this.router.navigate(['/main'])
  }

}