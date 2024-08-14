/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { CardsTiendaComponent } from './cardsTienda.component'

describe('BusquedaDeFigusComponent', () => {
  let component: CardsTiendaComponent
  let fixture: ComponentFixture<CardsTiendaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsTiendaComponent]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsTiendaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
