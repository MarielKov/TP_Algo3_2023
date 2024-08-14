import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css', '../../container.css']
})
export class MainComponent implements OnInit {
  esCedida!: boolean
  constructor() { }

  ngOnInit() {
    this.esCedida= true
  }

}
