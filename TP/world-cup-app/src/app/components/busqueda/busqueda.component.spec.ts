/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BusquedaComponent } from './busqueda.component'

describe('BusquedaComponent', () => {
  let component: BusquedaComponent
  let fixture: ComponentFixture<BusquedaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
